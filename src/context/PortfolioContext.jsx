import { createContext, useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {

    const { user, isLoaded } = useUser();
      const [portfolio, setPortfolio] = useState(() => {
      const saved = localStorage.getItem("portfolio");
      return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
      localStorage.setItem("portfolio", JSON.stringify(portfolio));
    }, [portfolio]);

    if (!isLoaded) return null;

  const addCoin = (coin, quantity) => {

     if (!user) return;

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

      const removeCoin = (id) => {
        setPortfolio(prev => prev.filter(item => item.id !== id));
      };

  return (
    <PortfolioContext.Provider value={{ portfolio, addCoin , removeCoin}}>
      {children}
    </PortfolioContext.Provider>
  );
};