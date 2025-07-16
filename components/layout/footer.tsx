import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Headphones, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Image
                  src="/logo.png" // Update this path to match your logo file location
                  alt="MobiXpress Logo"
                  width={160}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Mobixpress is the largest mobile store in West Bengal, offering a
              wide range of smartphones at competitive prices. The store ensures
              customer satisfaction by providing warranty options, device
              authenticity checks, and affordable pricing. Mobixpress also offers
              great exchange deals, allowing customers to upgrade their devices
              conveniently.
            </p>
            
            {/* Contact Section */}
            <div className="flex items-start gap-3 pt-3">
              <div className="bg-gray-100 p-2 rounded-full">
                <Headphones className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  Have any question?
                </p>
                <p className="text-red-600 font-semibold text-lg">
                  8017999888
                </p>
              </div>
              <Link
                href="https://wa.me/918017999888"
                className="bg-green-500 text-white px-4 py-2 text-sm rounded-md hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
              >
                💬 Live Chat
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">
              Quick Link
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "About Us",
                "Careers", 
                "Contact Us",
                "Refund & Return Policy",
                "Privacy Policy",
                "Terms & Condition",
                "Shipping Policy",
                "Condition Policy",
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locate Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">
              Locate Us
            </h3>
            <div className="flex items-start gap-3 mb-6">
              <div className="bg-red-100 p-2 rounded-full">
                <MapPin className="w-4 h-4 text-red-600" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                M-1/81, H ROAD, ANADAPURI, ANANDADEEP APARTMENT, ANANDPURI,
                BARRACKPORE, NORTH TWENTY FOUR PARGANAS, WEST BENGAL, 700122
              </p>
            </div>

            <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
              Follow Us
            </h3>
            <div className="flex gap-3 mb-4">
              <Link
                href="#"
                className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
              </Link>
              <Link
                href="#"
                className="bg-pink-100 p-2 rounded-lg hover:bg-pink-200 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </Link>
              <Link
                href="#"
                className="bg-red-100 p-2 rounded-lg hover:bg-red-200 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5 text-red-600" />
              </Link>
            </div>
            <p className="text-xs text-gray-500">V 2.0</p>
          </div>

          {/* Payment Methods */}
          <div className="hidden lg:flex flex-col justify-end items-start space-y-4">
            <span className="text-sm font-medium text-gray-700">We Accept:</span>
            <div className="bg-gray-50 p-3 rounded-lg">
              <Image
                src="/rupay.png"
                alt="We Accept: RuPay, Visa, Mastercard, UPI"
                width={200}
                height={32}
                className="h-auto w-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Image
                  src="/logo.png" // Update this path to match your logo file location
                  alt="MobiXpress Logo"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <span className="text-sm text-gray-600">© 2025 All Rights Reserved.</span>
            </div>
            
            {/* Mobile Payment Methods */}
            <div className="flex lg:hidden">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Image
                  src="/rupay.png"
                  alt="We Accept: RuPay, Visa, Mastercard, UPI"
                  width={150}
                  height={24}
                  className="h-auto w-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}