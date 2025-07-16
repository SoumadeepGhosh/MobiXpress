import Link from "next/link"
import { ProductCard } from "@/components/product-card" // Updated import path
import { ArrowRight } from "lucide-react"

interface Product {
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

interface ProductGridSectionProps {
  title: string
  products: Product[]
  viewMoreLink?: string
  showNavigation?: boolean // For Deal of the Day arrows
}

export function ProductGridSection({ title, products, viewMoreLink, showNavigation = false }: ProductGridSectionProps) {
  return (
    <section className="p-6 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {showNavigation && (
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
        {viewMoreLink && (
          <Link href={viewMoreLink} className="flex items-center text-red-600 hover:underline">
            View More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}
