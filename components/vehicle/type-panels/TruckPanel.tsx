import { BaseVehicle } from "@/components/data/mockData"

interface Props {
  vehicle: BaseVehicle
}

export default function TruckPanel() {
  return (
    <div className="bg-slate-800 text-white p-4 rounded-xl">
      <h3 className="font-semibold mb-2">Truck Info</h3>
      <p>Cargo: Loaded</p>
      <p>Temperature: 4°C</p>
      <p>Weight: 12 tons</p>
    </div>
  )
}
