import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { 
  startOfDay, endOfDay, startOfWeek, endOfWeek, 
  startOfMonth, endOfMonth, startOfYear, endOfYear,
  eachHourOfInterval, eachDayOfInterval, eachMonthOfInterval,
  format, isSameDay, isSameMonth
} from "date-fns";
import { getSession } from "@/app/_lib/sessions";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const dateParam = searchParams.get('date') || new Date().toISOString();
    const range = searchParams.get('range') || 'daily'; 
    const targetDate = new Date(dateParam);

    console.log('General Report - Date:', dateParam, 'Range:', range, 'Target:', targetDate);

    const session = await getSession();
    console.log('Session:', session);
    console.log('Session userId type:', typeof session?.userId, session?.userId);
    const userId = Number(session?.userId); 

    if (!userId) {
      console.log('No userId found in session');
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Get user's companyId
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { companyId: true }
    });

    if (!user?.companyId) {
      return NextResponse.json({ error: 'User has no company' }, { status: 403 });
    }

    console.log('UserID (parsed):', userId, 'type:', typeof userId, 'companyId:', user.companyId);

    // 1. --- GET USER'S VEHICLES ---
    console.log('Fetching vehicles for companyId:', user.companyId);
    
    // Get vehicles belonging to the user's company
    const userVehicles = await prisma.vehicle.findMany({
      where: { companyId: user.companyId },
      select: { id: true, plateNumber: true, Type: true }
    });
    console.log('User vehicles found:', userVehicles.length, JSON.stringify(userVehicles));
    const vehicleIds = userVehicles.map(v => v.id);

    // If user has no vehicles, return empty data structure early
    if (vehicleIds.length === 0) {
      console.log('No vehicles found for user');
      return NextResponse.json({
        stats: { distance: '0.0 km', fuel: '0.0 L', hours: '0.0 hrs', alerts: '00' },
        chartData: [],
        typeCounts: [],
        alerts: []
      });
    }

    let start: Date, end: Date, intervals: Date[], formatStr: string;

    // 2. --- DEFINE WINDOWS ---
    console.log('Defining window for range:', range, 'targetDate:', targetDate);
    switch (range) {
      case "weekly":
        start = startOfWeek(targetDate);
        end = endOfWeek(targetDate);
        intervals = eachDayOfInterval({ start, end });
        formatStr = "EEE"; 
        break;
      case "monthly":
        start = startOfMonth(targetDate);
        end = endOfMonth(targetDate);
        intervals = eachDayOfInterval({ start, end });
        formatStr = "dd MMM"; 
        break;
      case "yearly":
        start = startOfYear(targetDate);
        end = endOfYear(targetDate);
        intervals = eachMonthOfInterval({ start, end });
        formatStr = "MMM"; 
        break;
      default:
        start = startOfDay(targetDate);
        end = endOfDay(targetDate);
        intervals = eachHourOfInterval({ start, end });
        formatStr = "HH:00";
    }

    let chartData = [];
    let summaryStats = { distance: 0, fuel: 0, hours: 0 };

    // 3. --- DATA FETCHING (HYBRID + USER FILTER) ---
    if (range === "daily") {
      const logs = await prisma.status.findMany({
        where: { 
          vehicleId: { in: vehicleIds }, // USER FILTER
          lastUpdate: { gte: start, lte: end } 
        },
        select: { lastUpdate: true, distance: true, fuelUsed: true, engineHours: true, vehicleId: true },
        orderBy: { lastUpdate: 'asc' }
      });

      // Calculate User Fleet Hours
      const vehicleMap = new Map<string, { first: number, last: number }>();
      logs.forEach(log => {
        if (log.engineHours === null) return;
        if (!vehicleMap.has(log.vehicleId)) {
          vehicleMap.set(log.vehicleId, { first: log.engineHours, last: log.engineHours });
        } else {
          vehicleMap.get(log.vehicleId)!.last = log.engineHours;
        }
      });
      vehicleMap.forEach(v => { if (v.last - v.first > 0) summaryStats.hours += (v.last - v.first); });

      chartData = intervals.map((intervalStart) => {
        const intervalEnd = new Date(intervalStart.getTime() + 3600000);
        const filtered = logs.filter(l => l.lastUpdate >= intervalStart && l.lastUpdate < intervalEnd);
        return {
          name: format(intervalStart, formatStr),
          dist: filtered.reduce((acc, curr) => acc + (curr.distance || 0), 0),
          fuel: filtered.reduce((acc, curr) => acc + (curr.fuelUsed || 0), 0)
        };
      });

      summaryStats.distance = logs.reduce((acc, curr) => acc + (curr.distance || 0), 0);
      summaryStats.fuel = logs.reduce((acc, curr) => acc + (curr.fuelUsed || 0), 0);

} else {
      console.log('Fetching daily summaries for vehicleIds:', vehicleIds, 'date range:', start.toISOString(), 'to', end.toISOString());
      const summaries = await prisma.dailySummary.findMany({
        where: { 
          vehicleId: { in: vehicleIds }, // USER FILTER
          date: { gte: start, lte: end } 
        }
      });
      console.log('Daily summaries found:', summaries.length);
      
      // Debug: Check if ANY summaries exist for these vehicles (regardless of date)
      if (summaries.length === 0) {
        const anySummaries = await prisma.dailySummary.findMany({
          where: { vehicleId: { in: vehicleIds } },
          select: { date: true, totalDistance: true, vehicleId: true },
          take: 10
        });
        console.log('ANY summaries for these vehicles (any date):', anySummaries);
      }
      
      if (summaries.length > 0) {
        console.log('Sample summary dates:', summaries.slice(0, 3).map(s => ({ date: s.date, vehicleId: s.vehicleId, totalDistance: s.totalDistance })));
      }

      chartData = intervals.map((intervalStart) => {
        let filtered = (range === 'yearly')
          ? summaries.filter(s => isSameMonth(s.date, intervalStart))
          : summaries.filter(s => isSameDay(s.date, intervalStart));

        return {
          name: format(intervalStart, formatStr),
          dist: filtered.reduce((acc, curr) => acc + curr.totalDistance, 0),
          fuel: filtered.reduce((acc, curr) => acc + curr.totalFuelUsed, 0)
        };
      });

      summaryStats.distance = summaries.reduce((acc, curr) => acc + curr.totalDistance, 0);
      summaryStats.fuel = summaries.reduce((acc, curr) => acc + curr.totalFuelUsed, 0);
      summaryStats.hours = summaries.reduce((acc, curr) => acc + (curr.RunningTime + curr.IdleTime), 0);
    }

console.log('Final chartData:', JSON.stringify(chartData));
    console.log('Summary stats:', summaryStats);

// 4. --- FETCH METADATA ---
    console.log('Fetching alerts and type counts...');
    const [alertRecords, typeCounts] = await Promise.all([
      prisma.alert.findMany({
        where: { 
          vehicleId: { in: vehicleIds }, // USER FILTER
          createdAt: { gte: start, lte: end } 
        },
        include: { vehicle: true },
        orderBy: { createdAt: 'desc' },
        take: 8
      }),
      prisma.vehicle.groupBy({
        where: { companyId: user.companyId }, // USER FILTER
        by: ['Type'],
        _count: { id: true }
      })
    ]);
    
    // Debug: check for alerts in date range
    console.log('Alert records found in range:', alertRecords.length);
    if (alertRecords.length === 0) {
      const anyAlerts = await prisma.alert.findMany({
        where: { vehicleId: { in: vehicleIds } },
        select: { id: true, type: true, severity: true, createdAt: true },
        take: 5
      });
      console.log('ANY alerts for these vehicles:', anyAlerts);
    }
    console.log('Type counts:', typeCounts);

    return NextResponse.json({
      stats: {
        distance: `${summaryStats.distance.toFixed(1)} km`,
        fuel: `${summaryStats.fuel.toFixed(1)} L`,
        hours: `${summaryStats.hours.toFixed(1)} hrs`,
        alerts: alertRecords.length.toString().padStart(2, '0')
      },
      chartData,
      typeCounts: typeCounts.map(tc => ({
        label: `${tc.Type}s Active`,
        link: `/reports/${tc.Type?.toLowerCase() || 'units'}s`,
        value: `${tc._count.id} Units`, 
        type: tc.Type
      })),
      alerts: alertRecords.map(a => ({
        id: a.id,
        vehicle: a.vehicle?.plateNumber || "Unknown",
        type: a.type,
        location: "Main Route", 
        time: format(a.createdAt, "hh:mm a"),
        status: a.severity === "HIGH" ? "Critical" : "Warning"
      }))
    });

  } catch (error) {
    console.error("User Report Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}