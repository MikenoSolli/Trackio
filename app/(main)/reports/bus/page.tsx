"use client"

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bus, Timer, Fuel, Gauge, MapPin, Wrench, AlertTriangle, 
  Settings, Download, Play, Square, Calendar as CalendarIcon,
  ChevronDown, Activity, Clock, BarChart3, Map as MapIcon, History,
  Thermometer, Zap, Droplets, Users, Route, ArrowLeft
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

const UTILIZATION_DATA = [
  { name: 'On Route', value: 65, fill: '#15803d' },
  { name: 'Idle', value: 20, fill: '#cbd5e1' },
  { name: 'Maintenance', value: 15, fill: '#f59e0b' },
];

const PERFORMANCE_TREND = [
  { time: '06:00', engine: 45, fuel: 8 },
  { time: '08:00', engine: 85, fuel: 15 },
  { time: '10:00', engine: 60, fuel: 12 },
  { time: '12:00', engine: 40, fuel: 7 },
  { time: '14:00', engine: 90, fuel: 18 },
  { time: '16:00', engine: 70, fuel: 14 },
];

export default function BusTypeReport() {
  const [timeRange, setTimeRange] = useState("Today");
  const [mode, setMode] = useState("Overview");
  const [activeChart, setActiveChart] = useState("Engine");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const busList = [
    { id: "BUS-001", model: "Volvo B12B", capacity: 65, driver: "M. Hassan", status: "On Route", route: "City Center - Airport", fuel: 72 },
    { id: "BUS-002", model: "Scania K250", capacity: 55, driver: "S. Omar", status: "Idle", route: "Depot", fuel: 45 },
    { id: "BUS-003", model: "Mercedes Sprinter", capacity: 20, driver: "A. Rashidi", status: "On Route", route: "Safari Lodge", fuel: 88 },
    { id: "BUS-004", model: "Higer A30", capacity: 45, driver: "J. Kondo", status: "Maintenance", route: "Workshop", fuel: 30 },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      
      {/* 1. HEADER & CONTROLS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Bus className="h-5 w-5 text-green-700" />
            <h1 className="text-2xl font-bold text-slate-900">Bus Fleet Report</h1>
          </div>
          <p className="text-sm text-slate-500">Segment: Passenger Transport</p>
        </div>

        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 w-full md:w-auto">
          <div className="hidden lg:flex bg-slate-100 rounded-xl p-1">
            {["Today", "Week", "Month", "Year"].map((range) => (
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
          <div className="h-8 w-px bg-slate-200 mx-1 lg:block" />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <CalendarIcon className="h-4 w-4 mr-2 text-green-600" />
                {date ? format(date, "PPP") : "Pick a day"}
                <ChevronDown className="ml-2 h-4 w-4 text-slate-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus className="rounded-md" />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* 2. FLEET KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Active Buses" value="12" sub="Currently on route" icon={<Route className="text-green-600" />} />
        <MetricCard title="Avg Fuel Economy" value="18.5 L" sub="Per 100km" icon={<Fuel className="text-amber-600" />} />
        <MetricCard title="Passenger Capacity" value="485" sub="Total seats available" icon={<Users className="text-blue-600" />} />
      </div>

      {/* 3. CHARTS & FLEET LIST */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Performance Chart */}
        <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-sm font-medium">Route Performance</CardTitle>
                <p className="text-xs text-slate-500">Engine load vs fuel consumption</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-6">
              {["Engine", "Fuel"].map((type) => (
                <button key={type} onClick={() => setActiveChart(type)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full border transition-all ${activeChart === type ? 'bg-green-700 border-green-700 text-white' : 'border-slate-200 text-slate-500'}`}>
                  {type}
                </button>
              ))}
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PERFORMANCE_TREND}>
                  <defs>
                    <linearGradient id="colorBus" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <Tooltip />
                  <Area type="monotone" dataKey={activeChart === "Fuel" ? "fuel" : "engine"} stroke="#15803d" fillOpacity={1} fill="url(#colorBus)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Fleet Status */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Fleet Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {busList.map((bus) => (
              <div key={bus.id} className="p-3 border border-slate-100 bg-slate-50/50 rounded-xl hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{bus.id}</p>
                    <p className="text-xs text-slate-500 font-medium">{bus.model} • {bus.capacity} seats</p>
                  </div>
                  <Badge className={`${
                    bus.status === 'On Route' ? 'bg-green-100 text-green-700' : 
                    bus.status === 'Idle' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-600'
                  } border-none text-xs`}>
                    {bus.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium"><MapPin className="h-3 w-3" /> {bus.route}</span>
                  <span className="flex items-center gap-1 font-medium"><Fuel className="h-3 w-3" /> {bus.fuel}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 4. UTILIZATION & ALERTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2"><Gauge className="h-4 w-4 text-blue-600" /> Utilization Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={UTILIZATION_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {UTILIZATION_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-red-500" /> Maintenance Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-amber-50 rounded-xl">
              <div>
                <p className="text-xs font-semibold text-slate-800">BUS-004 - Service Due</p>
                <p className="text-[10px] text-slate-500">Scheduled maintenance overdue</p>
              </div>
              <Badge className="bg-amber-100 text-amber-700 border-none text-xs">Warning</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
              <div>
                <p className="text-xs font-semibold text-slate-800">All Routes Clear</p>
                <p className="text-[10px] text-slate-500">No scheduling conflicts</p>
              </div>
              <Badge className="bg-green-100 text-green-700 border-none text-xs">OK</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}

function MetricCard({ title, value, sub, icon }: any) {
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

// Missing ArrowLeft import