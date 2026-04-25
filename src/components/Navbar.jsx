import React, { useState } from 'react'
import { useContext } from 'react'
import { CoinContext } from '../context/CoinContext'

function Navbar() {
  const [open, setOpen] = useState(false)

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
       switch (event.target.value) {
        case "usd":
            setCurrency({
                name: "USD",
                symbol: "$"
            });
            break;
        case "eur":
            setCurrency({
                name: "EUR",
                symbol: "€"
            });
            break;
        case "ngn":
            setCurrency({
                name: "NGN",
                symbol: "₦"
            });
            break;
        default:
            setCurrency({
                name: "USD",
                symbol: "$"
            });
       }
  }

  return (
    <div>
      <div className='flex items-center justify-between px-12 py-6'>
        
        <div>
          <h1 className='uppercase font-bold text-green-400 text-3xl'>Blockforge</h1>
        </div>

        {/* Desktop Nav */}
        <div>
          <ul className='hidden md:flex items-center justify-between gap-8 text-lg font-medium cursor-pointer'>
            <li className='hover:text-gray-400 bg-transparent'>Home</li>
            <li className='hover:text-gray-400 bg-transparent'>Portfolio</li>
            <li className='hover:text-gray-400 bg-transparent'>Features</li>
            <li className='hover:text-gray-400 bg-transparent'>Blog</li>
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className='hidden md:flex items-center justify-between gap-4'>
          <div>
            <select className='px-4 py-2 rounded-2xl bg-transparent border-2 border-gray-400 text-sm cursor-pointer outline-none' onChange={currencyHandler}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="ngn">Naira</option>
            </select>
          </div>
          <div>
            <button className='px-4 py-2 rounded-2xl bg-green-400 border-2 border-green-400 hover:bg-green-500 text-sm cursor-pointer'>
              Sign Up
            </button>
          </div>
        </div>

        {/* Hamburger */}
        <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden px-6 py-4'>
          <ul className='flex flex-col gap-4 text-lg font-medium cursor-pointer'>
            <li className='hover:text-gray-400'>Home</li>
            <li className='hover:text-gray-400'>Portfolio</li>
            <li className='hover:text-gray-400'>Features</li>
            <li className='hover:text-gray-400'>Blog</li>
          </ul>

          <div className='flex flex-col gap-4 mt-4'>
            <select onChange={currencyHandler} className='px-4 py-2 rounded-2xl bg-transparent border-2 border-gray-400 text-sm cursor-pointer outline-none'>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="ngn">Naira</option>
            </select>

            <button className='px-4 py-2 rounded-2xl bg-green-400 border-2 border-green-400 hover:bg-green-500 text-sm cursor-pointer'>
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500/40 to-transparent'></div>
    </div>
  )
}

export default Navbar