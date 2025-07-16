import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function TrustedSourceAndPriceList() {
  const priceRanges = [
    "Below ₹ 5,000",
    "Between ₹ 5000 & ₹ 10,000",
    "Between ₹ 10,000 & ₹ 15,000",
    "Between ₹ 15,000 & ₹ 20,000",
    "Between ₹ 20,000 & ₹ 30,000",
    "Between ₹ 30,000 & ₹ 40,000",
    "Between ₹ 40,000 & ₹ 50,000",
    "Above ₹ 50,000",
  ]

  return (
    <section className="p-6 bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section: Description and Image */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md group hover:shadow-xl transition-shadow duration-300">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            Mobixpress - Trusted Source for Premium Pre-owned Mobiles.
          </h2>
          <p className="text-gray-700 mb-4 text-sm group-hover:text-gray-800 transition-colors duration-300">
            Mobixpress.in is an e-commerce expert and a leading online platform for buying and selling pre-owned mobile
            phones. We are committed to providing a seamless and trustworthy experience for our customers. Our rigorous
            quality checks ensure that every device meets our high standards.
          </p>
          <p className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">
            With a wide range of smartphones at competitive prices, Mobixpress.in offers great value for money. Our
            dedicated customer service team is always ready to assist you with any queries or concerns. Join our growing
            community and get access to exclusive deals and promotions.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/phone.png?height=250&width=350"
            width={350}
            height={250}
            alt="Mobixpress Devices"
            className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Right Section: Price List */}
      <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Price List</h3>
          <div className="grid gap-3">
            {priceRanges.map((range, index) => (
              <div key={index} className="group/item">
                <Input
                  type="text"
                  value={range}
                  readOnly
                  className="bg-gray-50 border-gray-200 cursor-pointer transition-all duration-300 
                           hover:bg-blue-50 hover:border-blue-300 hover:shadow-md hover:scale-[1.02]
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           group-hover/item:translate-x-2"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}