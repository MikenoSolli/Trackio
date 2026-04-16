"use client"

import React, { useState, useEffect, useMemo } from "react";
import { 
  Users, UserPlus, Search, MoreVertical, ShieldCheck, 
  Star, AlertCircle, TrendingUp, Download, Filter, Eye, Tractor, Edit3, Loader2,
  Phone, FileText, X,Unlink,  Link2, AlertTriangle, CheckCircle, XCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Alert {
  id: string;
  type: string;
  severity: string;
  message: string;
  createdAt: string;
}

interface Driver {
  id: string;
  name: string;
  phone: string | null;
  licenseNo: string | null;
  performance: number;
  licenceExp: string | null;
  vehicle?: {
    id: string;
    model: string;
    plateNumber: string;
    make: string;
    Type: string;
  } | null;
  alert: Alert[];
  _count: {
    alert: number;
  };
}

interface Vehicle {
  id: string;
  make: string;
  model: string;
  plateNumber: string;
  Type: string;
  driverId: string | null;
}

export default function DriverManagement() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchDrivers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/drivers");
      const data = await res.json();
      setDrivers(data);
    } catch (error) {
      console.error("Failed to fetch drivers", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchVehicles = async () => {
    try {
      const res = await fetch("/api/vehicles");
      const data = await res.json();
      setVehicles(data);
    } catch (error) {
      console.error("Failed to fetch vehicles", error);
    }
  };

  useEffect(() => {
    fetchDrivers();
    fetchVehicles();
  }, []);

  const filteredDrivers = useMemo(() => {
    return drivers.filter(d => 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.vehicle?.model?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.vehicle?.plateNumber?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, drivers]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);
  const paginatedDrivers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredDrivers.slice(start, start + itemsPerPage);
  }, [filteredDrivers, currentPage]);

  const availableVehicles = useMemo(() => {
    return vehicles.filter(v => !v.driverId);
  }, [vehicles]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      licenseNo: formData.get("licenseNo"),
      licenceExp: formData.get("licenceExp"),
    };

    const res = await fetch("/api/drivers", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setIsRegisterOpen(false);
      fetchDrivers();
    }
  };

  const handleEditDriver = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const res = await fetch("/api/drivers", {
      method: "PATCH",
      body: JSON.stringify({
        id: selectedDriver?.id,
        name: formData.get("name"),
        phone: formData.get("phone"),
        licenseNo: formData.get("licenseNo"),
        licenceExp: formData.get("licenceExp"),
      }),
    });

    if (res.ok) {
      setIsEditOpen(false);
      setSelectedDriver(null);
      fetchDrivers();
    }
  };

  const handleAssignVehicle = async (vehicleId: string) => {
    if (!selectedDriver) return;
    setActionLoading(true);
    
    const res = await fetch("/api/drivers", {
      method: "PUT",
      body: JSON.stringify({
        driverId: selectedDriver.id,
        vehicleId,
        action: "assign",
      }),
    });

    if (res.ok) {
      setIsAssignOpen(false);
      setSelectedDriver(null);
      fetchDrivers();
      fetchVehicles();
    }
    setActionLoading(false);
  };

  const handleUnassignDriver = async () => {
    if (!selectedDriver) return;
    setActionLoading(true);
    
    const res = await fetch("/api/drivers", {
      method: "PUT",
      body: JSON.stringify({
        driverId: selectedDriver.id,
        action: "unassign",
      }),
    });

    if (res.ok) {
      setSelectedDriver(null);
      fetchDrivers();
      fetchVehicles();
    }
    setActionLoading(false);
  };

  const handleDeleteDriver = async () => {
    if (!selectedDriver) return;
    setActionLoading(true);
    
    const res = await fetch(`/api/drivers?id=${selectedDriver.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setSelectedDriver(null);
      fetchDrivers();
    }
    setActionLoading(false);
  };

  if (loading) return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <Loader2 className="h-8 w-8 animate-spin text-green-700" />
    </div>
  );

  const getAlertSeverityColor = (severity: string) => {
    switch (severity) {
      case 'HIGH': return 'bg-red-100 text-red-700 border-red-200';
      case 'MEDIUM': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-5 w-5 text-green-700" />
            <h1 className="text-2xl font-bold text-slate-900">Drivers</h1>
          </div>
          <p className="text-sm text-slate-500">Fleet personnel management and compliance tracking</p>
        </div>
        
        <div className="flex gap-2">
          <Sheet open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
            <SheetTrigger asChild>
              <Button className="bg-green-700 hover:bg-green-800 text-white shadow-sm transition-all active:scale-95 flex items-center gap-2">
                <UserPlus className="h-4 w-4 stroke-[3px]" />
                <span className="font-semibold">Register Driver</span>
              </Button>
            </SheetTrigger>

            <SheetContent className="sm:max-w-112.5 p-0 flex flex-col border-l border-slate-200 shadow-xl">
              <form onSubmit={handleRegister} className="h-full flex flex-col">
                <div className="p-6 bg-zinc-700 text-white">
                  <SheetHeader className="text-left">
                    <SheetTitle className="text-xl font-bold text-white flex items-center gap-2">
                      <Users className="h-5 w-5 text-green-400" />
                      Driver Registration
                    </SheetTitle>
                    <SheetDescription className="text-slate-400">
                      Add a new driver to the fleet management system.
                    </SheetDescription>
                  </SheetHeader>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-green-700 border-b border-green-100 pb-2">
                      Personal Information
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="reg-name" className="text-xs font-bold text-slate-500 uppercase">Full Name</Label>
                        <Input id="reg-name" name="name" placeholder="e.g. John Doe" className="h-11 border-slate-200 focus-visible:ring-0 focus:border-green-600 focus:ring-green-600 transition-all" required />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="reg-phone" className="text-xs font-bold text-slate-500 uppercase">Phone Number</Label>
                        <Input id="reg-phone" name="phone" placeholder="e.g. +254 700 000 000" className="h-11 border-slate-200 focus-visible:ring-0" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-green-700 border-b border-green-100 pb-2">
                      License Details
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="reg-licenseNo" className="text-xs font-bold text-slate-500 uppercase">License Number</Label>
                        <Input id="reg-licenseNo" name="licenseNo" placeholder="e.g. DL-001234" className="h-11 border-slate-200 focus-visible:ring-0" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="reg-licenceExp" className="text-xs font-bold text-slate-500 uppercase">License Expiry</Label>
                        <Input id="reg-licenceExp" name="licenceExp" type="date" className="h-11 border-slate-200 focus-visible:ring-0" required />
                      </div>
                    </div>
                  </div>
                </div>

                <SheetFooter className="p-6 border-t border-slate-100 bg-slate-50/50">
                  <div className="flex w-full items-center gap-3">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsRegisterOpen(false)} 
                      className="flex-1 border-slate-300 text-slate-600 hover:bg-slate-100 h-11"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1 bg-green-700 hover:bg-green-800 h-11 shadow-md font-semibold"
                    >
                      Register Driver
                    </Button>
                  </div>
                </SheetFooter>
              </form>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Staff" value={drivers.length} sub="Verified Operators" icon={<Users className="text-blue-600" />} />
        <StatCard title="Safety Average" value="89%" sub="Fleet Analytics" icon={<Star className="text-amber-500" />} />
        <StatCard title="Assigned" value={drivers.filter(d => d.vehicle).length} sub="Units in Operation" icon={<Tractor className="text-green-600" />} />
        <StatCard title="Alerts" value={drivers.filter(d => d.licenceExp && new Date(d.licenceExp) < new Date()).length} sub="Expired Documents" icon={<AlertCircle className="text-red-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* MAIN TABLE */}
        <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition">
          <CardHeader className="pb-0">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-300" />
              <Input 
                placeholder="Search name, ID, or unit..." 
                className="h-10 w-full pl-9 rounded-xl border-none bg-slate-50 text-xs font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-[500px] overflow-y-auto overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead className="text-xs font-semibold text-slate-500 uppercase sticky top-0 bg-white z-10">
                  <tr>
                    <th className="px-4 py-3 w-40">Driver</th>
                    <th className="px-4 py-3 w-44">Assigned Unit</th>
                    <th className="px-4 py-3 w-24">Performance</th>
                    <th className="px-4 py-3 w-20">Alerts</th>
                    <th className="px-4 py-3 w-28">License</th>
                    <th className="px-4 py-3 w-20 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
{paginatedDrivers.map((driver) => (
                  <tr key={driver.id} className="hover:bg-slate-50/50 transition-all group">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => { setSelectedDriver(driver); setIsEditOpen(true); }}
                          className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center font-bold text-white text-[10px] hover:bg-slate-700 transition flex-shrink-0"
                        >
                          {driver.name.substring(0, 2).toUpperCase()}
                        </button>
                        <p className="text-xs font-bold text-slate-900 truncate max-w-[120px]">{driver.name}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {driver.vehicle ? (
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] font-bold text-green-600 border-green-300 bg-green-50 whitespace-nowrap">
                            {driver.vehicle.make} {driver.vehicle.model}
                          </Badge>
                          <span className="text-[10px] text-slate-400 hidden sm:inline">{driver.vehicle.plateNumber}</span>
                        </div>
                      ) : (
                        <span className="text-[10px] text-slate-400 italic">Unassigned</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                        <Badge className={`text-[9px] font-bold px-2 py-0.5 rounded-lg ${
                          driver.performance > 85 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {driver.performance}%
                        </Badge>
                    </td>
                    <td className="px-4 py-3">
                      {driver._count.alert > 0 ? (
                        <button 
                          onClick={() => { setSelectedDriver(driver); setIsAlertsOpen(true); }}
                          className="flex items-center gap-1 px-2 py-1 bg-red-50 rounded-lg hover:bg-red-100 transition"
                        >
                          <AlertCircle className="h-3 w-3 text-red-500" />
                          <span className="text-[10px] font-bold text-red-600">{driver._count.alert}</span>
                        </button>
                      ) : (
                        <span className="text-[10px] text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                        <p className={`text-[11px] font-bold ${
                          driver.licenceExp && new Date(driver.licenceExp) < new Date() ? 'text-red-500 underline' : 'text-slate-500'
                        }`}>
                          {driver.licenceExp ? new Date(driver.licenceExp).toLocaleDateString() : "—"}
                        </p>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-7 w-7 rounded-lg"
                          onClick={() => { setSelectedDriver(driver); setIsEditOpen(true); }}
                        >
                          <Edit3 className="h-3.5 w-3.5 text-slate-400" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-7 w-7 rounded-lg"
                          onClick={() => { setSelectedDriver(driver); setIsAssignOpen(true); }}
                        >
                          <Link2 className="h-3.5 w-3.5 text-blue-400" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredDrivers.length)} of {filteredDrivers.length} drivers
                </p>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                    className="h-8 px-3 text-xs"
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="h-8 w-8 p-0 text-xs"
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => p + 1)}
                    className="h-8 px-3 text-xs"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* SIDEBAR */}
        <div className="space-y-6">
           <Card className="shadow-sm hover:shadow-md transition">
             <CardHeader>
               <CardTitle className="text-sm font-medium flex items-center gap-2">
                 <TrendingUp className="h-4 w-4 text-green-600" /> Performance Data
               </CardTitle>
             </CardHeader>
             <CardContent>
               <div className="h-40 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={drivers.slice(0, 5)}>
                     <Bar dataKey="performance" radius={[6, 6, 6, 6]}>
                       {drivers.map((e, i) => (
                         <Cell key={i} fill={e.performance > 90 ? '#15803d' : '#cbd5e1'} />
                       ))}
                     </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             </CardContent>
           </Card>

           <Card className="shadow-sm hover:shadow-md transition bg-slate-900 text-white">
             <CardContent className="p-6">
               <div className="p-3 bg-white/10 w-fit rounded-2xl mb-4"><ShieldCheck className="h-5 w-5 text-green-400" /></div>
               <CardTitle className="text-sm font-bold mb-1">Fleet Compliance</CardTitle>
               <p className="text-[11px] text-white/50 mb-6 font-medium">Auto-calculating license validity across {drivers.length} operators.</p>
               <Button className="w-full bg-white text-slate-900 rounded-xl font-bold text-xs h-11 hover:bg-slate-100">Generate Report</Button>
             </CardContent>
           </Card>
        </div>
      </div>

      {/* EDIT DRIVER DIALOG */}
      <Dialog open={isEditOpen} onOpenChange={() => { setIsEditOpen(false); setSelectedDriver(null); }}>
        <DialogContent className="rounded-xl max-w-md">
          <DialogHeader>
            <DialogTitle className="font-bold flex items-center gap-2">
              <Edit3 className="h-4 w-4" /> Edit Driver Details
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditDriver} className="space-y-4 pt-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">Full Name</label>
              <Input 
                name="name" 
                defaultValue={selectedDriver?.name}
                className="rounded-xl h-11 bg-slate-50 border border-slate-200" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">Phone Number</label>
              <Input 
                name="phone" 
                defaultValue={selectedDriver?.phone || ""}
                className="rounded-xl h-11 bg-slate-50 border border-slate-200" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">License Number</label>
              <Input 
                name="licenseNo" 
                defaultValue={selectedDriver?.licenseNo || ""}
                className="rounded-xl h-11 bg-slate-50 border border-slate-200" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">License Expiry</label>
              <Input 
                name="licenceExp" 
                type="date" 
                defaultValue={selectedDriver?.licenceExp ? selectedDriver.licenceExp.split('T')[0] : ""}
                className="rounded-xl h-11 bg-slate-50 border border-slate-200" 
                required 
              />
            </div>
            
            {selectedDriver?.vehicle && (
              <div className="p-3 bg-green-50 rounded-xl border border-green-200">
                <p className="text-xs font-bold text-green-700">Currently Assigned</p>
                <p className="text-sm text-green-800">{selectedDriver.vehicle.make} {selectedDriver.vehicle.model} ({selectedDriver.vehicle.plateNumber})</p>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <Button type="submit" className="flex-1 bg-green-700 h-11 rounded-xl font-bold">Save Changes</Button>
              <Button 
                type="button" 
                variant="destructive"
                className="h-11 rounded-xl font-bold"
                onClick={handleDeleteDriver}
              >
                Delete
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* ASSIGN VEHICLE DIALOG */}
      <Dialog open={isAssignOpen} onOpenChange={() => { setIsAssignOpen(false); setSelectedDriver(null); }}>
        <DialogContent className="rounded-xl max-w-md">
          <DialogHeader>
            <DialogTitle className="font-bold flex items-center gap-2">
              <Link2 className="h-4 w-4 text-blue-600" /> Assign Vehicle
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            {selectedDriver?.vehicle && (
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-200">
                <p className="text-xs font-bold text-orange-700">Current Assignment</p>
                <p className="text-sm text-orange-800">{selectedDriver.vehicle.make} {selectedDriver.vehicle.model} ({selectedDriver.vehicle.plateNumber})</p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="mt-2 text-orange-600 hover:text-orange-700 hover:bg-orange-100"
                  onClick={handleUnassignDriver}
                >
                  <Unlink className="h-3 w-3 mr-1" /> Unassign first
                </Button>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-500">Select Vehicle</label>
              {availableVehicles.length > 0 ? (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {availableVehicles.map(vehicle => (
                    <button
                      key={vehicle.id}
                      onClick={() => handleAssignVehicle(vehicle.id)}
                      disabled={actionLoading}
                      className="w-full p-3 text-left rounded-xl border border-slate-200 hover:border-green-400 hover:bg-green-50 transition disabled:opacity-50"
                    >
                      <p className="text-sm font-bold text-slate-900">{vehicle.make} {vehicle.model}</p>
                      <p className="text-xs text-slate-500">{vehicle.plateNumber} • {vehicle.Type}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center bg-slate-50 rounded-xl">
                  <p className="text-sm text-slate-500">No available vehicles</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ALERTS DIALOG */}
      <Dialog open={isAlertsOpen} onOpenChange={() => { setIsAlertsOpen(false); setSelectedDriver(null); }}>
        <DialogContent className="rounded-xl max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-bold flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" /> Driver Alerts
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 pt-4 max-h-80 overflow-y-auto">
            {selectedDriver?.alert && selectedDriver.alert.length > 0 ? (
              selectedDriver.alert.map(alert => (
                <div 
                  key={alert.id} 
                  className={`p-3 rounded-xl border ${getAlertSeverityColor(alert.severity)}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold">{alert.type}</p>
                      <p className="text-xs mt-1 opacity-80">{alert.message}</p>
                    </div>
                    <span className="text-[10px] font-medium">{alert.severity}</span>
                  </div>
                  <p className="text-[10px] mt-2 opacity-60">
                    {new Date(alert.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-slate-500">No alerts for this driver</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}

function StatCard({ title, value, sub, icon }: any) {
  return (
    <Card className="shadow-sm hover:shadow-md transition">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </CardContent>
    </Card>
  );
}