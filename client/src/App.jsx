import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <div className="page-container">
      <Header />
      <Hero />
      {/* Your other components */}
      <Footer />
    </div>
  )
}

export default App
