import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'

function Home() {
    const {allCoins, currency} = useContext(CoinContext);
    const [displayCoins, setDisplayCoins] = useState([]);

    useEffect(() => {

        setDisplayCoins(allCoins);
    }, [allCoins])

  return (
    <div className='flex flex-col items-center mt-20'>
      <div className=''>
        <h1 className='text-4xl mb-9 text-center font-semibold'>Largest  <br />Cryptocurrency Market Place</h1>
        <p className='text-gray-300'>Welcome to the world's largest cryptocurrency market place!. Sign up to explore more about crypto.</p>

       <form className='bg-white flex items-center mt-5 rounded-full px-3 py-2 max-w-xl mx-auto'>
            <input
                type="text"
                placeholder='Search any Crypto'
                className='flex-1 bg-transparent outline-none px-2 text-gray-700'
            />
            <button
                type='submit'
                className='bg-green-400 text-white px-5 py-2 rounded-full hover:bg-green-500 transition'
            >
                Search
            </button>
        </form>
      </div>
     <div className='max-w-4xl mx-auto mt-10'>
            <div className='grid grid-cols-5 gap-4 bg-black/40 backdrop-blur-sm px-4 py-3 rounded-lg text-sm font-semibold text-white/80 border border-white/10'>
                <p>#</p>
                <p className='text-left'>Coins</p>
                <p>Price</p>
                <p>24H Change</p>
                <p className='text-right'>Market Cap</p>
            </div>
            {displayCoins.slice(0, 10).map((item, index) => (
                    <div
                        key={item.id}
                        className='grid grid-cols-5 gap-4 px-4 py-4 border-b border-white/10 text-white items-center'
                    >

                        {/* Rank */}
                        <p>{index + 1}</p>
                        <div className='flex items-center gap-2'>
                            <img src={item.image} alt={item.name} className='w-6 h-6' />
                            <p>{item.name}</p>
                        </div>
                     
                        <p>
                            {currency.symbol}{item.current_price.toLocaleString()}
                        </p>
                       
                        <p className={item.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"}>
                            {item.price_change_percentage_24h?.toFixed(2)}%
                        </p>
                       
                        <p className='text-right'>
                            {currency.symbol}{item.market_cap.toLocaleString()}
                        </p>

                    </div>
                ))}
            </div>
    </div>
  )
}

export default Home
