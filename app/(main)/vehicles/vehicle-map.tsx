"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css" // <--- 1. CRITICAL: Add this import

// 2. Fix the marker icons
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

interface VehicleMapProps {
  vehicles: {
    id: number
    name: string
    lat: number
    lng: number
    status: string
    fuel: number
  }[]
}

export default function VehicleMap({ vehicles }: VehicleMapProps) {
  return (
    <MapContainer
      center={[-1.2921, 36.8219]} // Default to Nairobi, Kenya
      zoom={12}
      className="h-full w-full rounded-md" // Use Tailwind instead of style if possible
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {vehicles.map((vehicle) => (
        <Marker 
          key={vehicle.id} 
          position={[vehicle.lat, vehicle.lng]}
          icon={defaultIcon}
        >
          <Popup>
            <div className="text-sm">
               <p className="font-bold border-b mb-1">{vehicle.name}</p>
               <p>Status: <span className="capitalize">{vehicle.status}</span></p>
               <p>Fuel: {vehicle.fuel}%</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}