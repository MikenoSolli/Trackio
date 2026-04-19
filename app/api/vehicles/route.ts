import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/app/_lib/sessions";

export async function GET() {
  try {
    const session = await getSession();
    const userId = Number(session?.userId);
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's companyId
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { companyId: true }
    });

    if (!user?.companyId) {
      return NextResponse.json({ error: "User has no company" }, { status: 403 });
    }

    // Get vehicles belonging to the user's company
    const vehicles = await prisma.vehicle.findMany({
      where: { companyId: user.companyId },
      select: {
        id: true,
        make: true,
        model: true,
        plateNumber: true,
        Type: true,
        driverId: true,
      },
      orderBy: [{ make: 'asc' }, { model: 'asc' }],
    });

    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    console.error("VEHICLES_GET_ERROR:", error);
    return NextResponse.json({ error: "Failed to fetch vehicles" }, { status: 500 });
  }
}