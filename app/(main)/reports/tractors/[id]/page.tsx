"use client"

import React, { useState, useMemo, useEffect } from "react";
import { 
  Tractor, Timer, Fuel, Gauge, MapPin, Wrench, AlertTriangle, 
  Settings, Download, Square, Calendar as CalendarIcon,
  ChevronDown, Activity, Clock, BarChart3, History,
  Thermometer, Zap, Droplets, Search, MoreVertical,
  ShieldCheck, ArrowUpRight, CheckCircle2, Loader2,
  LineChart, AlertCircle, Briefcase, Octagon
} from "lucide-react";
import { format, startOfMonth, startOfDay, setMonth, parse, startOfWeek, } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useParams } from "next/navigation";
import Link from "next/link";


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

export default function SingleTractorMonitoring() {
  // --- STATE ---
  const [mode, setMode] = useState("Overview"); 
  const [timeRange, setTimeRange] = useState("daily");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isImmobilized, setIsImmobilized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [selectedSummary, setSelectedSummary] = useState<string | null>(null);

  const params = useParams();
  const tractorId = params.id;

  useEffect(() =>{
    async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch(`/api/reports/tractors/Individual?id=${tractorId}&date=${date?.toISOString()}&range=${timeRange.toLowerCase()}`);
            const json = await res.json();
            setData(json);
        } catch (error) {
            console.error("Error fetching tractor data:", error);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
  }, [date, timeRange, tractorId]);

  const handleChartClick = (event: any) => {
        if (!event || !event.activeLabel) return;
        const label = event.activeLabel; 
        setSelectedSummary(label);
        
        if (timeRange === "yearly") {
            const monthDate = parse(label, "MMM", new Date());
            const newDate = setMonth(date || new Date(), monthDate.getMonth());
            setDate(startOfMonth(newDate));
            setTimeRange("monthly");
        } 
        else if (timeRange === "monthly") {
          const weekDate = parse(label, "'Wk' w", new Date());
          setDate(startOfWeek(weekDate));
          setTimeRange("weekly");
        } 
        else if (timeRange === "weekly") {
            const dayDate = parse(label, "EEE", date || new Date());
            setDate(startOfDay(dayDate));
            setTimeRange("daily");
        }
    };

  const modeConfig = useMemo(() => {
    switch (mode) {
      case "Maintenance":
        return {
          title: "Engine Health & Diagnostics",
          primaryMetric: { label: "Next Service", value: data?.metric?.nextService || "---", sub: "Based on engine hours" },
          chartType: "Bar",
          color: "text-blue-600",
          bg: "bg-blue-50"
        };
      case "Fuel":
        return {
          title: "Consumption & Theft Analysis",
          primaryMetric: { label: "Fuel Level", value: `${data?.metric?.fuelLevel || 0}%`, sub: "Current Tank Status" },
          chartType: "Area",
          color: "text-amber-600",
          bg: "bg-amber-50"
        };
      case "Alerts":
        return {
          title: "Safety & Incident Timeline",
          primaryMetric: { label: "Critical Faults", value: data?.metric?.faults || 0, sub: "Action Required" },
          chartType: "Status",
          color: "text-red-600",
          bg: "bg-red-50"
        };
      default:
        return {
          title: "Usage & Productivity Overview",
          primaryMetric: { label: "Total Engine Hours", value: data?.metric?.totalHours || "0.0", sub: "Lifetime operation" },
          chartType: "Area",
          color: "text-green-700",
          bg: "bg-green-50"
        };
    }
  }, [mode, data]);

  if (loading && !data) {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-slate-50">
            <Loader2 className="h-8 w-8 animate-spin text-green-600" />
        </div>
    );
  }

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      
      {/* 1. STATUS HEADER */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex gap-5">
          <div className="h-20 w-20 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100">
            <Tractor className="h-10 w-10 text-green-700" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-black text-slate-900">{data?.vehicle?.name || "Unit"}</h1>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                ● {data?.vehicle?.status || "Online"}
              </Badge>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 text-[11px] font-medium text-slate-500">
              <p>Model: <span className="text-slate-900 font-bold">{data?.vehicle?.model}</span></p>
              <p>Reg: <span className="text-slate-900 font-bold">{data?.vehicle?.reg}</span></p>
              <p>Driver: <span className="text-slate-900 font-bold">{data?.vehicle?.driver}</span></p>
              <p>Year: <span className="text-slate-900 font-bold">{data?.vehicle?.year}</span></p>
            </div>
            <div className="mt-3 flex items-center gap-4 text-[10px]">
                <Link href={`/vehicles/${data?.vehicle?.id}`} className="flex items-center gap-1 text-green-700 font-bold hover:underline">
                    <MapPin className="h-3 w-3" /> View Live Location
                </Link>
                <span className="text-slate-400">Last Update:</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:self-start">
          
            <Button 
                onClick={() => setIsImmobilized(!isImmobilized)}
                className={`rounded-xl font-bold text-xs shadow-lg transition-all ${isImmobilized ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700 shadow-red-100'}`}
            >
                <Square className="h-3.5 w-3.5 mr-2" /> {isImmobilized ? "Release Engine" : "Emergency Stop"}
            </Button>
        </div>
      </div>

      {/* 2. MODE & TIME CONTROLS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
          {["Overview", "Maintenance", "Fuel", "Alerts"].map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className={`flex-1 py-2.5 text-[11px] font-bold rounded-xl transition-all duration-300 ${
                mode === m ? 'bg-slate-900 text-white shadow-lg scale-[1.02]' : 'text-slate-400 hover:text-slate-600'
              }`}>
              {m}
            </button>
          ))}
        </div>

        <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
          {["daily", "weekly", "monthly", "yearly"].map((t) => (
            <button key={t} onClick={() => {setTimeRange(t); setSelectedSummary(null); }}
              className={`flex-1 py-2.5 text-[11px] font-bold rounded-xl transition-all ${
                timeRange === t ? 'bg-green-700 text-white shadow-md' : 'text-slate-400 hover:bg-slate-50'
              }`}>
              {t}
            </button>
          ))}
          <div className="w-px bg-slate-200 mx-1 lg:block" />
          <Popover>
            <PopoverTrigger asChild>
                 <Button variant="ghost" className="text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    <CalendarIcon className="h-4 w-4 mr-2 text-green-600" />
                    {date ? format(date, "PPP") : "Select Date"}
                    <ChevronDown className="ml-2 h-4 w-4 text-slate-400" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-2xl border-none shadow-2xl" align="end">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* 3. CONTEXTUAL METRICS GRID - UPDATED FOR YOUR FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mode === "Overview" && (
            <>
                <MetricBox title="Total Engine Hours" value={data?.metric?.totalHours} sub="Accumulated" icon={<Timer className="text-green-600" />} />
                <MetricBox title="Speed" value={`${data?.metric?.speed || 0} km/h`} sub="Speed" icon={<Gauge className="text-blue-600" />} /> {/*This can be current speed or average speed based on analysis selection */}
                <MetricBox title="Distance" value={`${data?.metric?.distance || 0} km`} sub={`Total for ${timeRange}`} icon={<MapPin className="text-purple-600" />} /> {/*This can be distance travelled in the selected time range */}
                <MetricBox title="RPM" value={data?.metric?.rpm || 0} sub="Engine Revolutions" icon={<Activity className="text-orange-600" />} />  {/*This is an average with respect to the selected time range */}
            </>
        )}

        {mode === "Maintenance" && (
            <>
                <MetricBox title="Next Maintenance" value={data?.metric?.nextService} sub="Hours remaining" icon={<Wrench className="text-blue-600" />} /> {/*Next service from schedule*/}
                <MetricBox title="Oil Pressure" value={`${data?.metric?.oilPressure || 0} PSI`} sub="Engine Lube Status" icon={<Droplets className="text-cyan-600" />} /> {/*This can be an average or latest oil pressure reading*/}
                <MetricBox title="Battery Voltage" value={`${data?.metric?.batteryVoltage || 0} V`} sub="Electrical Health" icon={<Zap className="text-amber-500" />} />  {/*This can be an average or latest battery voltage reading*/}
                <MetricBox title="Engine Temperature" value={`${data?.metric?.engineTemp || 0}°C`} sub="Current Temperature" icon={<Thermometer className="text-red-600" />} /> {/*This can be an average or latest engine temperature reading*/}
            </>
        )}

        {mode === "Fuel" && (
            <>
                <MetricBox title="Fuel Level" value={`${data?.metric?.fuelLevel || 0}%`} sub="Available Tank" icon={<Fuel className="text-amber-600" />} />  {/*Current fuel level _ but we need the historical data to show the trend in the chart*/}
                <MetricBox title="Fuel Rate" value={`${data?.metric?.fuelRate || 0} L/h`} sub="Fuel Consumption" icon={<Activity className="text-orange-600" />} /> {/*This can be an average or latest fuel rate reading*/}
                <MetricBox title="Efficiency" value={`${data?.metric?.fuelEfficiency || 0} km/L`} sub="Work to Fuel Ratio" icon={<ArrowUpRight className="text-green-600" />} /> {/*This can be calculated as distance travelled per unit of fuel consumed in the selected time range_data is in the database*/}
                <MetricBox title="Potential Theft" value={data?.metric?.potentialTheft || "None"} sub="Drainage Alerts" icon={<ShieldCheck className="text-red-600" />} />  {/*This can be based on sudden drops in fuel level or alerts related to fuel theft in the selected time range*/}
            </>
        )}

        {mode === "Alerts" && (
            <>
                <MetricBox title="System Faults" value={data?.metric?.faults || 0} sub="DTC Error Codes" icon={<AlertTriangle className="text-red-600" />} />  {/*This can be the count of active diagnostic trouble codes (DTCs) or critical faults detected in the selected time range_found in the database_alert table*/}
                <MetricBox title="Unplanned Stops" value={data?.metric?.stops || 0} sub="Engine Cut-outs" icon={<Octagon className="text-slate-600" />} />     {/*This can be the count of unplanned engine stops detected in the selected time range_based on telemetry data analysis*/}
                <MetricBox title="Jobs Complete" value={data?.metric?.jobsComplete || 0} sub="Productivity Log" icon={<Briefcase className="text-blue-600" />} />  {/*This is the count of completed jobs or tasks based on telemetry data analysis found in trip_table in the selected time range*/}
                <MetricBox title="Miscellaneous" value={data?.metric?.miscAlerts || 0} sub="Other Notifications" icon={<AlertCircle className="text-amber-600" />} /> {/*Other notifications here*/}
            </>
        )}
      </div>

      {/* 4. DYNAMIC CHART & REMOTE CONTROL CENTER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition flex flex-col">
          <CardHeader>
            <div className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-sm font-medium">{modeConfig.title}</CardTitle>
                <p className="text-xs text-slate-500 font-medium">Advanced Telemetry Analysis</p>
              </div>
              {mode === "Maintenance" && (
                <Button variant="outline" className="text-xs font-semibold rounded-xl h-8 text-blue-600 border-blue-100 bg-blue-50">
                  <History className="h-3 w-3 mr-2" /> Service History
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="h-[320px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                {mode === "Maintenance" ? (
                  <BarChart data={data?.MaintenanceStats || []} onClick={handleChartClick}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 11}} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip cursor={{fill: '#f8fafc'}} />
                      <Bar dataKey="temp" name="Engine Temp" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                ) : (
                  <AreaChart data={data?.ChartData || []} onClick={handleChartClick}>
                      <defs>
                        <linearGradient id="modeColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={mode === "Fuel" ? "#d97706" : "#15803d"} stopOpacity={0.1}/>
                          <stop offset="95%" stopColor={mode === "Fuel" ? "#d97706" : "#15803d"} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 11}} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Area 
                          type="monotone" 
                          dataKey={mode === "Fuel" ? "fuel" : "work"} 
                          stroke={mode === "Fuel" ? "#d97706" : "#15803d"} 
                          fill="url(#modeColor)" 
                          strokeWidth={3} 
                      />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
            <Card className="shadow-sm hover:shadow-md transition bg-slate-900 text-white">
                <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-medium flex items-center gap-2"><Settings className="h-4 w-4 text-green-400" /> Remote Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <CommandButton icon={<Zap className="h-3.5 w-3.5" />} label="Engine Immobilizer" status={isImmobilized ? "LOCKED" : "READY"} active={isImmobilized} />
                    <CommandButton icon={<Gauge className="h-3.5 w-3.5" />} label="Speed Limit" status="25 KM/H" active={true} />
                    <CommandButton icon={<MapPin className="h-3.5 w-3.5" />} label="Geofence" status="ACTIVE" active={true} />
                </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition flex-1">
                <CardHeader className="pb-4">
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

// --- HELPER COMPONENTS ---

function MetricBox({ title, value, sub, icon }: any) {
  return (
    <Card className="shadow-sm hover:shadow-md transition">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value || "---"}</div>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  );
}

function CommandButton({ icon, label, status, active }: any) {
    return (
        <div className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${active ? 'bg-green-500/10 border-green-500/50' : 'bg-white/5 border-white/10'}`}>
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${active ? 'bg-green-500 text-white' : 'bg-white/10 text-white/40'}`}>{icon}</div>
                <p className="text-[11px] font-bold tracking-tight">{label}</p>
            </div>
            <Badge className={`text-[9px] font-black tracking-tighter ${active ? 'bg-green-500 text-white' : 'bg-white/20 text-white/60'}`}>{status}</Badge>
        </div>
    )
}

function LogTableRow({ date, category, detail }: any) {
    return (
        <tr className="hover:bg-slate-50/80 transition-all cursor-default">
            <td className="px-6 py-5 text-xs font-semibold text-slate-900">{date}</td>
            <td className="px-6 py-5"><Badge variant="outline" className="text-xs font-medium border-slate-200">{category}</Badge></td>
            <td className="px-6 py-5 text-xs text-slate-500 font-medium">{detail}</td>
            <td className="px-6 py-5 text-right"><Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><MoreVertical className="h-4 w-4 text-slate-300" /></Button></td>
        </tr>
    )
}

function HealthStat({ label, value, status }: any) {
  return (
    <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
      <p className="text-[9px] text-slate-400 font-bold uppercase">{label}</p>
      <p className="text-xs font-bold text-slate-800">{value}</p>
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