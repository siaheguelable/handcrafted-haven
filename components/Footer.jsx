import React from 'react'
import Link from 'next/link'
import { ShoppingBasket } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <ShoppingBasket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold">Handcrafted Haven</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover unique, handmade items from talented artisans around the world.
              Supporting creativity, craftsmanship, and sustainable living one purchase at a time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 Handcrafted Haven. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
