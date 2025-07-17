"use client"

import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Heart, Star } from "lucide-react"
import { FloatingPrompt } from "@/components/floating-prompt"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg my-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md mb-4">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Product Main Image"
                className="rounded-lg object-cover aspect-square border"
                priority
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?height=100&width=100`}
                  width={100}
                  height={100}
                  alt={`Product Thumbnail ${i}`}
                  className="rounded-md object-cover aspect-square border cursor-pointer hover:border-red-500 transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                REDMI 14C 5G (4/128) GB, STARDUST BLACK
              </h1>
              <div className="flex items-center gap-1 mb-4">
                <div className="flex items-center gap-0.5">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                  <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                </div>
                <span className="text-sm text-gray-600">(120 Reviews)</span>
              </div>
              <div className="flex items-baseline space-x-3 mb-4">
                <span className="text-4xl font-bold text-red-600">₹ 12,999</span>
                <span className="text-lg text-gray-500 line-through">₹ 19,000</span>
                <span className="text-lg font-semibold text-green-600">32% OFF</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Experience lightning-fast performance with the REDMI 14C 5G. Featuring a powerful processor,
                stunning display, and long-lasting battery, it&rsquo;s designed for seamless multitasking and immersive entertainment.
              </p>
            </div>

            <div className="grid gap-4">
              {/* Color/Variant Selection */}
              <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <Select defaultValue="stardust-black">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stardust-black">Stardust Black</SelectItem>
                    <SelectItem value="ocean-blue">Ocean Blue</SelectItem>
                    <SelectItem value="mint-green">Mint Green</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Storage Selection */}
              <div>
                <label htmlFor="storage" className="block text-sm font-medium text-gray-700 mb-2">
                  Storage
                </label>
                <Select defaultValue="128gb">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Storage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="64gb">64 GB</SelectItem>
                    <SelectItem value="128gb">128 GB</SelectItem>
                    <SelectItem value="256gb">256 GB</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity Selector */}
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <SelectItem key={qty} value={qty.toString()}>
                        {qty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-red-600 text-red-600 hover:bg-red-50"
              >
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </main>
      <FloatingPrompt />
      <Footer />
    </div>
  )
}
