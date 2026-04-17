// app/(main)/vehicles/actions.ts
"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getSession } from "@/app/_lib/sessions";
import { redirect } from "next/navigation";



export async function addVehicle(formData: FormData) {

 const session = await getSession();
 const ownerId = session?.userId; 

 console.log("Session Data on Dashboard:", session); // Debugging line



  if (!session) {
    redirect("/login");
  }
  const make = formData.get("make") as string;
  const model = formData.get("model") as string;
  const plateNumber = formData.get("plateNumber") as string;
  const type = formData.get("type") as any;


  await prisma.vehicle.create({
    data: {
      make,
      model,
      plateNumber,
      Type: type,
      ownerId: ownerId as string,
    },
  });

  revalidatePath("/vehicles"); // Refresh the list automatically
}

/**
 * FUNCTION 1: Get CURRENT details for a specific vehicle
 * Returns: Name, Plate, and the LATEST location/fuel/speed
 */
export async function getVehicleCurrentUpdate(vehicleId: string) {
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: vehicleId },
    include: {
      status: {
        orderBy: { lastUpdate: 'desc' },
        take: 1, // Only get the very latest signal
      },
    },
  });

  if (!vehicle) return null;

  const latest = vehicle.status[0];

  return {
    id: vehicle.id,
    name: `${vehicle.make} ${vehicle.model}`,
    plateNumber: vehicle.plateNumber,
    type: vehicle.Type,
    // Latest telemetry data
    state: latest?.state || "OFFLINE",
    lat: latest?.lastLat,
    lng: latest?.lastLng,
    speed: latest?.lastSpeed,
    fuel: latest?.fuelLevel,
    lastSeen: latest?.lastUpdate,
  };
}

/**
 * FUNCTION 2: Get all LOCATION HISTORY for a specific vehicle
 * Useful for drawing the breadcrumb trail on the map.
 */
export async function getVehicleHistory(vehicleId: string, limit: number = 100) {
  return await prisma.status.findMany({
    where: { vehicleId: vehicleId },
    orderBy: { lastUpdate: 'desc' }, // Newest first
    take: limit,
    select: {
      lastLat: true,
      lastLng: true,
      lastSpeed: true,
      fuelLevel: true,
      lastUpdate: true,
      state: true,
    },
  });
}

export async function getAllVehiclesDisplayData() {
  try{
const session = await getSession();
  const ownerId = session?.userId; 
  if (!ownerId) return [];
  const vehicles = await prisma.vehicle.findMany({
  where: { ownerId: ownerId },
    include: {
      status: {
        orderBy: { lastUpdate: 'desc' },
        take: 1,
      },
    },
  });
  console.log("Fetched Vehicles with Status:", vehicles); // Debugging line

  return vehicles.map((v: any) => ({
    id: v.id,
    Name: `${v.make} ${v.model} ${v.plateNumber}`,
    type: v.Type,
    status: v.status[0]?.state || "OFFLINE",
    fuel: v.status[0]?.fuelLevel || 0,
    lat: v.status[0]?.lastLat || 0,
    lng: v.status[0]?.lastLng || 0,
  })
);
}catch (error) {
    // This will print the full, detailed error in your Terminal/Command Prompt
    console.error("❌ PRISMA ERROR:", error);
    
    // Throwing the error again lets your UI know something went wrong
    throw new Error("Failed to fetch vehicle data. Check server logs.");
  }
}