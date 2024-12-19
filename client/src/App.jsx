// import { useState } from 'react'
// import './App.css'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import Hero from './components/Hero/Hero'
// import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'

// function App() {

//   return (
//     <div className="page-container">
//       <Header />
//       <Hero title="ALL THINGS CAMERAS" subtitle="Capture Life's Moments with Professional Grade Equipment" />
//       <FeaturedProducts />
//       {/* Your other components */}
//       <Footer />
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'
import{ Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.jsx'

function App() {
  return (
    <div className="page-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Hero title="ALL THINGS CAMERAS" subtitle="Capture Life's Moments with Professional Grade Equipment" />
      <FeaturedProducts />
    </>
  )
}

export default App