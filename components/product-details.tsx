import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Star, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProductDetailsProps {
  product: {
    name: string
    price: string
    oldPrice: string
    discount: string
    minXpressPrice: string
    ramRom: string[]
    colors: string[]
    quantity: number
    quality: string
    age: string
    warranty: string
    imageSrc: string
    thumbnailSrcs: string[]
  }
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
      {/* Product Image Gallery */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md mb-4 relative">
          <Image
            src={product.imageSrc || "/placeholder.svg"}
            width={500}
            height={500}
            alt="Product Main Image"
            className="rounded-lg object-cover aspect-square border"
          />
          <Badge
            variant="destructive"
            className="absolute top-2 left-2 bg-green-500 text-white text-sm font-bold px-2 py-1 rounded-sm"
          >
            {product.discount} OFF
          </Badge>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {product.thumbnailSrcs.map((src, i) => (
            <Image
              key={i}
              src={src || "/placeholder.svg"}
              width={100}
              height={100}
              alt={`Product Thumbnail ${i + 1}`}
              className="rounded-md object-cover aspect-square border cursor-pointer hover:border-red-500 transition-colors"
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="grid gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-baseline space-x-3 mb-4">
            <span className="text-4xl font-bold text-red-600">{product.price}</span>
            <span className="text-lg text-gray-500 line-through">{product.oldPrice}</span>
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            MIN.XPRESS: <span className="text-red-600">{product.minXpressPrice}</span>
          </p>
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
        </div>

        {/* Product Attributes */}
        <div className="grid gap-4">
          <div>
            <label htmlFor="ram-rom" className="block text-sm font-medium text-gray-700 mb-2">
              RAM/ROM
            </label>
            <Select defaultValue={product.ramRom[0]}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select RAM/ROM" />
              </SelectTrigger>
              <SelectContent>
                {product.ramRom.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
              Color
            </label>
            <Select defaultValue={product.colors[0]}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Color" />
              </SelectTrigger>
              <SelectContent>
                {product.colors.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <Select defaultValue={product.quantity.toString()}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(product.quantity)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Quality:</span> {product.quality}
            </div>
            <div>
              <span className="font-semibold">Age:</span> {product.age}
            </div>
            <div className="col-span-2">
              <span className="font-semibold">Warranty:</span> {product.warranty}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" className="flex-1 bg-red-600 hover:bg-red-700 text-white">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex-1 border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
          >
            <Heart className="w-5 h-5 mr-2" />
            Add to Wishlist
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Button variant="outline" className="flex-1 border-green-500 text-green-500 hover:bg-green-50 bg-transparent">
            Enter Pincode
          </Button>
          <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">Buy Now</Button>
        </div>
      </div>
    </div>
  )
}
