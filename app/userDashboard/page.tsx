import React from 'react'
import Announcement  from "../../components/announcement"
import Navigation from '../../components/navigation'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'

const UserDashboard = () => {
  return (
       <div >
          <Announcement />
          <Navigation />
          <main className="p-4">
            <h1 className="text-2xl font-display text-dark">Welcome to Handcrafted Haven</h1>
            <p className="mt-2 text-dark">
              Discover unique handmade items crafted with love and care.
            </p>
            <ProductCard id={1} title="Handmade Vase" priceCents={2500} imageUrl="/images/vase.jpg" category="Home Decor" />
          </main>
          <Footer />
          
        </div>
  )
}

export default  UserDashboard
