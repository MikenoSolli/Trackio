"use client"

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { 
  Fuel, Gauge, Battery, ArrowLeft, Calendar as CalendarIcon, PlayCircle, XCircle,
  ShieldCheck, Navigation, History, Info, ChevronLeft, ChevronRight , Loader2,Play, Pause, RotateCcw
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card } from "@/components/ui/card";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";  


type DeviceStatus = "ACTIVE" | "IDLE" | "OFFLINE";

const Map = dynamic(() => import("./Map"), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-100 animate-pulse" />
});

// 1. Define the interface so TypeScript knows what 'vehicle' looks like
interface VehicleProps {
  vehicle: {
    id: string;
    name: string;
    plate: string;
    status: string;
    type: string;
    daysToService: string;
    telemetry: {
      fuel: number;
      speed: number;
      engineHours: number;
      lat: number;
      lng: number;
      lastUpdate: string;
    };
    history: { pos: [number, number]; time: string }[];
  }
}



// 2. Accept 'vehicle' as a prop
export default function VehicleDetailClient({ vehicle }: VehicleProps) {
  const [date, setDate] = useState<DateRange | undefined>();
  const [showStats, setShowStats] = useState(false);
  const [activeTab, setActiveTab] = useState("live");
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const hasInitialized = useRef(false);

  const [playbackEnabled, setPlaybackEnabled] = useState(false);
  const [playbackIndex, setPlaybackIndex] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const lastTimeRef = useRef<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [smoothPos, setSmoothPos] = useState<[number, number] | null>(null);
  const progressRef = useRef(0); // Tracking 0.0 to 1.0 between points
  const requestRef = useRef<number | undefined>(undefined);


  useEffect(() => {
  if (!playbackEnabled) {
    setIsPlaying(false);
    setPlaybackIndex(0);
    setSmoothPos(null); // Clear the interpolated position
    progressRef.current = 0;
  }
}, [playbackEnabled]);

useEffect(()=>{
if (!hasInitialized.current) {
    const isBigScreen = window.innerWidth >= 768;
    
    if (isBigScreen) {
      setShowStats(true);
    }
    
    hasInitialized.current = true;
  }
});
  const interpolate = (p1: [number, number], p2: [number, number], t: number): [number, number] => {
    return [
      p1[0] + (p2[0] - p1[0]) * t,
      p1[1] + (p2[1] - p1[1]) * t
    ];
  };

  const fetchHistory = async (range: DateRange) => {
    if (!range.from || !range.to) return;
    
  setIsLoading(true);
  try {
    // Format dates to ISO strings for the API
    const from = range.from.toISOString();
    const to = range.to.toISOString();
    
    const response = await fetch(`/api/vehicles/${vehicle.id}/history?from=${from}&to=${to}`);
    
    if (!response.ok) throw new Error("Failed to fetch history");
    
    const data = await response.json();
    
    setHistoryData(data); // Save the database results to state
    setActiveTab("history"); // Switch the map to history view
    
  } catch (error) {
    console.error("History Error:", error);
    // You can add a toast notification here
  } finally {
    setIsLoading(false);
  }
};


const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range);
    if (range?.from && range?.to) {
      // Trigger data pull
      console.log("Pulling data for:", range.from, "to", range.to);
      fetchHistory(range);
    }
  };

  const mapHistory = activeTab === "live" ? vehicle.history : historyData;

const animate = (time: number) => {
  if (lastTimeRef.current !== undefined && isPlaying) {
    const deltaTime = time - lastTimeRef.current;
    
    if (playbackIndex < mapHistory.length - 1) {
      // 0.001 is the base speed (1 second per segment at 1x)
      // Multiply by playbackSpeed to go faster
      const step = (deltaTime * 0.001) * playbackSpeed;
      progressRef.current += step;

      if (progressRef.current >= 1) {
        progressRef.current = 0;
        setPlaybackIndex(prev => prev + 1);
      } else {
        const p1 = mapHistory[playbackIndex].pos;
        const p2 = mapHistory[playbackIndex + 1].pos;
        setSmoothPos(interpolate(p1, p2, progressRef.current));
      }
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setIsPlaying(false);
    }
  }
  lastTimeRef.current = time;
};

useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [isPlaying, playbackIndex]);


  const finalPos = playbackEnabled ? (smoothPos || mapHistory[playbackIndex]?.pos) : [vehicle.telemetry.lat, vehicle.telemetry.lng];

  return (
    <div className="relative h-[calc(100vh-64px)] w-full overflow-hidden bg-slate-50">
      
      {/* TOP NAVIGATION BAR */}
      <div className="absolute top-4 left-4 right-4 z-1000 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <Link href="/vehicles">
            <Button variant="outline" size="icon" className="shadow-md rounded-full bg-white border-none">
              <ArrowLeft className="h-5 w-5 text-slate-600" />
            </Button>
          </Link>
          <div className="bg-white px-4 py-2 rounded-xl shadow-md border border-slate-200">
            {/* USE LIVE DATA HERE */}
            <Link href={`/reports/${vehicle.type.toLowerCase()+'s'}/${vehicle.id}`}>
            <h1 className="font-bold text-slate-900">{vehicle.name}</h1>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{vehicle.plate}</p>
            </Link>
          </div>
          <Button onClick={() => setShowStats(!showStats)} variant="outline" size="icon" className="md:hidden shadow-md rounded-full bg-white border-none pointer-events-auto">
            <Info className={`h-5 w-5 ${showStats ? 'text-green-600' : 'text-slate-600'}`} />
          </Button>
        </div>

       <div className="flex gap-2 pointer-events-auto">
  <Button 
    onClick={() => setActiveTab("live")} 
    variant={activeTab === "live" ? "default" : "secondary"} 
    className={`shadow-md rounded-full ${activeTab === 'live' ? 'bg-green-700 hover:bg-green-800' : 'bg-white text-slate-600'}`}
  >
    <Navigation className="h-4 w-4 mr-2" /> <span className="hidden sm:inline">Live</span>
  </Button>

  <Popover>
    <PopoverTrigger asChild>
      <Button 
        variant={activeTab === "history" ? "default" : "secondary"} 
        className={cn(
          "shadow-md rounded-full bg-white",
          activeTab === "history" && "bg-slate-900 text-white hover:bg-slate-800"
        )}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        ) : (
          <History className="h-4 w-4 mr-2" />
        )}
        <span className="hidden sm:inline">
        {date?.from ? (
          date.to ? `${format(date.from, "MMM dd")} - ${format(date.to, "MMM dd")}` : format(date.from, "MMM dd")
        ) : (
          "History"
        )}
        </span>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0 border-none shadow-2xl rounded-2xl" align="end">
      <Calendar
        initialFocus
        mode="range"
        selected={date}
        onSelect={(range) => {
          setDate(range);
          if (range?.from && range?.to) fetchHistory(range);
        }}
        numberOfMonths={1}
      />
    </PopoverContent>
  </Popover>
    </div>
      </div>

      {/* 1. PLAYBACK TOGGLE BUTTON */}
      <div className={cn(
        "absolute z-1001 transition-all duration-300",
        // Small screens: Move up (bottom-32) to clear the controller and center slightly
        // Large screens: Stay in the corner (bottom-6 left-6)
        playbackEnabled 
          ? "bottom-32 left-6 md:bottom-6 md:left-6" 
          : "bottom-6 left-6"
      )}>
        <Button 
          onClick={() => setPlaybackEnabled(!playbackEnabled)}
          className={cn(
            "h-10 md:h-12 rounded-full shadow-2xl transition-all gap-2 px-4 border-none",
            playbackEnabled 
              ? "bg-red-500 hover:bg-red-600 text-white scale-90 md:scale-100" 
              : "bg-white hover:bg-slate-50 text-slate-900"
          )}
        >
          {playbackEnabled ? (
            <>
              <XCircle className="h-4 w-4 md:h-5 md:w-5" /> 
              <span className="text-xs md:text-sm">Exit Playback</span>
            </>
          ) : (
            <>
              <PlayCircle className="h-5 w-5 text-green-600" /> 
              <span className="font-bold">Playback Mode</span>
            </>
          )}
        </Button>
      </div>

      {/* 2. PLAYBACK CONTROLLER (Center Bottom) */}
      {playbackEnabled && mapHistory.length > 0 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-1000 w-[90%] max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Card className="p-4 bg-slate-900/95 backdrop-blur-md border-none shadow-2xl text-white rounded-[24px]">
            <div className="flex items-center gap-4">
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-10 w-10 rounded-full hover:bg-white/10 text-white shrink-0"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="fill-white h-5 w-5" /> : <Play className="fill-white h-5 w-5 ml-1" />}
              </Button>
              
              <div className="flex-1 space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>{activeTab === "live" ? "Live Trail Replay" : "Historical Replay"}</span>
                  <span className="text-green-400 font-mono">{mapHistory[playbackIndex]?.time}</span>
                </div>
                <Slider 
                value={[playbackIndex]} 
                max={mapHistory.length - 1} 
                step={1} 
                onValueChange={(val) => {
                  setPlaybackIndex(val[0]);
                  setIsPlaying(false);
                  setSmoothPos(null);      // Clear current interpolation
                  progressRef.current = 0; // Start fresh at the new point
                }}
                className="py-2"
              />
           </div>

              <Button 
                size="icon" 
                variant="ghost" 
                className="h-10 w-10 text-slate-400 hover:text-white"
                onClick={() => {setPlaybackIndex(0); setIsPlaying(false);}}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>

              <Button 
                  variant="ghost" 
                  className="text-[10px] font-bold w-10 h-10 rounded-full"
                  onClick={() => setPlaybackSpeed(s => s === 8 ? 1 : s * 2)}
                >
                  {playbackSpeed}x
            </Button>
            </div>
          </Card>
        </div>
      )}

      {/* LEFT SIDE DATA OVERLAY */}
      {/* <div className={cn(`absolute top-24 left-4 z-1000 w-72 space-y-4 transition-all duration-300 transform 
        ${showStats ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:translate-x-0 md:opacity-100'}`)}>
         */}
        <div 
          className={cn(
          "absolute top-24 left-4 z-40 w-72 transition-all duration-500 ease-in-out",
          showStats 
            ? "translate-x-0 opacity-90" // TRUE: Show the panel
            : "-translate-x-[calc(100%+16px)] md:-translate-x-[calc(100%-12px)] opacity-0 md:opacity-50" // FALSE: Hide/Peek
        )}>

          <Button 
            onClick={() => setShowStats(!showStats)} 
            className="hidden md:flex absolute -right-10 top-0 h-8 w-8 rounded-full bg-white shadow-md border border-slate-200 p-0 items-center justify-center hover:bg-slate-50 transition-colors"
          >
            {/* If panel is shown, arrow points Left (to hide it). If hidden, arrow points Right (to reveal it) */}
            {showStats ? (
              <ChevronLeft className="h-4 w-4 text-slate-600" />
            ) : (
              <ChevronRight className="h-4 w-4 text-slate-600" />
            )}
          </Button>

        <div className={`${!showStats ? 'md:block hidden' : 'block'} space-y-4`}>
          <Card className="p-4 shadow-xl border-none bg-white/95 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <Badge className={vehicle.status==="OFFLINE"
                ? "bg-gray-200 text-gray-600" 
                : "bg-green-100 text-green-700"
                
              }>● {vehicle.status}</Badge>
              <span className="text-[10px] text-slate-400 font-medium tracking-tighter uppercase">Updated {vehicle.telemetry.lastUpdate}</span>
            </div>

            <div className="space-y-4">
              {/* FUEL */}
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg"><Fuel className="h-4 w-4 text-amber-600" /></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Fuel Level</p>
                    <p className="text-lg font-bold text-slate-700 leading-none">{vehicle.telemetry.fuel}%</p>
                  </div>
                </div>
                <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: `${vehicle.telemetry.fuel}%` }}></div>
                </div>
              </div>

              {/* SPEED */}
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-50 rounded-lg"><Gauge className="h-4 w-4 text-blue-600" /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Current Speed</p>
                  <p className="text-lg font-bold text-slate-700 leading-none">{vehicle.telemetry.speed} <span className="text-xs font-normal text-slate-400">km/h</span></p>
                </div>
              </div>

              {/* ENGINE HOURS */}
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-slate-50 rounded-lg"><Battery className="h-4 w-4 text-slate-600" /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Engine Hours</p>
                  <p className="text-lg font-bold text-slate-700 leading-none">{vehicle.telemetry.engineHours} <span className="text-xs font-normal text-slate-400">hrs</span></p>
                </div>
              </div>
            </div>
          </Card>

          {/* MAINTENANCE CARD */}
          <Card className="p-4 shadow-xl border-none bg-slate-900 text-white">
              <h4 className="text-[10px] uppercase font-bold text-slate-400 mb-3 tracking-widest">Safety & Maintenance</h4>
              <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs p-2 bg-slate-800 rounded-lg">
                      <span className="flex items-center gap-2"><ShieldCheck className="h-3 w-3 text-green-400" /> Insurance</span>
                      <span className="text-green-400 font-bold">Valid</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 bg-slate-800 rounded-lg">
                      <span className="flex items-center gap-2"><CalendarIcon className="h-3 w-3 text-amber-400" /> Next Service</span>
                      <span className="text-slate-300">{vehicle.daysToService}</span>
                  </div>
              </div>
          </Card>
        </div>
      </div>

      {/* THE MAP CONTAINER */}
      <div className="absolute inset-0 z-0">
          <Map 
              center={finalPos as [number, number]} 
              history={mapHistory}
              status={vehicle.status as DeviceStatus} // Pass the current
              playbackIndex={playbackEnabled ? playbackIndex : null}
            />
      </div>

    </div>
  );
}