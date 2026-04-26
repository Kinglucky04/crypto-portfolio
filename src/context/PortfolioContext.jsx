import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);

  const addCoin = (coin, quantity) => {
    setPortfolio(prev => {
      const exists = prev.find(item => item.id === coin.id);

      if (exists) {
        return prev.map(item =>
          item.id === coin.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...coin, quantity }];
    });
  };

  return (
    <PortfolioContext.Provider value={{ portfolio, addCoin }}>
      {children}
    </PortfolioContext.Provider>
  );
};