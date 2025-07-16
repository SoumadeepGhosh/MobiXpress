import Image from "next/image"
import { Card } from "@/components/ui/card"

export function HeroBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 p-4 bg-white">
      
      {/* Promo Banner */}
      <Card className="relative overflow-hidden rounded-xl shadow-md h-[250px] lg:h-[400px] group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
        <Image
          src="https://billing.mobixpress.in/uploads/banner/Picsart_25-06-18_15-55-51-636.jpg"
          alt="Monsoon Season Sale"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Card>

      {/* Last Sold Product */}
      <Card className="relative bg-white border border-red-500 rounded-xl shadow-md flex flex-col items-center justify-center text-center p-4 h-[250px] lg:h-[400px] group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-red-600">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110">
          LAST SOLD PRODUCT
        </div>

        <div className="flex-1 flex flex-col items-center justify-center mt-6">
          <div className="w-20 h-20 lg:w-28 lg:h-28 relative mb-3 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/buds.jpg"
              fill
              alt="ONEPLUS BUDS 2R"
              className="object-contain transition-transform duration-300 group-hover:rotate-12"
            />
          </div>

          <h3 className="text-sm lg:text-lg font-semibold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-red-600">
            ONEPLUS BUDS 2R
          </h3>
          <p className="text-xs lg:text-sm text-gray-500 mb-2 transition-colors duration-300 group-hover:text-gray-700">MALDA</p>
          <p className="text-sm lg:text-base font-bold text-white bg-red-600 px-3 py-1 rounded transition-all duration-300 group-hover:bg-red-700 group-hover:scale-105">
            ₹ 1100
          </p>
        </div>
      </Card>
    </div>
  )
}