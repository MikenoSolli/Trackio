// app/dashboard/data-queries.ts
import { prisma } from "@/lib/prisma";
import { startOfDay } from "date-fns";

export async function getDashboardStats() {
  const today = startOfDay(new Date());

  // We run these in parallel for maximum speed
  const [vehicleCounts, alertsToday, recentAlerts, stats] = await Promise.all([
    // 1. Summary Cards (Total, Active, Idle, Offline)
    prisma.status.groupBy({
      by: ['state'],
      _count: true,
    }),

    // 2. Alerts Today
    prisma.alert.count({
      where: { createdAt: { gte: today } }
    }),

    // 3. Recent Alerts List
    prisma.alert.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { vehicle: { select: { plateNumber: true } } }
    }),

    // 4. Quick Stats (Distance/Fuel)
    prisma.trip.aggregate({
      where: { startTime: { gte: today } },
      _sum: { distance: true, fuelUsed: true }
    })
  ]);

  // Format counts for the UI
//   const counts = {
//     TOTAL: vehicleCounts.reduce((acc, curr) => acc + curr._count, 0),
//     ACTIVE: vehicleCounts.find(c => c.state === 'ACTIVE')?._count || 0,
//     IDLE: vehicleCounts.find(c => c.state === 'IDLE')?._count || 0,
//     OFFLINE: vehicleCounts.find(c => c.state === 'OFFLINE')?._count || 0,
//   };

  return { alertsToday, recentAlerts, stats };
}