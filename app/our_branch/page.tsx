'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Search } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const BranchLocator = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const branches = [
    {
      id: 1,
      name: 'BARUIPUR',
      location: 'BARUIPUR, NEAR RAILWAY PLATFORM 1 RAIL MAIDAN SOUTH 24 PARGANAS West Bengal',
      phone: '9382922986',
      email: 'masudmolla84136@gmail.com',
      timing: '10:30:00 To 21:30:00',
      status: 'Closed',
      image: '/baruipur.png',
      codEnabled: false
    },
    {
      id: 2,
      name: 'SANTIPUR',
      location: 'BAIGACHI MORE SANTIPUR NADIA West Bengal',
      phone: '9046349837',
      email: 'santipur.mobixpress@gmail.com',
      timing: '10:30:00 To 21:30:00',
      status: 'Closed',
      image: '/santipur.png',
      codEnabled: false
    },
    {
      id: 3,
      name: 'KARIMPUR',
      location: 'KARIMPUR NEW BUS STAND, REGULATED MARKET, ROOM NO F21 NADIA West Bengal',
      phone: '9641112597',
      email: 'amithasan051@gmail.com',
      timing: '10:30:00 To 21:30:00',
      status: 'Closed',
      image: '/karimpur.png',
      codEnabled: false
    },
    {
      id: 4,
      name: 'SILIGURI',
      location: 'SILIGURI BRANCH ADDRESS HERE',
      phone: '9876543210',
      email: 'siliguri.mobixpress@gmail.com',
      timing: '10:30:00 To 21:30:00',
      status: 'Closed',
      image: '/branch-placeholder.jpg', // Changed from API placeholder
      codEnabled: false
    },
    {
      id: 5,
      name: 'MECHEDA',
      location: 'MECHEDA BRANCH ADDRESS HERE',
      phone: '9876543211',
      email: 'mecheda.mobixpress@gmail.com',
      timing: '10:30:00 To 21:30:00',
      status: 'Closed',
      image: '/branch-placeholder.jpg', // Changed from API placeholder
      codEnabled: false
    },
    {
      id: 6,
      name: 'NABADWIP',
      location: 'NABADWIP BRANCH ADDRESS HERE',
      phone: '9876543212',
      email: 'nabadwip.mobixpress@gmail.com',
      timing: '10:30:00 To 21:30:00',
      status: 'Closed',
      image: '/branch-placeholder.jpg', // Changed from API placeholder
      codEnabled: false
    },
    {
      id: 7,
      name: 'BARASAT',
      location: '12, Jessore Road Champadali More North 24 Parganas West Bengal',
      phone: '8420425633',
      email: 'abhishekpapai9@gmail.com',
      timing: '10:30:00 To 22:00:00',
      status: 'Closed',
      image: '/branch-placeholder.jpg', // Changed from API placeholder
      codEnabled: false
    },
    {
      id: 8,
      name: 'BANDEL',
      location: 'BANDEL BANDEL BALIR MORE, OPPOSITE WATER TANK HOOGHLY West Bengal',
      phone: '6289038250',
      email: 'mobixpressbandel@gmail.com',
      timing: '10:30:00 To 21:30:00',
      status: 'Closed',
      image: '/bandel.png',
      codEnabled: false
    },
    {
      id: 9,
      name: 'BARRACKPORE',
      location: 'Barrackpore Railway Station 4 No Ticket Counter, H Road Anandapuri Side, North 24...',
      phone: '8017999888',
      email: 'service@mobixpress.in',
      timing: '10:30:00 To 22:00:00',
      status: 'Closed',
      image: '/branch-placeholder.jpg', // Changed from API placeholder
      codEnabled: false
    }
  ];

  const filteredBranches = branches.filter(branch =>
    branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Branches</h1>
          <p className="text-gray-600">Find MobiXpress stores near you</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search branches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div key={branch.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Branch Image */}
              <div className="relative h-48 bg-gradient-to-br from-red-400 to-red-600">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={branch.image}
                    alt={`${branch.name} branch`}
                    fill
                    className="object-cover opacity-60"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-gray-800 text-white px-2 py-1 rounded text-sm">
                    {branch.status}
                  </span>
                </div>
                
                {/* Timing Badge */}
                <div className="absolute bottom-3 left-3 z-10">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {branch.timing}
                  </div>
                </div>
                
                {/* Branch Info Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
                  <div className="text-white text-center">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-2 justify-center">
                        <div className="bg-white rounded p-1">
                          <div className="w-4 h-4 bg-red-600 rounded flex items-center justify-center">
                            <span className="text-white font-bold text-xs">M</span>
                          </div>
                        </div>
                        <span className="font-semibold">MobiXpress</span>
                      </div>
                      <h3 className="text-xl font-bold">{branch.name}</h3>
                      <p className="text-sm opacity-90">Branch</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{branch.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">{branch.location}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <a href={`tel:${branch.phone}`} className="text-sm text-red-600 hover:text-red-700">
                      {branch.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <a href={`mailto:${branch.email}`} className="text-sm text-red-600 hover:text-red-700 break-all">
                      {branch.email}
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Cash on Delivery: {branch.codEnabled ? 'Yes' : 'No'}
                    </span>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-sm">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBranches.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No branches found</h3>
            <p className="text-gray-600">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BranchLocator;