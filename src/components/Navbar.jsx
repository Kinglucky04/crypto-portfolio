import React from 'react'

function Navbar() {
  return (
    <div>
    <div className='flex items-center justify-between px-12 py-6'>
        <div>
        <h1 className='uppercase font-bold text-green-400 text:3xl'>Blockforge</h1>
        <img src="" alt="" />
        </div>
        <div className=''>
        <ul className='flex items-center justify-between gap-8 text-lg font-medium cursor-pointer'>
            <li className='hover:text-gray-400 bg-transparent'>Home</li>
            <li className='hover:text-gray-400 bg-transparent'>Portfolio</li>
            <li className='hover:text-gray-400 bg-transparent'>Features</li>
            <li className='hover:text-gray-400 bg-transparent'>Blog</li>
        </ul>
        </div>
        <div className='flex items-center justify-between gap-4'>
            {/* desktop  screen */}
            <div>
            <select name="" id="" className='px-4 py-2 rounded-2xl bg-transparent border-2 border-gray-400 text-sm cursor-pointer outline-none'>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="ngn">Naira</option>
            </select>
            </div>
            <div>
            <button className='px-4 py-2 rounded-2xl bg-green-400 border-2 border-green-400 hover:bg-green-500 text-sm cursor-pointer'>
                Sign in
            </button>
            </div>
        </div>
        
    </div>
    <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500/40 to-transparent'></div>
    </div>
  )
}

export default Navbar
