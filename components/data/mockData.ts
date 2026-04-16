export type VehicleType = "CAR" | "TRUCK" | "TRACTOR"

export interface BaseVehicle {
  id: string
  name: string
  type: VehicleType
  status: "ACTIVE" | "OFFLINE"
  fuel: number
  speed: number
  lat: number
  lng: number
  engineOn: boolean
  lastSeen: string
  distanceToday: number
  idleTime: number
}

export const mockVehicles: BaseVehicle[] = [
  {
    id: "1",
    name: "Toyota Corolla",
    type: "CAR",
    status: "ACTIVE",
    fuel: 72,
    speed: 68,
    lat: -1.2921,
    lng: 36.8219,
    engineOn: true,
    lastSeen: "2 mins ago",
    distanceToday: 42,
    idleTime: 12,
  },
  {
    id: "2",
    name: "Volvo FH16",
    type: "TRUCK",
    status: "ACTIVE",
    fuel: 55,
    speed: 80,
    lat: -1.28,
    lng: 36.82,
    engineOn: true,
    lastSeen: "1 min ago",
    distanceToday: 210,
    idleTime: 25,
  },
  {
    id: "3",
    name: "John Deere 5075E",
    type: "TRACTOR",
    status: "ACTIVE",
    fuel: 88,
    speed: 18,
    lat: -1.30,
    lng: 36.80,
    engineOn: true,
    lastSeen: "5 mins ago",
    distanceToday: 12,
    idleTime: 40,
  },
]
