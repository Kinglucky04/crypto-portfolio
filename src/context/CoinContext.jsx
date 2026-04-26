import { createContext, useState, useEffect } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({
        name: "USD",
        symbol: "$"
    });

    const fetchAllCoins = async () => {
        try {
            const res = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name.toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
            );

            const data = await res.json();
            setAllCoins(data);

        } catch (error) {
            console.log("Error fetching coins:", error);
        }
    };

    useEffect(() => {
        fetchAllCoins();
    }, [currency]);
    

    // DATA YOU SHARE TO ALL COMPONENTS
    const contextValue = {
        allCoins,
        currency,
        setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;