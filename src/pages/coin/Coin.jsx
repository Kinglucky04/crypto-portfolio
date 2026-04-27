import React, { useState, useEffect, useContext } from 'react'
import { PortfolioContext } from '../../context/PortfolioContext'
import { CoinContext } from '../../context/CoinContext'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useParams } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'


function Coin() {
  const { coinId } = useParams()
  const [coinData, setCoinData] = useState()
  const [historicalData, setHistoricalData] = useState()
  const { addCoin } = useContext(PortfolioContext)
  const [qty, setQty] = useState(1)
  const { currency } = useContext(CoinContext)
  const { isSignedIn } = useUser()

  const chartData = historicalData?.map(item => ({
  time: new Date(item[0]).toLocaleDateString(),
  price: item[1]
}))

  const fetchCoinData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      )
      const data = await res.json()
      setCoinData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchHistoricalData = async () => {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name.toLowerCase()}&days=10`
    )
    const data = await res.json()
    setHistoricalData(data.prices)
  } catch (error) {
    console.log(error)
  }
}

  useEffect(() => {
  fetchCoinData()
  fetchHistoricalData()
}, [coinId, currency])

  return (
    <div>
      <div className='flex items-center'>
      {coinData && (
        <div>
          <img src={coinData.image.large} alt={coinData.name} className="w-16" />
          <h2>{coinData.name}</h2>
          <p>Price: ${coinData?.market_data?.current_price?.usd}</p>
          <p>Market Cap: ${coinData.market_data.market_cap.usd}</p>
        </div>
      )}
      </div>

      {historicalData && (
        <div className="w-300 h-64 mt-6">
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <XAxis dataKey="time" hide />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#22c55e" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="text-black px-2 py-1 w-20"
        />

       <button
            onClick={() => addCoin(coinData, qty)}
            disabled={!coinData || !isSignedIn}
            className="bg-green-400 px-4 py-2 rounded disabled:opacity-50"
          >
            {isSignedIn ? "Add" : "Sign in to add"}
          </button>
      </div>
    </div>
  )
}

export default Coin