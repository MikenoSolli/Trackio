"use client"

import { Plus, Tractor, Car, Truck, Bus, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"; // Ensure you have the Sheet component installed
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { addVehicle } from "./actions";

export function AddVehicleDrawer() {
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
        {/* Header Section */}
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

        
        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
         
          {/* Section 1: Core Details */}
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

          {/* Section 2: Fleet Identity */}
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

        {/* Action Footer - Fixed at bottom */}
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