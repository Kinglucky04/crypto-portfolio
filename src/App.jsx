import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Coin from './pages/coin/Coin'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'

function App() {
  return (
        <div className='min-h-dvh text-white 
            bg-[radial-gradient(circle_at_top,#1d152f,#0b004e,#020617)]'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/coin/:coinId' element={<Coin />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
            <Footer />
    </div>
  )
}

export default App