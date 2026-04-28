Crypto Market Dashboard

A modern cryptocurrency tracking web application built with React and Tailwind CSS, powered by real-time data from the CoinGecko API.
It provides live market prices, 24-hour changes, and market capitalization data in a clean, responsive UI.

<img width="1440" height="811" alt="Screenshot 2026-04-28 at 13 33 51" src="https://github.com/user-attachments/assets/7d378f6e-ec7b-4e83-aaff-65f49d5eb107" />


Features
 Real-time cryptocurrency market data
 Search functionality for coins
 Currency display support (USD, EUR, NGN setup ready)
 24-hour price change indicators (green/red)
 Market cap rankings
 Fast and responsive UI
 Mobile-friendly design
 Global state management using Context API

Tech Stack
React.js
Tailwind CSS
Context API (State Management)
CoinGecko API
Vite (for fast development)

API Used
This project uses the free public endpoint from CoinGecko

How It Works
The app fetches live crypto data from the CoinGecko API.
Data is stored globally using React Context API.
Components consume the data without prop drilling.
The UI dynamically renders:
Coin name & image
Current price
24-hour percentage change
Market capitalization

Installation & Setup
1. Clone the repository
git clone https://github....
2. Install dependencies
npm install
3. Run the development server
npm run dev
