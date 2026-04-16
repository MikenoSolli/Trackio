import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { 
  startOfDay, endOfDay, startOfWeek, endOfWeek, 
  startOfMonth, endOfMonth, format, isToday 
} from "date-fns";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  
  const tractorId = searchParams.get("id"); 
  const range = searchParams.get("range") || "daily";
  const dateParam = searchParams.get("date");
  const selectedDate = dateParam ? new Date(dateParam) : new Date();

  if (!tractorId) {
    return NextResponse.json({ error: "Tractor ID is required" }, { status: 400 });
  }

  let startDate: Date;
  let endDate: Date;

  switch (range) {
    case "weekly":
      startDate = startOfWeek(selectedDate);
      endDate = endOfWeek(selectedDate);
      break;
    case "monthly":
      startDate = startOfMonth(selectedDate);
      endDate = endOfMonth(selectedDate);
      break;
    default:
      startDate = startOfDay(selectedDate);
      endDate = endOfDay(selectedDate);
  }

  try {
    // 1. Fetch the Vehicle and metadata
    const tractor = await prisma.vehicle.findUnique({
      where: { id: tractorId },
      include: {
        maintenance: { orderBy: { serviceDate: 'desc' }, take: 1 },
        alert: { where: { isResolved: false } },
        maintenance_data: { orderBy: { updatedAt: 'desc' }, take: 1 }
      }
    });

    if (!tractor) return NextResponse.json({ error: "Tractor not found" }, { status: 404 });

    let chartData = [];
    let summaryMetrics = {
      avgRpm: 0, avgVolt: 0, avgOil: 0, avgTemp: 0, totalDist: 0, totalFuel: 0, idle: 0, running: 0
    };

    // 2. HYBRID LOGIC: Check if we need real-time data for "Today"
    const useLiveStatus = range === "daily" || (range !== "daily" && isToday(selectedDate));

    if (range === "daily") {
      // Pull hourly data from status table
      const statuses = await prisma.status.findMany({
        where: { vehicleId: tractorId, lastUpdate: { gte: startDate, lte: endDate } },
        orderBy: { lastUpdate: 'asc' }
      });

      const count = statuses.length;
      summaryMetrics.avgRpm = count ? Math.round(statuses.reduce((a, b) => a + (b.engineRPM || 0), 0) / count) : 0;
      summaryMetrics.avgVolt = count ? statuses.reduce((a, b) => a + (b.BattVoltage || 0), 0) / count : 0;
      summaryMetrics.avgOil = count ? statuses.reduce((a, b) => a + (b.OilPressure || 0), 0) / count : 0;
      summaryMetrics.totalDist = statuses.reduce((a, b) => a + (b.distance || 0), 0);
      summaryMetrics.totalFuel = statuses.reduce((a, b) => a + (b.fuelUsed || 0), 0);

      // Map to Hourly Chart
      chartData = statuses.map(s => ({
        time: format(new Date(s.lastUpdate), "HH:mm"),
        work: s.engineHours,
        fuel: s.fuelLevel,
        temp: s.engineTemp || 80,
        oil: s.OilPressure,
        volt: s.BattVoltage
      }));
    } else {
      // WEEKLY / MONTHLY Aggregation
      const summaries = await prisma.dailySummary.findMany({
        where: { vehicleId: tractorId, date: { gte: startDate, lte: endDate } },
        orderBy: { date: 'asc' }
      });

      // If viewing current period, append Today's live stats to the summary list
      if (isToday(selectedDate) || (new Date() >= startDate && new Date() <= endDate)) {
         const todayLogs = await prisma.status.findMany({
            where: { vehicleId: tractorId, lastUpdate: { gte: startOfDay(new Date()), lte: endOfDay(new Date()) } }
         });
         
         if (todayLogs.length > 0) {
            summaryMetrics.totalDist += todayLogs.reduce((a, b) => a + (b.distance || 0), 0);
            summaryMetrics.totalFuel += todayLogs.reduce((a, b) => a + (b.fuelUsed || 0), 0);
         }
      }

      const count = summaries.length;
      summaryMetrics.avgRpm = count ? Math.round(summaries.reduce((a, b) => a + (b.modeEngineRPM || 0), 0) / count) : 0;
      summaryMetrics.avgVolt = count ? summaries.reduce((a, b) => a + (b.modeBattVoltage || 0), 0) / count : 0;
      summaryMetrics.totalDist += summaries.reduce((a, b) => a + (b.totalDistance), 0);
      summaryMetrics.totalFuel += summaries.reduce((a, b) => a + (b.totalFuelUsed), 0);
      summaryMetrics.idle = summaries.reduce((a, b) => a + (b.IdleTime), 0);
      summaryMetrics.running = summaries.reduce((a, b) => a + (b.RunningTime), 0);

      chartData = summaries.map(s => ({
        time: format(new Date(s.date), "MMM dd"),
        work: s.totalEngineHrs,
        fuel: s.modeFuelLevel,
        temp: s.modeEngineTemp,
        oil: s.modeOilPressure,
        volt: s.modeBattVoltage,
        dist: s.totalDistance
      }));
    }

    // 3. Absolute latest ping for Dashboard Gauges
    const latestPing = await prisma.status.findFirst({
      where: { vehicleId: tractorId },
      orderBy: { lastUpdate: 'desc' }
    });

    const latestMaint = tractor.maintenance_data[0] || {};

    return NextResponse.json({
      vehicle: {
        id: tractor.id,
        name: `${tractor.make ?? ''} ${tractor.model ?? ''}`.trim() || "Unknown Unit",
        reg: tractor.plateNumber,
        driver: tractor.driverId || "Unassigned",
        status: latestPing?.state || "OFFLINE",
      },
      metric: {
        totalHours: latestPing?.engineHours?.toFixed(1) || "0.0",
        speed: latestPing?.lastSpeed || 0,
        distance: summaryMetrics.totalDist.toFixed(1),
        fuelUsed: summaryMetrics.totalFuel.toFixed(1),
        rpm: latestPing?.engineRPM || summaryMetrics.avgRpm, // Use real-time RPM if available
        idleHours: summaryMetrics.idle.toFixed(1),
        runningHours: summaryMetrics.running.toFixed(1),
        nextService: tractor.maintenance[0]?.nextService 
          ? format(new Date(tractor.maintenance[0].nextService), "MMM dd") 
          : "N/A",
        oilPressure: latestPing?.OilPressure || 0,
        batteryVoltage: latestPing?.BattVoltage || 0,
        engineTemp: latestPing?.engineTemp || 80, 
        fuelLevel: latestPing?.fuelLevel || 0,
        fuelEfficiency: latestMaint.fuelEff || 0,
        faults: tractor.alert.length,
      },
      ChartData: chartData,
      MaintenanceStats: chartData, 
      alerts: tractor.alert
    });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}