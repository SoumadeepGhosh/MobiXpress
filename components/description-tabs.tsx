"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface DescriptionTabsProps {
  description: string
  specifications: string
}

export function DescriptionTabs({ description, specifications }: DescriptionTabsProps) {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <div className="flex border-b border-gray-200 mb-4">
        <Button
          variant="ghost"
          className={`rounded-none border-b-2 ${
            activeTab === "description" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"
          } hover:text-red-600`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </Button>
        <Button
          variant="ghost"
          className={`rounded-none border-b-2 ${
            activeTab === "specifications" ? "border-red-600 text-red-600" : "border-transparent text-gray-600"
          } hover:text-red-600`}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </Button>
      </div>
      <div className="prose max-w-none text-gray-700">
        {activeTab === "description" && <p>{description}</p>}
        {activeTab === "specifications" && <p>{specifications}</p>}
      </div>
    </div>
  )
}
