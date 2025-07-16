import Image from "next/image";

export function BookDreamPhoneBanner() {
  return (
    <section className="p-6 bg-gray-50">
      <div className="group relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl">
      
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px]">
          <Image
            src="/book.png" // Using the provided screenshot for the banner
            alt="Book Your Dream Phone"
            layout="fill"
            objectFit="cover"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
