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
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { getAllVehiclesDisplayData, addVehicle } from "./actions";


function AddVehicleDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-green-700 hover:bg-green-800 text-white shadow-sm transition-all active:scale-95 flex items-center gap-2">
          <Plus className="h-4 w-4 stroke-[3px]" />
          <span className="font-semibold">Add Vehicle</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="sm:max-w-112.5 p-0 flex flex-col border-l border-slate-200 shadow-xl">
    
      <form action={addVehicle} className="h-full flex flex-col">
        <div className="p-6 bg-zinc-700 text-white">
          <SheetHeader className="text-left">
            <SheetTitle className="text-xl font-bold text-white flex items-center gap-2">
               <Tractor className="h-5 w-5 text-green-400" />
               New Asset Registration
            </SheetTitle>
            <SheetDescription className="text-slate-400">
              Complete the details below to add a vehicle to the active fleet.
            </SheetDescription>
          </SheetHeader>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-green-700 border-b border-green-100 pb-2">
              Basic Information
            </h4>
            
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="make" className="text-xs font-bold text-slate-500 uppercase">Manufacturer / Make</Label>
                <Input id="make" name="make" placeholder="e.g. Mercedes-Benz" className="h-11 border-slate-200 focus-visible:ring-0 focus:border-green-600 focus:ring-green-600 transition-all" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="model" className="text-xs font-bold text-slate-500 uppercase">Model Specification</Label>
                <Input id="model" name="model" placeholder="e.g. Actros 2645" className="h-11 border-slate-200 focus-visible:ring-0"  />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-green-700 border-b border-green-100 pb-2">
              Vehicle Identity
            </h4>
            
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="plateNumber" className="text-xs font-bold text-slate-500 uppercase">Registration Plate</Label>
                <Input 
                  id="plateNumber" 
                  name="plateNumber" 
                  placeholder="KCX 001A" 
                  className="h-11 border-slate-200 font-mono text-lg tracking-widest uppercase placeholder:font-sans placeholder:text-sm placeholder:tracking-normal focus-visible:ring-0" 
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="type" className="text-xs font-bold text-slate-500 uppercase">Vehicle Category</Label>
                <Select name="type" defaultValue="TRACTOR">
                  <SelectTrigger className="h-11 border-slate-200">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TRACTOR">🚜 Tractor / Farm Unit</SelectItem>
                    <SelectItem value="TRUCK">🚛 Heavy Duty Truck</SelectItem>
                    <SelectItem value="BUS">🚌 Passenger Bus</SelectItem>
                    <SelectItem value="CAR">🚗 Commercial Car</SelectItem>
                    <SelectItem value="MOTORCYCLE">🏍️ Motorcycle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <SheetFooter className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="flex w-full items-center gap-3">
            <Button 
                variant="outline" 
                onClick={() => setOpen(false)} 
                className="flex-1 border-slate-300 text-slate-600 hover:bg-slate-100 h-11"
            >
              Cancel
            </Button>
            <Button 
                type="submit" 
                className="flex-1 bg-green-700 hover:bg-green-800 h-11 shadow-md font-semibold"
            >
              Save Asset
            </Button>
          </div>
        </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}


export default function VehiclesPage() {

  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

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

        <div className="w-full">

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