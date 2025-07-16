import Image from "next/image"

export function DownloadAppBanner() {
  return (
    <section className="w-full bg-[#fdf4e7] py-6 px-4 md:px-12">
      <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px]">
          <Image
            src="/download.png"
            alt="Download Our App - Available on Google Play and App Store"
            layout="fill"
            objectFit="cover"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        {/* Optional accessible label */}
        <span className="sr-only">Download Our App from Google Play and App Store</span>
      </div>
    </section>
  )
}
