import React, { useState, useContext } from 'react'
import { CoinContext } from '../context/CoinContext'
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/clerk-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "USD", symbol: "$" })
        break
      case "eur":
        setCurrency({ name: "EUR", symbol: "€" })
        break
      case "ngn":
        setCurrency({ name: "NGN", symbol: "₦" })
        break
      default:
        setCurrency({ name: "USD", symbol: "$" })
    }
  }

  return (
    <div>
      <div className='flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4'>
        
        
          <h1 className='uppercase font-bold text-green-400 text-xl sm:text-2xl lg:text-3xl'>
            <Link to='/'>
                Blockforge
            </Link>
          </h1>
      

        {/* Desktop Nav */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-medium cursor-pointer'>
          <li className='hover:text-gray-400'><Link to='/'>Home</Link></li>
          <li className='hover:text-gray-400'><Link to='/portfolio'>Portfolio</Link></li>
          <li className='hover:text-gray-400'>Blog</li>
        </ul>

        {/* Desktop Actions */}
        <div className='hidden md:flex items-center gap-3 lg:gap-4'>
          <select
            onChange={currencyHandler}
            className='px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl bg-transparent border border-gray-400 text-sm cursor-pointer outline-none'
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="ngn">Naira</option>
          </select>

          <SignedOut>
          <SignUpButton mode="redirect">
            <button className='px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl bg-green-400 border border-green-400 hover:bg-green-500 text-sm cursor-pointer'>
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>

        {/* Hamburger */}
        <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className='px-6 pb-6'>
          <ul className='flex flex-col gap-4 text-base font-medium'>
            <li className='hover:text-gray-400'><Link to='/'>Home</Link></li>
            <li className='hover:text-gray-400'><Link to='/portfolio'>Portfolio</Link></li>
            <li className='hover:text-gray-400'>Blog</li>
          </ul>

          <div className='flex flex-col gap-4 mt-6'>
            <select
              onChange={currencyHandler}
              className='px-4 py-2 rounded-xl bg-transparent border border-gray-400 text-sm cursor-pointer outline-none'
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="ngn">Naira</option>
            </select>

            <SignedOut>
            <SignInButton>
              <button className='px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl bg-green-400'>
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500/40 to-transparent'></div>
    </div>
  )
}

export default Navbar