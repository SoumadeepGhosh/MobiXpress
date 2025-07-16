"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingPrompt() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3 text-sm border border-gray-200 z-50">
      <span role="img" aria-label="sad face emoji">
        😔
      </span>
      <div>
        <p className="font-semibold">Have you lost your phone?</p>
        <p className="text-gray-600">
          Don't worry{" "}
          <Button variant="link" className="p-0 h-auto text-red-600 hover:underline">
            Complain Now
          </Button>
        </p>
      </div>
      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsVisible(false)}>
        <X className="h-4 w-4 text-gray-500" />
        <span className="sr-only">Dismiss</span>
      </Button>
    </div>
  )
}
