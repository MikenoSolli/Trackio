"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer
} from 'recharts';
import { 
  Calendar as CalendarIcon, Download, ChevronDown, Activity, 
  AlertCircle, Fuel, Timer, ArrowRight, ShieldAlert, Clock, MapPin, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"; 
import { 
  format, startOfMonth, startOfWeek, setMonth, setDate as setDayOfMonth, 
  parse, startOfDay 
} from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function GeneralReport() {
  const [timeRange, setTimeRange] = useState("daily");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [reportData, setReportData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  async function fetchReport() {
    setIsLoading(true);
    // Note how we pass range=${timeRange}
    const res = await fetch(`/api/reports/general?date=${date?.toISOString()}&range=${timeRange}`);
    const json = await res.json();
    console.log('Report API response:', json);
    console.log('Date:', date?.toISOString(), 'Range:', timeRange);
    setReportData(json);
    setIsLoading(false);
  }
  fetchReport();
}, [date, timeRange]);

if (isLoading && !reportData) {
    return (
      <div className='flex h-screen w-full items-center justify-center bg-slate-50'>
        <Loader2 className='h-8 w-8 animate-spin text-green-600' />
      </div>
    );
  }

  // Handle empty or error state
  if (!reportData || reportData.error) {
    return (
      <div className='flex h-screen w-full items-center justify-center bg-slate-50'>
        <div className='text-center'>
          <AlertCircle className='h-12 w-12 text-red-500 mx-auto mb-4' />
          <p className='text-lg font-semibold text-slate-700'>Unable to load report data</p>
          <p className='text-sm text-slate-500'>Please try again later</p>
        </div>
      </div>
    );
  }

  const hasData = reportData?.chartData?.length > 0 || reportData?.stats?.distance !== '0.0 km';

  const handleChartClick = (data: any) => {
  if (!data || !data.activeLabel) return;

  const label = data.activeLabel; // e.g., "Jan", "Mon", "Week 3", or "14:00"

  if (timeRange === "yearly") {
    // Drill down from Yearly -> Monthly
    // Convert "Jan" back to month index 0
    const monthDate = parse(label, "MMM", new Date());
    const newDate = setMonth(date || new Date(), monthDate.getMonth());
    setDate(startOfMonth(newDate));
    setTimeRange("monthly");
  } 
  else if (timeRange === "monthly") {
    // Drill down from Monthly -> Weekly
    // Since "Week 3" isn't a specific day, we jump to the start of that month
    // or you can leave it as is.
    const weekDate = parse(label, "'Week' w", new Date());
    setDate(startOfWeek(weekDate));
    setTimeRange("weekly");
  }  
  else if (timeRange === "weekly") {
    // Drill down from Weekly -> Daily
    // Map "Mon", "Tue" back to the specific day in that week
    const dayDate = parse(label, "EEE", date || new Date());
    setDate(startOfDay(dayDate));
    setTimeRange("daily");
  }
};

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">General Fleet Report</h1>
          <p className="text-sm text-slate-500">Global performance and health overview</p>
        </div>

        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 w-full md:w-auto">
          <div className="hidden lg:flex bg-slate-100 rounded-xl p-1">
            {['daily', 'weekly', 'monthly', 'yearly'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-xs font-bold capitalize rounded-lg transition-all ${
                  timeRange === range ? 'bg-white text-green-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <div className="h-8 w-px bg-slate-200 mx-1 hidden lg:block" />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <CalendarIcon className="h-4 w-4 mr-2 text-green-600" />
                {date ? format(date, "PPP") : "Pick a day"}
                <ChevronDown className="ml-2 h-4 w-4 text-slate-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="rounded-md border shadow" />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* LIVE STATS STRIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatTile title="Distance" value={reportData?.stats.distance} icon={<Activity className="text-blue-500"/>} detail="+12% from last period" />
        <StatTile title="Fuel Used" value={reportData?.stats.fuel} icon={<Fuel className="text-amber-500"/>} detail="Avg 22L / 100km" />
        <StatTile title="Engine Time" value={reportData?.stats.hours} icon={<Timer className="text-green-500"/>} detail="Utilization: 92%" />
        <StatTile title="Active Alerts" value={reportData?.stats.alerts} icon={<AlertCircle className="text-red-500"/>} detail="Recent events" />
      </div>

      {/* MAIN VISUALS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fleet Activity ({timeRange})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
               <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <div className="w-3 h-3 bg-green-600 rounded-sm" /> Distance
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <div className="w-3 h-3 bg-amber-400 rounded-sm" /> Fuel
              </div>
            </div>
            
            <div className="h-80 w-full"> 
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={reportData?.chartData} onClick={handleChartClick} style={{cursor:'pointer'}}>
                 
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none'}} />
                  <Bar dataKey="dist" fill="#16a34a" radius={[4, 4, 0, 0]} barSize={24} />
                  <Bar dataKey="fuel" fill="#fbbf24" radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <CardTitle className="text-sm font-medium text-slate-800 mb-2">Report Summary</CardTitle>
              <p className="text-xs text-slate-400">Generated for {format(date || new Date(), "MMMM do, yyyy")}</p>
            </div>
            <div className="space-y-2">
              {reportData?.typeCounts.map((tc: any) => (
                 <Link key={tc.type} href={tc.link} className="block"><SummaryRow  label={tc.label} value={tc.value} color="bg-green-500" /></Link>
              ))}
            </div>
          </div>
          <Button className="w-full mt-8 bg-slate-900 hover:bg-black text-white rounded-xl py-6 font-bold shadow-lg">
            <Download className="h-4 w-4 mr-2" /> Download Report
          </Button>
        </Card>
      </div>

{/* ALERTS HISTORY TABLE */}
      <Card className='shadow-sm hover:shadow-md transition'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium flex items-center gap-2'>
            <ShieldAlert className='h-5 w-5 text-red-500' />
            Critical Alerts History
          </CardTitle>
          <Badge variant='outline' className='text-xs'>{reportData?.alerts?.length || 0} alerts</Badge>
        </CardHeader>
        <CardContent>
          {reportData?.alerts?.length === 0 ? (
            <div className='text-center py-8 text-slate-500'>
              <ShieldAlert className='h-8 w-8 mx-auto mb-2 text-slate-300' />
              <p className='text-sm'>No alerts found for this period</p>
            </div>
          ) : (
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-slate-50/50 text-xs font-semibold uppercase text-slate-500'>
                  <th className='px-6 py-4'>Vehicle</th>
                  <th className='px-6 py-4'>Alert Type</th>
                  <th className='px-6 py-4'>Location</th>
                  <th className='px-6 py-4'>Time</th>
                  <th className='px-6 py-4'>Severity</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                {reportData?.alerts?.map((alert: any) => (
                  <tr key={alert.id} className='hover:bg-slate-50/80 transition-colors'>
                    <td className='px-6 py-4 text-sm font-semibold text-slate-700'>{alert.vehicle}</td>
                    <td className='px-6 py-4 text-sm text-slate-600'>{alert.type}</td>
                    <td className='px-6 py-4 text-sm text-slate-500'>
                      <div className='flex items-center gap-1'><MapPin className='h-3 w-3' /> {alert.location}</div>
                    </td>
                    <td className='px-6 py-4 text-sm text-slate-500'>
                      <div className='flex items-center gap-1'><Clock className='h-3 w-3' /> {alert.time}</div>
                    </td>
                    <td className='px-6 py-4'>
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold uppercase ${
                        alert.status === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                      }`}>
                        {alert.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function StatTile({ title, value, icon, detail }: any) {
  return (
    <Card className="shadow-sm hover:shadow-md transition">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{detail}</p>
      </CardContent>
    </Card>
  );
}

function SummaryRow({ label, value, color }: any) {
  return (
    <div className="flex items-center justify-between w-full p-2.5 hover:bg-slate-50 rounded-xl transition-all border border-transparent">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <span className="text-sm font-semibold text-slate-600">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-slate-800">{value}</span>
        <ArrowRight className="h-3 w-3 text-slate-300" />
      </div>
    </div>
  );
}