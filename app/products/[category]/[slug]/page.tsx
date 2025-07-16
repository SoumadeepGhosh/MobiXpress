import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingPrompt } from "@/components/floating-prompt"
import { ProductDetails } from "@/components/product-details"
import { DescriptionTabs } from "@/components/description-tabs"
import { ProductGridSection } from "@/components/product-grid-section"

interface PageProps {
  params: {
    category: string
    slug: string
  }
}

export default function SingleProductPage({ params: _params }: PageProps) {
  const productData = {
    name: "HONOR 70 5G (8/256) GB, GREEN GLOBAL",
    price: "₹ 17999",
    oldPrice: "₹ 22000",
    discount: "45%",
    minXpressPrice: "₹ 17699",
    ramRom: ["8/256 GB", "6/128 GB"],
    colors: ["Green Global", "Black", "Emerald Green"],
    quantity: 5,
    quality: "Mint",
    age: "10-11 Months",
    warranty: "6 Months Warranty",
    imageSrc: "/placeholder.svg?height=500&width=500",
    thumbnailSrcs: Array(5).fill("/placeholder.svg?height=100&width=100"),
  }

  const relatedProducts = [
    {
      name: "HONOR 70 5G (8/256) GB, GREEN GLOBAL",
      discount: "25%",
      price: "₹ 17999",
      oldPrice: "₹ 22000",
      quality: "Mint",
      imageSrc: "/placeholder.svg?height=150&width=150",
      linkHref: `/products/honor/honor-70-5g-green-global`,
    },
    {
      name: "REALME NARZO 60X 5G (6/128) GB, NEBULA...",
      discount: "25%",
      price: "₹ 12999",
      oldPrice: "₹ 17000",
      quality: "Excellent",
      imageSrc: "/placeholder.svg?height=150&width=150",
      linkHref: `/products/realme/realme-narzo-60x-5g`,
    },
    {
      name: "MOTO G52 5G (6/128) GB, OLIVE...",
      discount: "20%",
      price: "₹ 13499",
      oldPrice: "₹ 17000",
      quality: "Good",
      imageSrc: "/placeholder.svg?height=150&width=150",
      linkHref: `/products/moto/moto-g52-5g`,
    },
  ]

  const productDescription =
    "The HONOR 70 5G is a powerful smartphone designed for exceptional performance and stunning visuals. It features a vibrant display, advanced camera system, and a long-lasting battery, making it perfect for everyday use and entertainment."

  const productSpecifications =
    "Display: 6.67-inch OLED, 120Hz refresh rate. Processor: Snapdragon 778G+ 5G. RAM: 8GB. Storage: 256GB. Rear Camera: 54MP + 50MP + 2MP. Front Camera: 32MP. Battery: 4800mAh with 66W fast charging."

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductDetails product={productData} />
        <DescriptionTabs description={productDescription} specifications={productSpecifications} />
        <ProductGridSection title="Related Products" products={relatedProducts} viewMoreLink="#" />
      </main>
      <FloatingPrompt />
      <Footer />
    </div>
  )
}
