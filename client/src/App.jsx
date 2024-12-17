import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'

function App() {

  return (
    <div className="page-container">
      <Header />
      <Hero title="ALL THINGS CAMERAS" subtitle="Capture Life's Moments with Professional Grade Equipment" />
      <FeaturedProducts />
      {/* Your other components */}
      <Footer />
    </div>
  )
}

export default App
