"use client";

import React, { useState, useEffect } from "react";
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  Activity, Truck, Zap, Clock, Fuel, MapPin, AlertTriangle, 
  TrendingUp, Car, Tractor, Bus, Clock3, Loader2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { format } from "date-fns";

interface DashboardData {
  fleet: { total: number; active: number; idle: number; offline: number };
  today: { distance: number; fuel: number; runningHours: number; idleHours: number };
  week: { distance: number; fuel: number; runningHours: number };
  chartData: { day: string; distance: number; fuel: number; hours: number }[];
  topVehicles: { id: string; name: string; type: string; distance: number }[];
  alerts: { id: string; vehicle: string; type: string; severity: string; message: string; time: string }[];
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch('/api/dashboard');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Failed to fetch dashboard:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-50">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      </div>
    );
  }

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case 'TRACTOR': return <Tractor className="h-4 w-4" />;
      case 'CAR': return <Car className="h-4 w-4" />;
      case 'BUS': return <Bus className="h-4 w-4" />;
      default: return <Truck className="h-4 w-4" />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'HIGH': return 'bg-red-100 text-red-700 border-red-200';
      case 'MEDIUM': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 bg-green-600 rounded-xl">
          <Activity className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Fleet Dashboard</h1>
          <p className="text-sm text-slate-500">Real-time overview of your fleet operations</p>
        </div>
      </div>

      {/* Fleet Status Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-sm hover:shadow-md transition">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 font-medium">Active Now</p>
                <p className="text-2xl font-bold text-slate-900">{data?.fleet.active || 0}</p>
              </div>
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <Zap className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-1">of {data?.fleet.total || 0} vehicles</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 font-medium">Idle</p>
                <p className="text-2xl font-bold text-slate-900">{data?.fleet.idle || 0}</p>
              </div>
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-1">Stationary</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 font-medium">Offline</p>
                <p className="text-2xl font-bold text-slate-900">{data?.fleet.offline || 0}</p>
              </div>
              <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-slate-500" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-1">No signal</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm hover:shadow-md transition">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 font-medium">Today's Run</p>
                <p className="text-2xl font-bold text-slate-900">{data?.today.runningHours?.toFixed(1) || 0}h</p>
              </div>
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-1">{data?.today.idleHours?.toFixed(1) || 0}h idle</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity Chart */}
        <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold">Weekly Activity (Last 7 Days)</CardTitle>
              <Badge variant="outline" className="text-xs">Distance & Hours</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data?.chartData || []}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                  />
                  <Bar dataKey="distance" name="distance" fill="#16a34a" radius={[4, 4, 0, 0]} barSize={24} />
                  <Bar dataKey="hours" name="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Today's Stats */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">Today's Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-xs text-green-700 font-medium">Distance Covered</span>
              </div>
              <p className="text-2xl font-bold text-green-800">{data?.today.distance || 0} <span className="text-sm font-normal">km</span></p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 mb-1">
                <Fuel className="h-4 w-4 text-amber-600" />
                <span className="text-xs text-amber-700 font-medium">Fuel Consumed</span>
              </div>
              <p className="text-2xl font-bold text-amber-800">{data?.today.fuel || 0} <span className="text-sm font-normal">L</span></p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-xs text-blue-600 font-medium">Running</p>
                <p className="text-lg font-bold text-blue-800">{data?.today.runningHours?.toFixed(1) || 0}h</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Idle</p>
                <p className="text-lg font-bold text-slate-700">{data?.today.idleHours?.toFixed(1) || 0}h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold">Top Performers This Week</CardTitle>
              <Badge variant="outline" className="text-xs">By Distance</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {data?.topVehicles?.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <Truck className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No vehicle data available</p>
              </div>
            ) : (
              <div className="space-y-3">
                {data?.topVehicles?.map((vehicle, index) => (
                  <Link href={`/reports/tractors/${vehicle.id}`} key={vehicle.id} className="block">
                    <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? 'bg-amber-100 text-amber-700' :
                          index === 1 ? 'bg-slate-200 text-slate-600' :
                          index === 2 ? 'bg-orange-100 text-orange-700' :
                          'bg-slate-100 text-slate-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{vehicle.name}</p>
                          <p className="text-xs text-slate-500">{vehicle.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600">{vehicle.distance.toFixed(1)} km</p>
                        <p className="text-xs text-slate-400">this week</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                Recent Alerts
              </CardTitle>
              <Badge variant="outline" className="text-xs">{data?.alerts?.length || 0}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {data?.alerts?.length === 0 ? (
              <div className="text-center py-8 text-slate-400">
                <AlertTriangle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No recent alerts</p>
              </div>
            ) : (
              <div className="space-y-3">
                {data?.alerts?.slice(0, 5).map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-xl border border-slate-100">
                    <div className={`p-2 rounded-lg ${getAlertColor(alert.severity)}`}>
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-800">{alert.vehicle}</p>
                        <span className="text-xs text-slate-400">{format(new Date(alert.time), 'HH:mm')}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Week Summary */}
      <Card className="shadow-sm hover:shadow-md transition bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-green-100 text-sm font-medium">This Week's Summary</p>
              <h3 className="text-2xl font-bold mt-1">Fleet Performance Overview</h3>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold">{data?.week.distance?.toFixed(0) || 0}</p>
                <p className="text-green-200 text-sm">km traveled</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{data?.week.fuel?.toFixed(0) || 0}</p>
                <p className="text-green-200 text-sm">L fuel used</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">{data?.week.runningHours?.toFixed(0) || 0}</p>
                <p className="text-green-200 text-sm">hours active</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}