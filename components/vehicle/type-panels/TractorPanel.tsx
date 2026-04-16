import { BaseVehicle } from "@/components/data/mockData"

interface Props {
  vehicle: BaseVehicle
}

export default function TractorPanel() {
  return (
    <div className="bg-slate-800 text-white p-4 rounded-xl">
      <h3 className="font-semibold mb-2">Tractor Info</h3>
      <p>Field: North Farm</p>
      <p>Engine Hours: 1240h</p>
      <p>Hectares Covered: 6.4ha</p>
    </div>
  )
}
