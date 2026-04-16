import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { 
  format, startOfDay, endOfDay, startOfWeek, endOfWeek, 
  startOfMonth, endOfMonth, startOfYear, endOfYear,
  eachHourOfInterval, eachDayOfInterval, eachMonthOfInterval,
  isSameDay, isSameMonth, parseISO, parse
} from 'date-fns';
import { getSession } from '@/app/_lib/sessions';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = (searchParams.get('type') || 'TRACTOR').toUpperCase();
    const range = searchParams.get('range') || 'weekly'; 
    const dateParam = searchParams.get('date') || new Date().toISOString();
    
    // Parse date properly - handle both ISO and yyyy-MM-dd formats
    let targetDate: Date;
    if (dateParam.includes('T')) {
      targetDate = new Date(dateParam);
    } else {
      try {
        targetDate = parseISO(dateParam);
      } catch (e) {
        targetDate = new Date();
      }
    }

    console.log('Tractor Report - Type:', type, 'Range:', range, 'Date:', dateParam, 'Parsed:', targetDate);

    const session = await getSession();
    const userId = Number(session?.userId); 
    console.log('UserID:', userId);

    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    // Get user's companyId
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { companyId: true }
    });

    if (!user?.companyId) {
      return NextResponse.json({ error: 'User has no company' }, { status: 403 });
    }

    let start: Date, end: Date, intervals: Date[], formatStr: string;

    console.log('Defining window for range:', range, 'targetDate:', targetDate);
    
    switch (range) {
      case 'yearly':
        start = startOfYear(targetDate);
        end = endOfYear(targetDate);
        intervals = eachMonthOfInterval({ start, end });
        formatStr = 'MMM';
        break;
      case 'monthly':
        start = startOfMonth(targetDate);
        end = endOfMonth(targetDate);
        intervals = eachDayOfInterval({ start, end });
        formatStr = 'dd MMM';
        break;
      case 'weekly':
        start = startOfWeek(targetDate);
        end = endOfWeek(targetDate);
        intervals = eachDayOfInterval({ start, end });
        formatStr = 'EEE';
        break;
      default:
        start = startOfDay(targetDate);
        end = endOfDay(targetDate);
        intervals = eachHourOfInterval({ start, end }, { step: 2 }); 
        formatStr = 'HH:00';
    }

    console.log('Date range - start:', start, 'end:', end, 'intervals:', intervals.length);

    const vehicles = await prisma.vehicle.findMany({
      where: { Type: type as any, companyId: user.companyId },
      select: { id: true, plateNumber: true, model: true, make: true }
    });
    console.log('Vehicles found:', vehicles.length);

    const vehicleIds = vehicles.map(v => v.id);
    if (vehicleIds.length === 0) {
      return NextResponse.json({ 
        metrics: { avgFuel: '0 L/h', totalHours: '0 hrs', utilization: '0%' }, 
        tractorStats: [], 
        leaderboard: [], 
        type 
      });
    }

    let chartData: any[] = [];
    let totalWorkHours = 0;
    let totalFuel = 0;

    if (range === 'daily') {
      const logs = await prisma.status.findMany({
        where: { vehicleId: { in: vehicleIds }, lastUpdate: { gte: start, lte: end } }
      });
      console.log('Status logs found:', logs.length);

      chartData = intervals.map(intervalStart => {
        const intervalEnd = new Date(intervalStart.getTime() + 2 * 3600000);
        const filtered = logs.filter(l => l.lastUpdate >= intervalStart && l.lastUpdate < intervalEnd);
        const working = filtered.filter(l => (l.lastSpeed ?? 0) > 0).length;
        const idle = filtered.length - working;
        return { day: format(intervalStart, formatStr), work: working, idle: idle };
      });

      const movingPings = logs.filter(l => (l.lastSpeed ?? 0) > 0).length;
      totalWorkHours = (movingPings * 60) / 3600; 
      totalFuel = logs.reduce((acc, curr) => acc + (curr.fuelUsed || 0), 0);
    } else {

      
      const summaries = await prisma.dailySummary.findMany({
        where: { vehicleId: { in: vehicleIds }, date: { gte: start, lte: end } }
      });
      console.log('Daily summaries found:', summaries.length);
      if (summaries.length > 0) {
        console.log('Sample summary dates:', summaries.slice(0, 3).map(s => ({ date: s.date, runningTime: s.RunningTime, idleTime: s.IdleTime })));
      }

      chartData = intervals.map(intervalStart => {
        let filtered;
        if (range === 'yearly') {
          filtered = summaries.filter(s => isSameMonth(s.date, intervalStart));
        } else {
          // monthly, weekly - filter by exact day match
          filtered = summaries.filter(s => isSameDay(s.date, intervalStart));
        }
        
        const workTime = filtered.reduce((acc, curr) => acc + curr.RunningTime, 0);
        const idleTime = filtered.reduce((acc, curr) => acc + curr.IdleTime, 0);
        totalWorkHours += workTime;
        totalFuel += filtered.reduce((acc, curr) => acc + curr.totalFuelUsed, 0);

        console.log('Interval:', intervalStart.toISOString(), 'Filtered count:', filtered.length, 'Work:', workTime, 'Idle:', idleTime);

        return {
          day: format(intervalStart, formatStr),
          work: Number(workTime.toFixed(1)),
          idle: Number(idleTime.toFixed(1))
        };
      });
      
      console.log('Final chartData:', JSON.stringify(chartData));
      console.log('Total work hours:', totalWorkHours, 'Total fuel:', totalFuel);
    }

    const daysInRange = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
    const fleetCapacity = vehicleIds.length * 8 * daysInRange;

    const latestStatuses = await prisma.status.findMany({
      where: { vehicleId: { in: vehicleIds } },
      orderBy: { lastUpdate: 'desc' },
      take: vehicleIds.length
    });
    
    const statusMap = new Map(latestStatuses.map(s => [s.vehicleId, s]));

    const vehicleHoursMap = new Map<string, number>();
    if (range !== 'daily') {
      const summaries = await prisma.dailySummary.findMany({
        where: { vehicleId: { in: vehicleIds }, date: { gte: start, lte: end } },
        select: { vehicleId: true, RunningTime: true, IdleTime: true }
      });
      summaries.forEach(s => {
        const current = vehicleHoursMap.get(s.vehicleId) || 0;
        vehicleHoursMap.set(s.vehicleId, current + s.RunningTime + s.IdleTime);
      });
    }

    const leaderboard = vehicles.map(v => {
      const latestStatus = statusMap.get(v.id);
      const lastUpdate = latestStatus?.lastUpdate ? new Date(latestStatus.lastUpdate) : null;
      const now = new Date();
      const isConnected = lastUpdate && (now.getTime() - lastUpdate.getTime()) < 3600000;
      const hours = vehicleHoursMap.get(v.id) || 0;
      const health = lastUpdate ? Math.min(100, Math.max(70, 100 - ((now.getTime() - lastUpdate.getTime()) / 86400000) * 10)) : 85;
      
      return { 
        id: v.id, 
        name: v.plateNumber || `${v.make || ''} ${v.model || ''}`.trim() || 'Unknown', 
        hours: hours.toFixed(1), 
        status: isConnected ? 'Connected' : 'Offline', 
        health: Math.round(health) 
      };
    });

    console.log('Leaderboard:', leaderboard);

    return NextResponse.json({
      metrics: {
        avgFuel: totalWorkHours > 0 ? `${(totalFuel / totalWorkHours).toFixed(1)} L/h` : '0 L/h',
        totalHours: `${totalWorkHours.toFixed(1)} hrs`,
        utilization: fleetCapacity > 0 ? `${Math.min(100, (totalWorkHours / fleetCapacity) * 100).toFixed(0)}%` : '0%'
      },
      tractorStats: chartData,
      leaderboard,
      type
    });

  } catch (error) {
    console.error('Type Report Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}