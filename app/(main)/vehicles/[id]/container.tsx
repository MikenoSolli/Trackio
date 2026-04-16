"use client"

import { MapContainer, TileLayer, Marker, Polyline, Tooltip, CircleMarker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { toast } from "sonner";
import { MapPin, Clock } from "lucide-react";

// Same icon fix as before...
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const redDotIcon = L.divIcon({
  className: "custom-red-dot",
  html: `<div class="relative flex h-5 w-5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-5 w-5 bg-red-600 border-2 border-white shadow-lg"></span>
        </div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

export default function Mapi({ center, history }: { center: [number, number], history: any[] }) {
  
  const getAddress = async (lat: number, lng: number, time: string) => {
    // Show a loading state immediately
    const toastId = toast.loading("Fetching location details...");

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
        { headers: { 'Accept-Language': 'en' } }
      );
      const data = await response.json();
      const address = data.display_name;

      // Update the loading toast to a success toast
      toast.success("Location Identified", {
        id: toastId, // Replace the loading toast
        duration: 7000, // 7 seconds as requested
        description: (
          <div className="mt-2 space-y-1 text-slate-600">
             <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" /> <span>Captured at {time}</span>
             </div>
             <div className="flex items-start gap-2">
                <MapPin className="h-3 w-3 mt-1 text-green-600" /> 
                <span className="text-xs leading-tight">{address}</span>
             </div>
          </div>
        ),
      });
    } catch (error) {
      toast.error("Could not fetch address", { id: toastId });
    }
  };

      {/* Adding CSS for the pulse animation if it's not in your global CSS */}
      <style jsx global>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
      
  const polylinePositions = history.map(point => point.pos);
  return (
    <MapContainer center={center} zoom={15} className="h-full w-full" zoomControl={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      
        <Polyline 
          positions={polylinePositions} 
          pathOptions={{ 
            color: '#16a34a', 
            weight: 5, 
            opacity: 0.7,
            lineCap: 'round',
            lineJoin: 'round',
            // Casting to any bypasses the strict 'PathOptions' type check
            // while keeping the functionality active in the browser
            smoothFactor: 2.0 
          } as any} 
        />

      {history.map((point, idx) => (
        <CircleMarker 
          key={idx} 
          center={point.pos} 
          radius={2} 
          pathOptions={{ color: '#15803d', fillColor: '#15803d', fillOpacity: 1 }}
          eventHandlers={{
            click: () => getAddress(point.pos[0], point.pos[1], point.time)
          }}
        >
          <Tooltip>Click to view address at {point.time}</Tooltip>
        </CircleMarker>
      ))}

      <Marker position={center} icon={redDotIcon}/>
    </MapContainer>


  );
}
// const getAddress = async (lat: number, lng: number) => {
//   try {
//     const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
//     const data = await response.json();
//     alert(`Location: ${data.display_name}`);
//   } catch (error) {
//     console.error("Geocoding failed", error);
//   }
// };