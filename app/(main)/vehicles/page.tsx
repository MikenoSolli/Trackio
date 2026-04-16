"use client"

import React from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Car,
  Tractor,
  Truck,
  MapPin,
  AlertTriangle,
  Fuel,
} from "lucide-react";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AddVehicleDrawer } from "./vehicleAdd";
import { getAllVehiclesDisplayData } from "./actions";



export default function VehiclesPage() {

  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function inside the effect
    async function loadData() {
      try {
        const data = await getAllVehiclesDisplayData();
        setVehicles(data);
      } catch (error) {
        console.error("Failed to fetch vehicles:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);
    
   console.log("vehicles",vehicles);
    
   const [search, setSearch] = useState("")
      const filteredVehicles = vehicles.filter((v) =>
        v.Name.toLowerCase().includes(search.toLowerCase())
 )

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">

      {/* Header + Add Button */}
       <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Car className="h-5 w-5 text-green-600" />
              <h1 className="text-2xl font-bold">Vehicles</h1>
            </div>
            <p className="text-sm text-muted-foreground">Fleet overview and management</p>
          </div>
          <AddVehicleDrawer />
        </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* Active Vehicles */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Vehicles
            </CardTitle>
            <Car className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              Currently online and moving
            </p>
          </CardContent>
        </Card>

        {/* Offline Vehicles */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Offline Vehicles
            </CardTitle>
            <Tractor className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">
              Devices not reporting
            </p>
          </CardContent>
        </Card>

        {/* Low Fuel */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Low Fuel
            </CardTitle>
            <Fuel className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Vehicles below 25% fuel
            </p>
          </CardContent>
        </Card>

        {/* Alerts Today */}
        <Card className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Alerts Today
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
            <p className="text-xs text-muted-foreground">
              Active system alerts
            </p>
          </CardContent>
        </Card>

      </div>
        

      {/* 🔎 Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4">

        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search vehicles..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Select>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="TRACTOR">Tractor</SelectItem>
            <SelectItem value="TRUCK">Truck</SelectItem>
            <SelectItem value="CAR">Car</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ACTIVE">Active</SelectItem>
            <SelectItem value="OFFLINE">Offline</SelectItem>
          </SelectContent>
        </Select>

      </div>

        {/* 🖥 Layout: Grid + Map */}
      <div className="w-full">

        {/* 📋 Vehicle Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <Link href={`/vehicles/${vehicle.id}`} key={vehicle.id} className="block">
            <Card
              key={vehicle.id}
              className="hover:shadow-md transition cursor-pointer"
            >
              <CardContent className="p-4 space-y-3">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {vehicle.type === "TRACTOR" ? (
                      <Tractor className="h-5 w-5 text-green-600" />
                    ) : (
                      <Car className="h-5 w-5 text-blue-600" />
                    )}
                    <h3 className="font-semibold">
                      {vehicle.Name}
                    </h3>
                  </div>

                  <Badge
                    variant="secondary"
                    className={
                      vehicle.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }
                  >
                    {vehicle.status}
                  </Badge>
                </div>

                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Fuel className="h-4 w-4" />
                  Fuel: {vehicle.fuel}%
                </div>

                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Lat: {vehicle.lat}, Lng: {vehicle.lng}
                </div>

              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
    
    </div>

    </div>


  )
}
