"use client"

import React, { useState } from "react";
import Link from "next/link";
import { 
  Car, Timer, Fuel, Gauge, MapPin, Wrench, AlertTriangle, 
  Settings, Download, Calendar as CalendarIcon,
  ChevronDown, Activity, History, Map as MapIcon
} from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

// --- DUMMY DATA ---
const UNIT_INFO = {
  id: "TR-9021",
  name: "Master T-800",
  model: "John Deere 5075E",
  reg: "TZ 442 ABC",
  engine: "Turbo Diesel V4",
  year: "2023",
  driver: "Hamisi Juma",
  status: "Active",
  lastSeen: new Date().toISOString(),
};

const UTILIZATION_DATA = [
  { name: 'Working', value: 72, fill: '#15803d' },
  { name: 'Idle', value: 28, fill: '#cbd5e1' },
];

const PERFORMANCE_TREND = [
  { time: '08:00', engine: 45, fuel: 12 },
  { time: '10:00', engine: 85, fuel: 18 },
  { time: '12:00', engine: 30, fuel: 8 },
  { time: '14:00', engine: 95, fuel: 22 },
  { time: '16:00', engine: 60, fuel: 15 },
];

export default function SingleTractorReport() {
  const [timeRange, setTimeRange] = useState("Today");
  const [mode, setMode] = useState("Overview");
  const [activeChart, setActiveChart] = useState("Engine");
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      
      {/* 1. TOP HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Car className="h-5 w-5 text-blue-700" />
            <h1 className="text-2xl font-bold text-slate-900">Car Fleet Report</h1>
          </div>
          <p className="text-sm text-slate-500">Segment: Executive & Utility Vehicles</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className="rounded-xl font-semibold text-xs border-slate-200">
                <Download className="h-3.5 w-3.5 mr-2" /> Export
            </Button>
        </div>
      </div>

      {/* 2. RECOMMENDED CONTROLS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Time Range */}
        <div className="lg:col-span-2 flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
          {["Today", "This Week", "This Month", "This Year"].map((t) => (
            <button key={t} onClick={() => setTimeRange(t)}
              className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${timeRange === t ? 'bg-green-700 text-white shadow-md' : 'text-slate-400 hover:bg-slate-50'}`}>
              {t}
            </button>
          ))}
          <Popover>
            <PopoverTrigger asChild>
                <button className="px-4 text-slate-400 hover:text-green-700"><CalendarIcon className="h-4 w-4" /></button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end"><Calendar mode="single" selected={date} onSelect={setDate} /></PopoverContent>
          </Popover>
        </div>

        {/* Mode Toggles */}
        <div className="lg:col-span-2 flex bg-slate-200/50 p-1 rounded-2xl border border-slate-100">
          {["Overview", "Maintenance", "Fuel", "Alerts"].map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all ${mode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* 3. UTILIZATION METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricBox title="Total Engine Hours" value="1,240.5 h" sub="+4.2h today" icon={<Timer className="text-green-600" />} />
        <MetricBox title="Distance Covered" value="42.8 km" sub="Field A-12" icon={<MapIcon className="text-blue-600" />} />
        <MetricBox title="Avg. Fuel Consumption" value="12.4 L/h" sub="Efficiency: Good" icon={<Fuel className="text-amber-600" />} />
        <MetricBox title="Utilization Rate" value="78%" sub="22% Idle today" icon={<Activity className="text-purple-600" />} />
      </div>

      {/* 4. CHARTS & REMOTE CONTROLS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dynamic Chart Card */}
        <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Operational Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-6">
              {["Engine", "Fuel", "Location"].map((type) => (
                <button key={type} onClick={() => setActiveChart(type)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${activeChart === type ? 'bg-green-700 border-green-700 text-white' : 'border-slate-200 text-slate-500'}`}>
                  {type}
                </button>
              ))}
            </div>
            <div className="h-70 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PERFORMANCE_TREND}>
                  <defs>
                    <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <Tooltip />
                  <Area type="monotone" dataKey={activeChart === "Fuel" ? "fuel" : "engine"} stroke="#15803d" fillOpacity={1} fill="url(#colorEng)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Remote & Maintenance Controls */}
        <div className="space-y-6">
          <Card className="shadow-sm hover:shadow-md transition bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-sm font-medium flex items-center gap-2"><Settings className="h-4 w-4 text-green-400" /> Remote Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ControlButton label="Engine Immobilizer" active={false} color="bg-red-500/20 text-red-400 border-red-500/50" />
              <ControlButton label="Speed Limit (25km/h)" active={true} color="bg-green-500/20 text-green-400 border-green-500/50" />
              <ControlButton label="Geofence Lock" active={true} color="bg-green-500/20 text-green-400 border-green-500/50" />
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-sm font-medium flex items-center gap-2"><Wrench className="h-4 w-4 text-slate-500" /> Health Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Service Due in</span>
                    <span className="font-bold text-amber-600">42 Hours</span>
                  </div>
                  <Progress value={85} className="h-1.5 bg-slate-100" />
               </div>
               <div className="grid grid-cols-2 gap-3">
                  <HealthStat label="Battery" value="14.2V" status="Good" />
                  <HealthStat label="Oil Pressure" value="55 PSI" status="Good" />
                  <HealthStat label="Coolant" value="82°C" status="Warm" />
                  <HealthStat label="RPM" value="1,850" status="Normal" />
               </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 5. ALERTS & LOGS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-red-500" /> Critical Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <AlertRow type="Warning" msg="Long Idle Detected (45 mins)" time="2h ago" />
            <AlertRow type="Critical" msg="Fuel Level Dropped Suddenly (Theft?)" time="5h ago" />
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2"><History className="h-4 w-4 text-slate-500" /> Maintenance Record</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
               <div className="text-xs">
                  <p className="font-semibold text-slate-800">Oil & Filter Change</p>
                  <p className="text-slate-500">Jan 12, 2026 • 1,100 hrs</p>
               </div>
               <Button variant="ghost" size="sm" className="text-xs text-green-700 font-semibold">View PDF</Button>
            </div>
            <Button variant="outline" className="w-full border-dashed border-slate-300 text-slate-500 text-xs h-9 rounded-xl">
              + Add Maintenance Record
            </Button>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}

// --- SUB-COMPONENTS ---

function MetricBox({ title, value, sub, icon }: any) {
  return (
    <Card className="shadow-sm hover:shadow-md transition">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  );
}

function ControlButton({ label, active, color }: any) {
  return (
    <div className={`flex justify-between items-center p-3 rounded-xl border ${color}`}>
      <span className="text-[11px] font-bold">{label}</span>
      <div className={`h-2 w-2 rounded-full ${active ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
    </div>
  );
}

function HealthStat({ label, value, status }: any) {
  return (
    <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
      <p className="text-[9px] text-slate-400 font-bold uppercase">{label}</p>
      <p className="text-xs font-black text-slate-800">{value}</p>
      <p className="text-[9px] text-green-600 font-bold">{status}</p>
    </div>
  );
}

function AlertRow({ type, msg, time }: any) {
  return (
    <div className={`p-3 rounded-xl flex items-center justify-between ${type === 'Critical' ? 'bg-red-50' : 'bg-amber-50'}`}>
      <div className="flex items-center gap-3">
        <div className={`h-2 w-2 rounded-full ${type === 'Critical' ? 'bg-red-500' : 'bg-amber-500'}`} />
        <p className="text-xs font-bold text-slate-800">{msg}</p>
      </div>
      <span className="text-[10px] text-slate-400 font-medium">{time}</span>
    </div>
  );
}