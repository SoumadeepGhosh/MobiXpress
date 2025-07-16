'use client'
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, LayoutGrid, Bell, User, Flame, ShoppingCart, Heart, Menu, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "MobiXpress Store", href: "/our_branch" },
    { name: "My Order", href: "/orders" },
    { name: "Exchange", href: "/exchange" },
    { name: "Accessories", href: "/accessories" },
    { name: "HOT DEALS", href: "/deals", isSpecial: true }
  ]

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-lg">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs py-1 px-4 flex items-center justify-between">
        <div className="bg-white text-black font-extrabold px-2 py-[2px] text-xs tracking-wide shadow-sm rounded-sm">
          <span className="border-b-2 border-yellow-400 animate-pulse">
            MONSOON MAI HOT OFFER, 70% OFF
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Link href="/store" className="hover:underline text-white transition-all duration-200">
            Visit MobiXpress Store
          </Link>
          <Button
            size="sm"
            className="bg-yellow-400 hover:bg-yellow-500 text-red-800 font-bold px-2 py-1 text-xs rounded-full shadow-md transition-all duration-200 transform hover:scale-105"
          >
            Click Now
          </Button>
          <span className="text-white text-[10px] opacity-80">T&C apply</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/90 backdrop-blur-sm py-3 px-6 flex items-center justify-between border-b border-gray-200/50">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 w-1/3">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/logo.png" // Update this path to match your logo file location
                alt="MobiXpress Logo"
                width={120}
                height={40}
                className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg px-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for products, brands, and more..."
              className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100/80 backdrop-blur-sm border border-gray-300/50 focus:border-red-500 focus:bg-white/90 text-sm transition-all duration-200"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white rounded-full h-8 w-8 p-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 w-1/3 justify-end">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-8 w-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 text-gray-600" />
            ) : (
              <Menu className="h-4 w-4 text-gray-600" />
            )}
          </Button>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative group h-8 w-8">
              <Heart className="h-4 w-4 text-gray-600 group-hover:text-red-500 transition-colors" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-3 w-3 p-0 text-[8px] rounded-full"
              >
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="relative group h-8 w-8">
              <ShoppingCart className="h-4 w-4 text-gray-600 group-hover:text-red-500 transition-colors" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-3 w-3 p-0 text-[8px] rounded-full"
              >
                5
              </Badge>
            </Button>

            <Button variant="ghost" size="icon" className="relative group h-8 w-8">
              <Bell className="h-4 w-4 text-gray-600 group-hover:text-red-500 transition-colors" />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-3 w-3 p-0 text-[8px] rounded-full"
              >
                01
              </Badge>
            </Button>

            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-md transition-all duration-200 transform hover:scale-105">
              <User className="h-4 w-4 mr-1" />
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/70 backdrop-blur-sm py-2 px-6 border-b border-gray-200/50 shadow-sm">
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center space-x-6 text-sm font-medium">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  className={`transition-all duration-200 ${
                    item.isSpecial 
                      ? "text-red-600 flex items-center space-x-1 hover:text-red-700 font-bold" 
                      : "text-gray-700 hover:text-red-600 hover:scale-105"
                  }`}
                >
                  {item.isSpecial && <Flame className="text-red-600 h-4 w-4 animate-pulse" />}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col space-y-2 text-sm font-medium py-3">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                      item.isSpecial 
                        ? "text-red-600 bg-red-50 flex items-center space-x-2 font-bold" 
                        : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.isSpecial && <Flame className="text-red-600 h-4 w-4" />}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              
              {/* Mobile Action Buttons */}
              <li className="pt-3 border-t">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="relative h-8 w-8">
                    <Heart className="h-4 w-4 text-gray-600" />
                    <Badge variant="destructive" className="absolute -top-1 -right-1 h-3 w-3 p-0 text-[8px] rounded-full">3</Badge>
                  </Button>
                  <Button variant="ghost" size="icon" className="relative h-8 w-8">
                    <ShoppingCart className="h-4 w-4 text-gray-600" />
                    <Badge variant="destructive" className="absolute -top-1 -right-1 h-3 w-3 p-0 text-[8px] rounded-full">5</Badge>
                  </Button>
                  <Button variant="ghost" size="icon" className="relative h-8 w-8">
                    <Bell className="h-4 w-4 text-gray-600" />
                    <Badge variant="destructive" className="absolute -top-1 -right-1 h-3 w-3 p-0 text-[8px] rounded-full">01</Badge>
                  </Button>
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium flex-1">
                    <User className="h-4 w-4 mr-1" />
                    Login
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}