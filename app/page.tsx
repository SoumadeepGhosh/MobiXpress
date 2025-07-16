import { Header } from "@/components/layout/header"
import { HeroBanner } from "@/components/home/hero-banner"
import { BrandGrid } from "@/components/home/brand-grid"
import { TrendingProducts } from "@/components/home/trending-products" // Re-introduced and updated import path
import { ProductGridSection } from "@/components/product-grid-section" // Updated import path
import { BookDreamPhoneBanner } from "@/components/banners/book-dream-phone-banner"
import { DownloadAppBanner } from "@/components/banners/download-app-banner"
import { TrustedSourceAndPriceList } from "@/components/home/trusted-source-and-price-list"
import { OurBranch } from "@/components/home/our-branch"
import { FloatingPrompt } from "@/components/floating-prompt" // Updated import path
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  const dealOfTheDayProducts = [
    {
      name: "ONEPLUS NORD CE 3 LITE 5G (8/128) GB, PASTEL...",
      discount: "25%",
      price: "₹ 14499",
      oldPrice: "₹ 19000",
      imageSrc: "/ce3.png",
      linkHref: `/products/oneplus/oneplus-nord-ce-3-lite-5g`,
    },
    {
      name: "VIVO V30 5G (8/256) GB, PEACOCK GREEN",
      discount: "20%",
      price: "₹ 27999",
      oldPrice: "₹ 35000",
      imageSrc: "/V30.png",
      linkHref: `/products/vivo/vivo-v30-5g-green`,
    },
    {
      name: "OPPO A12 (3/32) GB, BLACK",
      discount: "15%",
      price: "₹ 7999",
      oldPrice: "₹ 9500",
      imageSrc: "/A12.png",
      linkHref: `/products/oppo/oppo-a12`,
    },
  ]

  const hotDealProducts = [
    {
      name: "SAMSUNG GALAXY S24 5G (8/256) GB, ONYX BLACK",
      discount: "20%",
      price: "₹ 72999",
      oldPrice: "₹ 90000",
      imageSrc: "/s24.png",
      linkHref: `/products/samsung/samsung-galaxy-s24-5g`,
    },
    {
      name: "MOTOROLA EDGE 50 FUSION 5G (8/256) GB, PANTONE...",
      discount: "18%",
      price: "₹ 25499",
      oldPrice: "₹ 31000",
      imageSrc: "/edge50.png",
      linkHref: `/products/motorola/motorola-edge-50-fusion-5g`,
    },
    {
      name: "VIVO V30 5G (8/256) GB, LUSH PURPLE",
      discount: "22%",
      price: "₹ 29999",
      oldPrice: "₹ 38000",
      imageSrc: "/V30.png",
      linkHref: `/products/vivo/vivo-v30-5g-purple`,
    },
    {
      name: "OPPO F25 5G (8/256) GB, GOLD PURPLE",
      discount: "15%",
      price: "₹ 22999",
      oldPrice: "₹ 27000",
      imageSrc: "/f25.png",
      linkHref: `/products/oppo/oppo-f25-5g`,
    },
  ]

  const recommendedProducts = [
    {
      name: "REALME NARZO 60X 5G (6/128) GB, NEBULA...",
      discount: "25%",
      price: "₹ 12999",
      oldPrice: "₹ 17000",
      imageSrc: "/narxo60x.png",
      linkHref: `/products/realme/realme-narzo-60x-5g`,
    },
    {
      name: "MOTO G52 5G (6/128) GB, OLIVE...",
      discount: "20%",
      price: "₹ 13499",
      oldPrice: "₹ 17000",
      imageSrc: "/motog52.png",
      linkHref: `/products/moto/moto-g52-5g`,
    },
    {
      name: "SAMSUNG 25W POWER ADAPTER...",
      discount: "15%",
      price: "₹ 1999",
      oldPrice: "₹ 2350",
      imageSrc: "/24w.png",
      linkHref: `/products/samsung/samsung-25w-adapter`,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroBanner />
        <BrandGrid />
        <TrendingProducts /> {/* Using the re-introduced TrendingProducts component */}
        <ProductGridSection title="Deal Of The Day" products={dealOfTheDayProducts} showNavigation={true} />
        <BookDreamPhoneBanner />
        <ProductGridSection title="Hot Deal" products={hotDealProducts} viewMoreLink="#" />
        <DownloadAppBanner />
        <ProductGridSection title="Recommended Product" products={recommendedProducts} viewMoreLink="#" />
        <TrustedSourceAndPriceList />
        <OurBranch />
      </main>
      <FloatingPrompt />
      <Footer />
    </div>
  )
}
