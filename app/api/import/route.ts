import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await prisma.$transaction(async (tx) => {
      if (data.companies?.length) {
        for (const c of data.companies) {
          await tx.company.upsert({
            where: { id: c.id },
            update: c,
            create: c,
          });
        }
      }

      if (data.users?.length) {
        for (const u of data.users) {
          await tx.user.upsert({
            where: { id: u.id },
            update: u,
            create: u,
          });
        }
      }

      if (data.drivers?.length) {
        for (const d of data.drivers) {
          await tx.driver.upsert({
            where: { id: d.id },
            update: d,
            create: d,
          });
        }
      }

      if (data.vehicles?.length) {
        for (const v of data.vehicles) {
          await tx.vehicle.upsert({
            where: { id: v.id },
            update: v,
            create: v,
          });
        }
      }

      if (data.alerts?.length) {
        for (const a of data.alerts) {
          await tx.alert.upsert({
            where: { id: a.id },
            update: a,
            create: a,
          });
        }
      }

      if (data.maintenance?.length) {
        for (const m of data.maintenance) {
          await tx.maintenance.upsert({
            where: { id: m.id },
            update: m,
            create: m,
          });
        }
      }

      if (data.status?.length) {
        for (const s of data.status) {
          await tx.status.upsert({
            where: { id: s.id },
            update: s,
            create: s,
          });
        }
      }

      if (data.trip?.length) {
        for (const t of data.trip) {
          await tx.trip.upsert({
            where: { id: t.id },
            update: t,
            create: t,
          });
        }
      }

      if (data.maintenance_data?.length) {
        for (const md of data.maintenance_data) {
          await tx.maintenance_data.upsert({
            where: { id: md.id },
            update: md,
            create: md,
          });
        }
      }

      if (data.dailySummary?.length) {
        for (const ds of data.dailySummary) {
          await tx.dailySummary.upsert({
            where: { id: ds.id },
            update: ds,
            create: ds,
          });
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
