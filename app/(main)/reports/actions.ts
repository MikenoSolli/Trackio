// app/(main)/vehicles/actions.ts
"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addVehicle(formData: FormData) {
  const make = formData.get("make") as string;
  const model = formData.get("model") as string;
  const plateNumber = formData.get("plateNumber") as string;
  const type = formData.get("type") as any;
  const ownerId = "1"; // You would get this from getSession() later

  await prisma.vehicle.create({
    data: {
      make,
      model,
      plateNumber,
      Type: type,
      ownerId: ownerId,
    },
  });

  revalidatePath("/vehicles"); // Refresh the list automatically
}

export async function getAllVehiclesDisplayData() {
  try{
    const vehicles = await prisma.vehicle.findMany({
    where: { ownerId: "4" },
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
    Name: `${v.model}.${v.plateNumber}`,
    type: v.Type,
    status: v.status[0]?.state || "OFFLINE",
    fuel: v.status[0]?.fuelLevel || 0,
    lat: v.status[0]?.lastLat || 0,
    lng: v.status[0]?.lastLng || 0,
  }));
}catch (error) {
    // This will print the full, detailed error in your Terminal/Command Prompt
    console.error("❌ PRISMA ERROR:", error);
    
    // Throwing the error again lets your UI know something went wrong
    throw new Error("Failed to fetch vehicle data. Check server logs.");
  }
}