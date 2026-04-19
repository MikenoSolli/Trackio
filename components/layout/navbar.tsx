"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Vehicles", href: "/vehicles" },
  { name: "Drivers", href: "/driver" },
  { name: "Reports", href: "/reports" },
  { name: "Trips", href: "/trips" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">

        {/* Logo */}
        <Link href="/dashboard" className="text-xl font-bold">
          Dashboard
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      pathname === link.href
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Logout */}
        <div className="hidden md:block">
          <Button><Link href="/logout">Logout </Link></Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
           
          <Button className="w-full"><Link href="/logout">Logout </Link></Button>
          
        </div>
      )}
    </nav>
  )
}