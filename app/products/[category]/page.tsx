import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingPrompt } from "@/components/floating-prompt" // Updated import path
import { FilterSidebar } from "@/components/filter-sidebar" // Updated import path
import { ProductGridSection } from "@/components/product-grid-section" // Updated import path

export default function CategoryProductPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1) // Capitalize category name

  // Dummy data for Honor products based on the screenshot
  const honorProducts = [
    {
      name: "HONOR 70 5G (8/256) GB, GREEN GLOBAL",
      discount: "45%",
      price: "₹ 17999",
      oldPrice: "₹ 22000",
      minXpressPrice: "₹ 17699",
      quality: "Mint",
      imageSrc: "/placeholder.svg?height=200&width=200",
      linkHref: `/products/honor/honor-70-5g-green-global`,
    },
    {
      name: "HONOR 200 5G (8/256) GB, BLACK",
      discount: "57%",
      price: "₹ 17299",
      oldPrice: "₹ 27000",
      minXpressPrice: "₹ 17299",
      quality: "Mint",
      imageSrc: "/placeholder.svg?height=200&width=200",
      linkHref: `/products/honor/honor-200-5g-black`,
    },
    {
      name: "HONOR 90 (12/512) GB, EMERALD GREEN",
      discount: "62%",
      price: "₹ 18999",
      oldPrice: "₹ 30000",
      minXpressPrice: "₹ 18999",
      quality: "Mint",
      imageSrc: "/placeholder.svg?height=200&width=200",
      linkHref: `/products/honor/honor-90-emerald-green`,
    },
    {
      name: "HONOR X9B 5G (8/256) GB, MIDNIGHT BLACK IND",
      discount: "40%",
      price: "₹ 18499",
      oldPrice: "₹ 25000",
      minXpressPrice: "₹ 18499",
      quality: "Super Mint",
      imageSrc: "/placeholder.svg?height=200&width=200",
      linkHref: `/products/honor/honor-x9b-5g-midnight-black`,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          <FilterSidebar />
          <ProductGridSection title={`${categoryName} Products`} products={honorProducts} />
        </div>
      </main>
      <FloatingPrompt />
      <Footer />
    </div>
  )
}
