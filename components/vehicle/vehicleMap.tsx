"use client"

import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function VehicleMap({ vehicle }: any) {
  return (
    <MapContainer
      center={[vehicle.lat, vehicle.lng]}
      zoom={13}
      className="h-full w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[vehicle.lat, vehicle.lng]} />
    </MapContainer>
  )
}
