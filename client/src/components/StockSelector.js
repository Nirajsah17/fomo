import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStockData } from '../store/actions';
import {config} from "../config"

const StockSelector = () => {
  const dispatch = useDispatch();
  const stocks = ['bitcoin', 'ethereum', 'litecoin', 'dogecoin', 'solana'];
  const [selectedStock, setSelectedStock] = useState(stocks[0]);

  const handleChange = (event) => {
    setSelectedStock(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchStockData(selectedStock));

    const interval = setInterval(() => {
      dispatch(fetchStockData(selectedStock));
    }, config.pollingTime);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedStock, dispatch]);

  return (
    <div className="stock-selector">
      <label htmlFor="stock-dropdown">Select Stock:</label>
      <select
        id="stock-dropdown"
        value={selectedStock}
        onChange={handleChange}
        className="dropdown"
      >
        {stocks.map((stock) => (
          <option key={stock} value={stock}>
            {stock.charAt(0).toUpperCase() + stock.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockSelector;
