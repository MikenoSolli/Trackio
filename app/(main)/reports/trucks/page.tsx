"use client"

import React, { useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area 
} from 'recharts';
import { 
  Truck, Route, Fuel, Milestone, 
  ArrowLeft, Download, MapPin, 
  Clock, TrendingDown, Gauge, Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// --- DUMMY DATA FOR TRUCKS ---
const truckDistanceData = [
  { day: 'Mon', dist: 450, fuel: 120 },
  { day: 'Tue', dist: 520, fuel: 145 },
  { day: 'Wed', dist: 380, fuel: 110 },
  { name: 'Thu', dist: 610, fuel: 180 },
  { name: 'Fri', dist: 490, fuel: 135 },
];

const truckList = [
  { id: "TR-901", model: "Scania R500", driver: "A. Juma", dist: "2,450 km", consumption: "32L/100km", status: "En Route" },
  { id: "TR-902", model: "Volvo FH16", driver: "S. Kassim", dist: "1,820 km", consumption: "34L/100km", status: "Loading" },
  { id: "TR-903", model: "Mercedes Actros", driver: "B. Peter", dist: "3,100 km", consumption: "29L/100km", status: "En Route" },
  { id: "TR-904", model: "MAN TGX", driver: "H. Said", dist: "950 km", consumption: "31L/100km", status: "Maintenance" },
];

export default function TruckTypeReport() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      
      {/* 1. HEADER & NAVIGATION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Truck className="h-5 w-5 text-blue-700" />
            <h1 className="text-2xl font-bold text-slate-900">Truck Fleet Report</h1>
          </div>
          <p className="text-sm text-slate-500">Segment: Logistics & Long Haul</p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="bg-white rounded-xl shadow-sm border-slate-200">
            <Filter className="h-4 w-4 mr-2" /> Route Filters
          </Button>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl shadow-lg">
            <Download className="h-4 w-4 mr-2" /> Logistics Report
          </Button>
        </div>
      </div>

      {/* 2. LOGISTICS KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Total Distance" value="8,790 km" sub="Total across fleet" icon={<Milestone className="text-blue-600" />} />
        <MetricCard title="Avg Fuel Economy" value="31.5 L" sub="Per 100km" icon={<Fuel className="text-amber-600" />} />
        <MetricCard title="Active Deliveries" value="12 / 15" sub="Currently moving" icon={<Route className="text-green-600" />} />
      </div>

      {/* 3. PERFORMANCE VISUALS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Distance vs Fuel Chart */}
        <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition">
          <CardHeader>
            <div>
              <CardTitle className="text-sm font-medium">Trip Performance</CardTitle>
              <p className="text-xs text-slate-500">Correlation between kilometers and fuel burn</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end mb-4">
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 border border-blue-100">
                <TrendingDown className="h-3 w-3" /> Efficiency Up 4%
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={truckDistanceData}>
                  <defs>
                    <linearGradient id="colorDist" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <Tooltip />
                  <Area type="monotone" dataKey="dist" stroke="#2563eb" fillOpacity={1} fill="url(#colorDist)" strokeWidth={3} name="KM" />
                  <Area type="monotone" dataKey="fuel" stroke="#fbbf24" fillOpacity={0} strokeWidth={2} name="Fuel" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* 4. ACTIVE UNITS TRACKER */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Unit Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {truckList.map((truck) => (
              <div key={truck.id} className="p-3 border border-slate-100 bg-slate-50/50 rounded-xl hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{truck.id}</p>
                    <p className="text-xs text-slate-500 font-medium">{truck.model}</p>
                  </div>
                  <Badge className={`${
                    truck.status === 'En Route' ? 'bg-blue-100 text-blue-700' : 
                    truck.status === 'Loading' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-600'
                  } border-none text-xs`}>
                    {truck.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="h-3 w-3 text-slate-400" /> {truck.dist}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Gauge className="h-3 w-3 text-slate-400" /> {truck.consumption}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 5. DRIVER BEHAVIOR SUMMARY */}
      <Card className="shadow-sm hover:shadow-md transition overflow-hidden">
        <CardHeader>
          <CardTitle className="text-sm font-medium flex items-center gap-2">
             <Clock className="h-4 w-4 text-blue-600" /> Driver Duty Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
               <p className="text-xs font-medium text-slate-500">Avg Driving Shift</p>
               <p className="text-lg font-bold text-slate-700">8.4 hrs</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
               <p className="text-xs font-medium text-slate-500">Rest Stops</p>
               <p className="text-lg font-bold text-slate-700">2.1 avg/day</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
               <p className="text-xs font-medium text-slate-500">Hard Braking</p>
               <p className="text-lg font-bold text-red-600">0.4 / 100km</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
               <p className="text-xs font-medium text-slate-500">Speeding Events</p>
               <p className="text-lg font-bold text-amber-600">12 total</p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}

// --- HELPERS ---
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