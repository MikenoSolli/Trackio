import { BaseVehicle } from "@/components/data/mockData"

export default function BaseStatusPanel({ vehicle }: { vehicle: BaseVehicle }) {
  return (
    <div className="bg-slate-800 text-white p-4 rounded-xl space-y-2">
      <h2 className="text-lg font-semibold">{vehicle.name}</h2>
      <p>Status: {vehicle.status}</p>
      <p>Speed: {vehicle.speed} km/h</p>
      <p>Fuel: {vehicle.fuel}%</p>
      <p>Engine: {vehicle.engineOn ? "ON" : "OFF"}</p>
      <p>Distance Today: {vehicle.distanceToday} km</p>
      <p>Idle Time: {vehicle.idleTime} mins</p>
      <p>Last Seen: {vehicle.lastSeen}</p>
    </div>
  )
}
