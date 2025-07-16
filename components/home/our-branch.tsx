import Image from "next/image"
import { MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface BranchCardProps {
  name: string
  imageSrc: string
  address: string
  phone: string
  email: string
  delivery: string
  cash: string
  openTime: string
  status: string
}

function BranchCard({
  name,
  imageSrc,
  address,
  phone,
  email,
  delivery,
  cash,
  openTime,
  status,
}: BranchCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border hover:shadow-xl transition duration-300">
      <div className="relative h-52 w-full">
        <Image
          src={imageSrc }
          alt={name}
          layout="fill"
          objectFit="cover"
          className="object-cover object-center"
        />
        {/* Status & Time Overlay */}
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow">
          {status}
        </div>
        <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded shadow flex items-center gap-1">
          <Clock className="w-4 h-4" /> {openTime}
        </div>
      </div>

      <CardContent className="p-4 space-y-2 text-sm">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex items-start gap-2 text-gray-700">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
          <p>{address}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <p>{phone}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Mail className="w-4 h-4 flex-shrink-0" />
          <p>{email}</p>
        </div>
        <div className="pt-2 text-gray-600">
          <p>
            <strong>Cash on Delivery:</strong> {cash}
          </p>
          <p>
            <strong>Delivery:</strong> {delivery}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function OurBranch() {
  const branches = [
    {
      name: "BANDEL",
      imageSrc: "/bandel.png",
      address: "BANDEL BALIR MORE, OPPOSITE WATER TANK, HOOGHLY, West Bengal",
      phone: "6289038250",
      email: "mobixpressbandel@gmail.com",
      delivery: "No",
      cash: "No",
      openTime: "10:30:00 To 21:30:00",
      status: "Open",
    },
    {
      name: "KARIMPUR",
      imageSrc: "/karimpur.png",
      address:
        "KARIMPUR NEW BUS STAND, REGULATED MARKET, ROOM NO F21 NADIA, West Bengal",
      phone: "9641112597",
      email: "amithasan051@gmail.com",
      delivery: "No",
      cash: "No",
      openTime: "10:30:00 To 21:30:00",
      status: "Open",
    },
  ]

  return (
    <section className="py-8 px-4 md:px-10 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          <span className="text-red-600 italic">Our</span> Branch
        </h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {branches.map((branch, index) => (
          <BranchCard key={index} {...branch} />
        ))}
      </div>
    </section>
  )
}
