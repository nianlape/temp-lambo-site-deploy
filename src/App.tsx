import { useState } from 'react'
import './App.css'

import Navbar from './Navbar.tsx'
import Hero from './Hero.tsx'
import Pricing from './Pricing.tsx'
import Location from './Location.tsx'

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Pricing />
        <Location />
    </>
  )
}

export default App
