import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  name: string
  discount: string
  price: string
  oldPrice: string
  quantityLeft?: number
  quality?: string
  imageSrc: string
  minXpressPrice?: string
  linkHref: string
}

export function ProductCard({
  name,
  discount,
  price,
  oldPrice,
  quantityLeft,
  quality,
  imageSrc,
  minXpressPrice,
  linkHref,
}: ProductCardProps) {
  return (
    <Link href={linkHref} className="block">
      <Card className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
        <div className="absolute top-2 left-2">
          <Badge variant="destructive" className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
            {discount} OFF
          </Badge>
        </div>
        <CardContent className="p-4 flex flex-col items-center text-center">
          <Image src={imageSrc || "/placeholder.svg"} width={150} height={150} alt={name} className="mb-4 rounded-md" />
          <h3 className="text-md font-semibold text-gray-800 mb-1 line-clamp-2">{name}</h3>
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-xl font-bold text-red-600">{price}</span>
            <span className="text-sm text-gray-500 line-through">{oldPrice}</span>
          </div>
          {minXpressPrice && (
            <div className="text-sm text-gray-700 font-semibold mb-2">
              MIN.XPRESS: <span className="text-red-600">{minXpressPrice}</span>
            </div>
          )}
          {quantityLeft !== undefined && (
            <div className="text-xs text-gray-600 mb-1">
              <span className="font-semibold">left {quantityLeft}</span>
            </div>
          )}
          {quality && (
            <div className="text-xs text-gray-500">
              <span>Quality: {quality}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
