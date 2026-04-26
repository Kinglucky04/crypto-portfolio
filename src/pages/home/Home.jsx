import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom';

function Home() {
    const {allCoins, currency} = useContext(CoinContext);
    const [displayCoins, setDisplayCoins] = useState([]);
    const [input, setInput] = useState("");

    const inputHandler = (event) => {
        setInput(event.target.value);

        if (event.target.value === "") {
            setDisplayCoins(allCoins);
        }
    }

    const searchHandler = async (event) => {
        event.preventDefault();

        const coins = await allCoins.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase())
        });

        setDisplayCoins(coins);
    }

    useEffect(() => {

        setDisplayCoins(allCoins);
    }, [allCoins])

  return (
   <div className='flex flex-col items-center mt-12 px-4'>
  <div className='text-center max-w-xl'>
    <h1 className='text-2xl sm:text-4xl mb-6 font-semibold'>
      Largest <br /> Cryptocurrency Market Place
    </h1>

    <p className='text-gray-300 text-sm sm:text-base'>
      Welcome to the world's largest cryptocurrency market place!. Sign up to explore more about crypto.
    </p>

    <form className='bg-white flex items-center mt-5 rounded-full px-3 py-2 w-full' onSubmit={searchHandler}>
      <input
      onChange={inputHandler}
      value={input}
      list='coinlist'
        type="text"
        placeholder='Search any Crypto'
        className='flex-1 bg-transparent outline-none px-2 text-gray-700 text-sm sm:text-base'
        required
      />

        <datalist id='coinlist'>
            {allCoins.map((item, index) => (
                <option key={index} value={item.name} />
            ))}
        </datalist>

      <button
        type='submit'
        className='bg-green-400 text-white px-4 sm:px-5 py-2 rounded-full hover:bg-green-500 transition text-sm sm:text-base. cursor-pointer
        '
      >
        Search
      </button>
    </form>
  </div>

  <div className='w-full max-w-4xl mt-10'>
    {/* Header */}
    <div className='grid grid-cols-3 sm:grid-cols-5 gap-4 bg-black/40 backdrop-blur-sm px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white/80 border border-white/10'>
      <p>#</p>
      <p className='text-left'>Coins</p>
      <p>Price</p>
      <p className='hidden sm:block'>24H Change</p>
      <p className='hidden sm:block text-right'>Market Cap</p>
    </div>

    {displayCoins.slice(0, 10).map((item, index) => (
      <Link
        key={item.id}
        to={`/coin/${item.id}`}
        className='grid grid-cols-3 sm:grid-cols-5 gap-4 px-4 py-4 border-b border-white/10 text-white items-center text-sm'
      >
        <p>{index + 1}</p>

        <div className='flex items-center gap-2'>
          <img src={item.image} alt={item.name} className='w-5 h-5 sm:w-6 sm:h-6' />
          <p className='truncate'>{item.name}</p>
        </div>

        <p>
          {currency.symbol}{item.current_price.toLocaleString()}
        </p>

        <p className={`hidden sm:block ${item.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"}`}>
          {item.price_change_percentage_24h?.toFixed(2)}%
        </p>

        <p className='hidden sm:block text-right'>
          {currency.symbol}{item.market_cap.toLocaleString()}
        </p>
      </Link>
    ))}
  </div>
</div>
  )
}

export default Home
