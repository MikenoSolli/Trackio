"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { 
  Tractor, Timer, Fuel, Gauge, Calendar as CalendarIcon,
  Loader2, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { 
  format, startOfMonth, startOfDay, parse, startOfWeek
} from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";

export default function TractorTypeReport() {
    const [timeRange, setTimeRange] = useState("daily");
    const [date, setDate] = useState<Date>(new Date());
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedSummary, setSelectedSummary] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                // Using format instead of toISOString to avoid UTC/timezone shifting issues
                const dateStr = format(date, "yyyy-MM-dd");
                const res = await fetch(`/api/reports/type?type=TRACTOR&date=${dateStr}&range=${timeRange}`);
                if (!res.ok) throw new Error("Network response was not ok");
                const json = await res.json();
                console.log('Tractors API response:', json);
                console.log('tractorStats:', json.tractorStats);
                console.log('metrics:', json.metrics);
                setData(json);
            } catch (error) {
                console.error("Failed to fetch tractor data:", error);
            } finally {
                setLoading(false);
            }
        } 
        fetchData();
    }, [date, timeRange]);

    const handleChartClick = (event: any) => {
        if (!event || !event.activeLabel) return;

        const label = event.activeLabel; 
        setSelectedSummary(label);
        
        const baseDate = date || new Date();

        try {
            if (timeRange === "yearly") {
                // Label: "Jan" -> Switch to monthly view for that month
                const monthDate = parse(label, "MMM", baseDate);
                setDate(startOfMonth(monthDate));
                setTimeRange("monthly");
            } 
            else if (timeRange === "monthly") {
                // Label: "Wk 12" -> Switch to weekly view for that week
                const weekDate = parse(label, "'Wk' w", baseDate);
                setDate(startOfWeek(weekDate));
                setTimeRange("weekly");
            } 
            else if (timeRange === "weekly") {
                // Label: "Mon" -> Switch to daily view for that day
                const dayDate = parse(label, "EEE", baseDate);
                setDate(startOfDay(dayDate));
                setTimeRange("daily");
            }
        } catch (e) {
            console.error("Drill-down parsing error:", e);
        }
    };

    if (loading && !data) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-slate-50">
                <Loader2 className="h-8 w-8 animate-spin text-green-600" />
            </div>
        );
    }

    return (
        <div className="p-6 bg-slate-50 min-h-screen space-y-6">
            
            {/* HEADER & CONTROLS */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Tractor className="h-5 w-5 text-green-700" />
                        <h1 className="text-2xl font-bold text-slate-900">{data?.type || 'TRACTOR'} Fleet Report</h1>
                    </div>
                    <p className="text-sm text-slate-500">Segment: Specialized Machinery</p>
                </div>

                <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 w-full md:w-auto">
                    <div className="hidden lg:flex bg-slate-100 rounded-xl p-1">
                        {['daily', 'weekly', 'monthly', 'yearly'].map((range) => (
                            <button
                                key={range}
                                onClick={() => { setTimeRange(range); setSelectedSummary(null); }}
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
                                {format(date, "PPP")}
                                <ChevronDown className="ml-2 h-4 w-4 text-slate-400" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                            <Calendar 
                                mode="single" 
                                selected={date} 
                                onSelect={(d) => d && setDate(d)} 
                                initialFocus 
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard 
                    title="Avg. Fuel Consumption" 
                    value={data?.metrics?.avgFuel} 
                    sub="Across units" 
                    icon={<Fuel className="text-amber-600" />} 
                />
                <MetricCard 
                    title="Total Engine Hours" 
                    value={data?.metrics?.totalHours} 
                    sub="Period total" 
                    icon={<Timer className="text-green-600" />} 
                />
                <MetricCard 
                    title="Fleet Utilization" 
                    value={data?.metrics?.utilization} 
                    sub="Active vs Idle" 
                    icon={<Gauge className="text-blue-600" />} 
                />
            </div>

            {/* CHARTS & LEADERBOARD */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <Card className='lg:col-span-2 shadow-sm'>
                    <CardHeader>
                        <CardTitle className='text-sm font-medium'>Work Intensity Cycle</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='flex justify-end mb-4'>
                            {selectedSummary && (
                                <Badge className='bg-green-50 text-green-700 border-none px-3'>Focus: {selectedSummary}</Badge>
                            )}
                        </div>
                        {!data?.tractorStats?.length ? (
                            <div className='h-[300px] flex items-center justify-center text-slate-400'>
                                <p>No data available for this period</p>
                            </div>
                        ) : (
                            <div className='h-[300px] w-full'>
                                <ResponsiveContainer width='100%' height='100%'>
                                    <BarChart data={data.tractorStats} onClick={handleChartClick} style={{cursor:'pointer'}}>
                                        <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#f1f5f9' />
                                        <XAxis dataKey='day' axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                        <YAxis axisLine={false} tickLine={false} />
                                        <Tooltip cursor={{fill: '#f8fafc'}} />
                                        <Bar dataKey='work' name='Work Hours' radius={[4, 4, 0, 0]} barSize={30}>
                                            {data.tractorStats.map((entry: any, index: number) => (
                                                <Cell 
                                                    key={`cell-${index}`} 
                                                    fill={selectedSummary === entry.day ? '#22c55e' : '#15803d'} 
                                                />
                                            ))}
                                        </Bar>
                                        <Bar dataKey='idle' name='Idle Hours' fill='#cbd5e1' radius={[4, 4, 0, 0]} barSize={30} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* LEADERBOARD */}
                <Card className='shadow-sm flex flex-col min-h-[400px]'> 
                    <CardHeader>
                        <CardTitle className='text-sm font-medium'>Unit Leaderboard</CardTitle>
                    </CardHeader>
                    <CardContent className='flex-1 flex flex-col'>
                        <div className='flex justify-end mb-4'>
                            <Badge variant='outline' className='text-xs bg-slate-50 font-semibold border-slate-200'>
                                {data?.leaderboard?.length || 0} Units
                            </Badge>
                        </div>

                        {!data?.leaderboard?.length ? (
                            <div className='flex-1 flex items-center justify-center text-slate-400 py-8'>
                                <p className='text-sm'>No tractors found</p>
                            </div>
                        ) : (
                            <>
                                <div className={`space-y-4 overflow-y-auto pr-2 flex-1 ${!isExpanded ? 'max-h-80' : ''}`}>
                                    {data.leaderboard.map((tractor: any) => (
                                        <Link href={`/reports/tractors/${tractor.id}`} key={tractor.id} className='block'>
                                            <div className='p-3 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all'>
                                                <div className='flex justify-between items-start mb-2'>
                                                    <p className='text-sm font-semibold text-slate-800'>{tractor.name}</p>
                                                    <Badge className={`${
                                                        tractor.status === 'Connected' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'
                                                    } border-none text-xs font-medium`}>
                                                        {tractor.status}
                                                    </Badge>
                                                </div>
                                                <div className='flex items-center justify-between text-xs text-slate-500'>
                                                    <span className='flex items-center gap-1 font-medium'><Timer className='h-3 w-3' /> {tractor.hours}h</span>
                                                    <span className={`font-semibold ${tractor.health > 85 ? 'text-green-600' : 'text-amber-600'}`}>{tractor.health}% Health</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {data.leaderboard.length > 4 && (
                                    <Button 
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        variant='ghost' 
                                        className='w-full mt-4 text-xs font-semibold text-slate-400 hover:text-green-700 border-t border-slate-100 pt-4 h-auto'
                                    >
                                        {isExpanded ? 'Show Less' : `View All ${data.leaderboard.length} Units`}
                                    </Button>
                                )}
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

interface MetricCardProps {
    title: string;
    value: string | number | undefined;
    sub: string;
    icon: React.ReactNode;
}

function MetricCard({ title, value, sub, icon }: MetricCardProps) {
    return (
        <Card className="shadow-sm hover:shadow-md transition">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value ?? "0"}</div>
                <p className="text-xs text-muted-foreground">{sub}</p>
            </CardContent>
        </Card>
    );
}