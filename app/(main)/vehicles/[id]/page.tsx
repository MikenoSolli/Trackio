// app/vehicles/[id]/page.tsx
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import VehicleDetailClient from "./VehicleDetailClient";
import { startOfDay } from "date-fns"
import { late } from "zod/v3";

export default async function VehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

const vehicle = await prisma.vehicle.findUnique({
    where: { id },
    include: {
      status: {
        where: { lastUpdate: { gte: startOfDay(new Date()) } },
        orderBy: { lastUpdate: 'desc' },
      },
      maintenance: { orderBy: { nextService: 'desc' }, take: 1 }
    }
  });

  // 1. Only 404 if the vehicle record is missing entirely
  if (!vehicle) {
    notFound();
  }

let statusPool = vehicle.status;
if (statusPool.length < 10) {
  vehicle.status = await prisma.status.findMany({
    where: { vehicleId: id },
    orderBy: { lastUpdate: 'desc' },
    take: 20
  });
}

  // 2. Get the latest status, or use a default "Empty" state
  const latestStatus = vehicle.status[0] || null;
  const lastMaintenance = vehicle.maintenance[0];

  //VALIDATE STATUS DATA
  let currentstatus = "OFFLINE";
  let latestUpdate = null;
 


  latestUpdate = latestStatus.lastUpdate;

  const now = new Date();
  const diffInMinutes = (now.getTime() - latestUpdate.getTime()) / (1000 * 60);

  if (diffInMinutes <= 15) {
    currentstatus = latestStatus.state;
  }
 
  if(latestUpdate.getDay() !== now.getDay()){
    latestUpdate=latestUpdate.toLocaleDateString() + " " + latestUpdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });  
  }
  else{
    latestUpdate=latestUpdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  
  

  const formattedVehicle = {
    id: vehicle.id,
    name: `${vehicle.make ?? ''} ${vehicle.model ?? ''}`.trim() || "Unit " + id.slice(-4),
    plate: vehicle.plateNumber || "NO PLATE",
    status: currentstatus,
    type: vehicle.Type,
    telemetry: {
      fuel: latestStatus?.fuelLevel ?? 0,
      speed: latestStatus?.lastSpeed ?? 0,
      engineHours: latestStatus?.engineHours ?? 0,
      // Default to 0,0 or a specific regional center if no GPS data exists
      lat: latestStatus?.lastLat ?? -1.2921, 
      lng: latestStatus?.lastLng ?? 36.8219,
      lastUpdate: latestUpdate || "No Data",
    },
    // 3. History will just be an empty array [] if no status exists
    history: vehicle.status
      .filter(s => s.lastLat && s.lastLng)
      .map(s => ({
        pos: [s.lastLat, s.lastLng] as [number, number],
        time: latestUpdate || "No Data"
      }))
      .reverse(),
    daysToService: lastMaintenance?.nextService 
      ? Math.ceil((lastMaintenance.nextService.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) + " Days"
      : "Pending"
  };

  return <VehicleDetailClient vehicle={formattedVehicle} />;
}