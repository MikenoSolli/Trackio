import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const data = {
      users: await prisma.user.findMany(),
      companies: await prisma.company.findMany(),
      drivers: await prisma.driver.findMany(),
      vehicles: await prisma.vehicle.findMany(),
      alerts: await prisma.alert.findMany(),
      maintenance: await prisma.maintenance.findMany(),
      status: await prisma.status.findMany(),
      trip: await prisma.trip.findMany(),
      maintenance_data: await prisma.maintenance_data.findMany(),
      dailySummary: await prisma.dailySummary.findMany(),
    };

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
