"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  MapPin, Zap, Fuel, Gauge, Thermometer, Wrench, 
  AlertTriangle, Activity, Truck, Car, Bus, 
  Tractor, Bike, ArrowRight, ChevronDown, Menu, X, Battery,
  Loader2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const vehicleCategories = [
  { icon: Tractor, name: "Tractors", desc: "Agricultural & heavy machinery", color: "from-green-500 to-green-600" },
  { icon: Truck, name: "Trucks", desc: "Logistics & long-haul transport", color: "from-blue-500 to-blue-600" },
  { icon: Car, name: "Cars", desc: "Executive & utility fleet", color: "from-purple-500 to-purple-600" },
  { icon: Bus, name: "Buses", desc: "Passenger transport", color: "from-amber-500 to-amber-600" },
  { icon: Bike, name: "Motorcycles", desc: "Two-wheelers & quick delivery", color: "from-red-500 to-red-600" },
];

const telematicsData = [
  { icon: MapPin, title: "Location Tracking", desc: "GPS coordinates, route history, geofencing", color: "text-green-600" },
  { icon: Zap, title: "Engine Telematics", desc: "RPM, load, horsepower monitoring", color: "text-amber-600" },
  { icon: Fuel, title: "Fuel Management", desc: "Fuel level, consumption rate, efficiency", color: "text-blue-600" },
  { icon: Gauge, title: "Speed & Movement", desc: "Real-time speed, distance traveled, state", color: "text-purple-600" },
  { icon: Thermometer, title: "Temperature", desc: "Engine temp, coolant temperature", color: "text-red-600" },
  { icon: Battery, title: "Electrical", desc: "Battery voltage, oil pressure", color: "text-slate-600" },
  { icon: Wrench, title: "Maintenance", desc: "Service schedules, alerts, history", color: "text-cyan-600" },
  { icon: AlertTriangle, title: "Alerts", desc: "Speeding, geofence, fuel theft detection", color: "text-orange-600" },
];

const features = [
  { title: "Real-time GPS Tracking", desc: "Monitor vehicle locations live on interactive maps" },
  { title: "OBD/J1939 Telematics", desc: "Deep vehicle diagnostics via standard protocols" },
  { title: "Smart Maintenance", desc: "Automated service scheduling and reminders" },
  { title: "Intelligent Alerts", desc: "Instant notifications for anomalies & violations" },
];

export default function LandingPage() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero']));
  
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [registerError, setRegisterError] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'vehicles', 'data', 'features', 'cta'];
      const newVisible = new Set<string>();
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            newVisible.add(section);
          }
        }
      });
      
      setVisibleSections(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = (section: string) => visibleSections.has(section);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", loginData.email);
      formData.append("password", loginData.password);

      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setLoginModalOpen(false);
        router.push("/dashboard");
      } else {
        setLoginError(result.error || "Login failed");
      }
    } catch (error) {
      setLoginError("Something went wrong");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError("");
    
    if (registerData.password !== registerData.confirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    }
    if (registerData.password.length < 8) {
      setRegisterError("Password must be at least 8 characters");
      return;
    }
    
    setRegisterLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", registerData.name);
      formData.append("email", registerData.email);
      formData.append("password", registerData.password);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setRegisterModalOpen(false);
        setLoginModalOpen(true);
      } else {
        setRegisterError(result.error || "Registration failed");
      }
    } catch (error) {
      setRegisterError("Something went wrong");
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TractorTrack</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#vehicles" className="text-gray-600 hover:text-green-600 font-medium transition">Vehicles</a>
              <a href="#data" className="text-gray-600 hover:text-green-600 font-medium transition">Data</a>
              <a href="#features" className="text-gray-600 hover:text-green-600 font-medium transition">Features</a>
              <button 
                onClick={() => setLoginModalOpen(true)}
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-900/50"
              >
                Login
              </button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button 
                className="p-2 text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#vehicles" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Vehicles</a>
                <a href="#data" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Data</a>
                <a href="#features" className="text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
                <button 
                  onClick={() => { setMobileMenuOpen(false); setLoginModalOpen(true); }}
                  className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-xl text-center"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {loginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setLoginModalOpen(false)}
          />
          <div className="relative bg-white border border-gray-200 p-8 rounded-2xl shadow-2xl w-full max-w-sm mx-4">
            <button 
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
              <p className="text-gray-600 mt-2">Login to your dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="modal-email" className="text-gray-700">Email</Label>
                <Input
                  id="modal-email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  placeholder="name@example.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-password" className="text-gray-700">Password</Label>
                <Input
                  id="modal-password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              {loginError && (
                <p className="text-sm text-red-600 text-center">{loginError}</p>
              )}

              <Button 
                type="submit" 
                disabled={loginLoading}
                className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all"
              >
                {loginLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button className="text-green-600 hover:underline" onClick={() => { setLoginModalOpen(false); setRegisterModalOpen(true); }}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}

      {registerModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setRegisterModalOpen(false)}
          />
          <div className="relative bg-white border border-gray-200 p-8 rounded-2xl shadow-2xl w-full max-w-sm mx-4">
            <button 
              onClick={() => setRegisterModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Create an Account</h2>
              <p className="text-gray-600 mt-2">Fill in your details to get started</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reg-name" className="text-gray-700">Full Name</Label>
                <Input
                  id="reg-name"
                  type="text"
                  value={registerData.name}
                  onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                  placeholder="John Doe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-email" className="text-gray-700">Email</Label>
                <Input
                  id="reg-email"
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                  placeholder="name@example.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-password" className="text-gray-700">Password</Label>
                <Input
                  id="reg-password"
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-confirm-password" className="text-gray-700">Confirm Password</Label>
                <Input
                  id="reg-confirm-password"
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              {registerError && (
                <p className="text-sm text-red-600 text-center">{registerError}</p>
              )}

              <Button 
                type="submit" 
                disabled={registerLoading}
                className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-semibold transition-all"
              >
                {registerLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button className="text-green-600 hover:underline" onClick={() => { setRegisterModalOpen(false); setLoginModalOpen(true); }}>
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-green-700">Vehicle Telematics Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"> Fleet Tracking</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Monitor, analyze, and optimize your entire fleet in real-time. 
            From tractors to trucks, get complete visibility into vehicle telematics, 
            maintenance, and operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setLoginModalOpen(true)}
              className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-green-900/50 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#features" 
              className="px-8 py-4 border-2 border-gray-300 hover:border-green-500 text-gray-700 font-semibold rounded-xl transition-all hover:bg-gray-50"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Vehicle Types" },
              { value: "8+", label: "Data Points" },
              { value: "24/7", label: "Real-time" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      <section id="vehicles" className="py-24 bg-gray-50">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible('vehicles') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vehicle Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for all types of vehicles in your fleet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {vehicleCategories.map((vehicle, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300 cursor-pointer bg-white"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${vehicle.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <vehicle.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{vehicle.name}</h3>
                <p className="text-sm text-gray-600">{vehicle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="data" className="py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible('data') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Telematics Data</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep insights into every aspect of your vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {telematicsData.map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gray-50">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your fleet efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-200">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-24 bg-gradient-to-br from-green-600 to-green-700">
        <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Fleet?</h2>
          <p className="text-xl text-green-100 mb-10">
            Get real-time insights, optimize operations, and reduce costs with TractorTrack
          </p>
          <button 
            onClick={() => setLoginModalOpen(true)}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-gray-100 text-green-700 font-bold rounded-xl transition-all hover:shadow-2xl hover:shadow-green-900/50"
          >
            Login to Dashboard
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">TractorTrack</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 TractorTrack. Vehicle Telematics Platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}