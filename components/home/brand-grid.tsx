import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface BrandCardProps {
  name: string
  price: string
  imageSrc: string
}

function BrandCard({ name, price, imageSrc }: BrandCardProps) {
  return (
    <Link href="#" className="block">
      <Card className="flex items-center p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
        <Image
          src={imageSrc || "/placeholder.svg"}
          width={60}
          height={60}
          alt={`${name} phone`}
          className="mr-3 rounded-md"
        />
        <div>
          <h3 className="text-md font-semibold text-gray-800">{name}</h3>
          <p className="text-lg font-bold text-red-600">{price}</p>
        </div>
      </Card>
    </Link>
  )
}

export function BrandGrid() {
  const brands = [
    { name: "HONOR", price: "₹ 1999", imageSrc: "/honor.png?height=60&width=60" },
    { name: "IQOO", price: "₹ 2999", imageSrc: "/iqoo.png?height=60&width=60" },
    { name: "MI", price: "₹ 699", imageSrc: "/MI.png?height=60&width=60" },
    { name: "NOKIA", price: "₹ 7999", imageSrc: "/nokia.png?height=60&width=60" },
    { name: "INFINIX", price: "₹ 1499", imageSrc: "/infinix.png?height=60&width=60" },
    { name: "LAVA", price: "₹ 1999", imageSrc: "/lava.png?height=60&width=60" },
    { name: "ONEPLUS", price: "₹ 4499", imageSrc: "/Oneplus.png?height=60&width=60" },
    { name: "NOTHING", price: "₹ 9799", imageSrc: "/nothing.png?height=60&width=60" },
  ]

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
      </div>
    </div>
  )
}
