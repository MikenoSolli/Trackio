import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/app/_lib/sessions";

export async function GET() {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(session.userId) },
      select: { companyId: true },
    });

    if (!user?.companyId) {
      return NextResponse.json({ error: "No company associated with user" }, { status: 403 });
    }

    const drivers = await prisma.driver.findMany({
      where: { companyId: user.companyId },
      include: {
        vehicle: {
          select: {
            id: true,
            model: true,
            plateNumber: true,
            make: true,
            Type: true,
          },
        },
        alert: {
          where: { isResolved: false },
          select: { id: true, type: true, severity: true, message: true, createdAt: true },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        _count: {
          select: { alert: true },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(drivers, { status: 200 });
  } catch (error) {
    console.error("DRIVERS_GET_ERROR:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST: Register a new driver
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, licenseNo, licenceExp, vehicleId } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Create the driver
    // Note: We use uuidv4 for the ID since your schema uses String as the @id
    const newDriver = await prisma.driver.create({
      data: {
        name,
        phone,
        licenseNo,
        performance: 100, // Default starting performance
        licenceExp: licenceExp ? new Date(licenceExp) : null,
      },
    });

    // If a vehicleId was provided, associate it
    if (vehicleId) {
      await prisma.vehicle.update({
        where: { id: vehicleId },
        data: { driverId: newDriver.id },
      });
    }

    return NextResponse.json(newDriver, { status: 201 });
  } catch (error) {
    console.error("DRIVERS_POST_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to register driver" },
      { status: 500 }
    );
  }
}

// PATCH: Update driver details (License, Name, etc.)
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, name, phone, licenceExp, performance, licenseNo } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Driver ID is required for updates" },
        { status: 400 }
      );
    }

    const updatedDriver = await prisma.driver.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(phone && { phone }),
        ...(licenseNo && { licenseNo }),
        ...(performance && { performance }),
        ...(licenceExp && { licenceExp: new Date(licenceExp) }),
      },
    });

    return NextResponse.json(updatedDriver, { status: 200 });
  } catch (error) {
    console.error("DRIVERS_PATCH_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update driver record" },
      { status: 500 }
    );
  }
}

// PUT: Assign or unassign driver to a vehicle
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { driverId, vehicleId, action } = body;

    if (!driverId) {
      return NextResponse.json({ error: "Driver ID is required" }, { status: 400 });
    }

    if (action === "assign") {
      if (!vehicleId) {
        return NextResponse.json({ error: "Vehicle ID is required for assignment" }, { status: 400 });
      }

      // First, unassign any driver currently assigned to this vehicle
      await prisma.vehicle.updateMany({
        where: { driverId: driverId },
        data: { driverId: null },
      });

      // Assign the driver to the new vehicle
      const updatedVehicle = await prisma.vehicle.update({
        where: { id: vehicleId },
        data: { driverId: driverId },
      });

      return NextResponse.json({ message: "Driver assigned successfully", vehicle: updatedVehicle }, { status: 200 });
    } 
    else if (action === "unassign") {
      // Unassign driver from their current vehicle
      await prisma.vehicle.updateMany({
        where: { driverId: driverId },
        data: { driverId: null },
      });

      return NextResponse.json({ message: "Driver unassigned successfully" }, { status: 200 });
    }
    
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("DRIVERS_PUT_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to assign/unassign driver" },
      { status: 500 }
    );
  }
}

// DELETE: Remove a driver
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Driver ID required" }, { status: 400 });
    }

    // First, disconnect the driver from any vehicles to avoid FK constraints
    await prisma.vehicle.updateMany({
      where: { driverId: id },
      data: { driverId: null },
    });

    await prisma.driver.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Driver deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DRIVERS_DELETE_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete driver" },
      { status: 500 }
    );
  }
}