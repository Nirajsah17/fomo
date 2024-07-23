import axios from 'axios';
import { config } from "../config"

export const fetchStockData = (symbol) => async (dispatch) => {
  try {
    const response = await axios.get(`${config.baseURI}/api/data/${symbol}`);
    const data = response.data;
    dispatch({
      type: 'SET_STOCK_DATA',
      payload: data,
    });
  } catch (error) {
    console.error('Error fetching stock data:', error);
  }
};
