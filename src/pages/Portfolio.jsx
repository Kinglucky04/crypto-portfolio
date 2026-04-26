import { useContext, useMemo } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { CoinContext } from "../context/CoinContext";

function Portfolio() {
  const { portfolio } = useContext(PortfolioContext);
  const { allCoins, currency } = useContext(CoinContext);

  const enriched = portfolio.map(item => {
    const live = allCoins.find(c => c.id === item.id);

    return {
      ...item,
      price: live?.current_price || 0,
      change: live?.price_change_percentage_24h || 0
    };
  });

  const totalValue = useMemo(() => {
    return enriched.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [enriched]);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Portfolio</h1>

      <h2 className="mb-6">
        Total: {currency.symbol}{totalValue.toLocaleString()}
      </h2>

      {enriched.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <p>{item.name}</p>
          <p>{item.quantity}</p>
          <p>{currency.symbol}{item.price}</p>
          <p className={item.change > 0 ? "text-green-400" : "text-red-400"}>
            {item.change?.toFixed(2)}%
          </p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;