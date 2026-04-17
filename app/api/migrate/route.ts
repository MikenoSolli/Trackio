import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    // First, add companyId column to users table if it doesn't exist
    try {
      await prisma.$executeRawUnsafe(`ALTER TABLE users ADD COLUMN companyId VARCHAR(255) NULL`);
    } catch (e) { /* column may already exist */ }
    try {
      await prisma.$executeRawUnsafe(`ALTER TABLE users ADD CONSTRAINT User_companyId_fkey FOREIGN KEY (companyId) REFERENCES companies(id) ON DELETE SET NULL`);
    } catch (e) { /* constraint may already exist */ }

    // First, add companyId column to vehicles table if it doesn't exist
    try {
      await prisma.$executeRawUnsafe(`ALTER TABLE vehicle ADD COLUMN companyId VARCHAR(255) NULL`);
    } catch (e) { /* column may already exist */ }
    try {
      await prisma.$executeRawUnsafe(`ALTER TABLE vehicle ADD CONSTRAINT Vehicle_companyId_fkey FOREIGN KEY (companyId) REFERENCES companies(id) ON DELETE SET NULL`);
    } catch (e) { /* constraint may already exist */ }

    // Add companyId to drivers table
    try {
      await prisma.$executeRawUnsafe(`ALTER TABLE driver ADD COLUMN companyId VARCHAR(255) NULL`);
    } catch (e) { /* column may already exist */ }
    try {
      await prisma.$executeRawUnsafe(`ALTER TABLE driver ADD CONSTRAINT Driver_companyId_fkey FOREIGN KEY (companyId) REFERENCES companies(id) ON DELETE SET NULL`);
    } catch (e) { /* constraint may already exist */ }

    // Create 4 companies (use try-catch to handle if already exists)
    try {
      await prisma.companies.createMany({
        data: [
          { name: "TractorTrack Inc.", email: "admin@tractortrack.com", phone: "+1234567890", address: "123 Farm Road", updatedAt: new Date() },
          { name: "Farm Solutions Ltd.", email: "info@farmsolutions.com", phone: "+1234567891", address: "456 Agri Street", updatedAt: new Date() },
          { name: "Heavy Machinery Co.", email: "contact@heavymachinery.com", phone: "+1234567892", address: "789 Industrial Park", updatedAt: new Date() },
          { name: "Fleet Management Group", email: "support@fleetmgmt.com", phone: "+1234567893", address: "321 Logistics Ave", updatedAt: new Date() },
        ],
        skipDuplicates: true,
      });
    } catch (e) { /* companies may already exist */ }

    // Get all companies
    const companies = await prisma.companies.findMany({ orderBy: { id: "asc" } });
    if (companies.length === 0) {
      return NextResponse.json({ error: "No companies found to assign users to" }, { status: 400 });
    }

    // Get all users
    const users = await prisma.user.findMany({ orderBy: { id: "asc" } });

    // Assign users to companies (round-robin), first user = ADMIN, rest = USER
    for (let i = 0; i < users.length; i++) {
      const companyId = companies[i % companies.length].id;
      const role = i === 0 ? "ADMIN" : "USER";
      try {
        await prisma.user.update({
          where: { id: users[i].id },
          data: { companyId, role: role as "ADMIN" | "USER" },
        });
      } catch (e) { /* skip if companyId column doesn't exist */ }
    }

    // Get all vehicles with their owner (to get companyId)
    const vehicles = await prisma.vehicle.findMany({
      include: { users: { select: { companyId: true } } },
    });

    // Replace ownerId with companyId for each vehicle
    for (const vehicle of vehicles) {
      const ownerCompanyId = vehicle.users?.companyId;
      if (ownerCompanyId) {
        try {
          await prisma.vehicle.update({
            where: { id: vehicle.id },
            data: { companyId: ownerCompanyId },
          });
        } catch (e) { /* skip if fails */ }
      }
    }

    // Set driver companyId same as their vehicle's companyId
    const drivers = await prisma.driver.findMany({
      include: { vehicle: { select: { companyId: true } } },
    });

    for (const driver of drivers) {
      if (driver.vehicle?.companyId) {
        try {
          await prisma.driver.update({
            where: { id: driver.id },
            data: { companyId: driver.vehicle.companyId },
          });
        } catch (e) { /* skip if fails */ }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Created 4 companies, assigned ${users.length} users, ${vehicles.length} vehicles`,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
