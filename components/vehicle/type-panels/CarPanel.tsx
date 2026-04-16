import { BaseVehicle } from "@/components/data/mockData"

interface Props {
  vehicle: BaseVehicle
}

export default function CarPanel() {
  return (
    <div className="bg-slate-800 text-white p-4 rounded-xl">
      <h3 className="font-semibold mb-2">Car Info</h3>
      <p>Driver: John Doe</p>
      <p>Insurance: Valid</p>
    </div>
  )
}
