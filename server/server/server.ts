import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
import StockData from './models/StockData';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'your_mongodb_connection_string';
const API_BASE_URL = 'https://api.coincap.io/v2';

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Polling function to fetch and store data
const fetchData = async () => {
  const symbols = ['bitcoin', 'ethereum', 'litecoin', 'dogecoin', 'solana'];

  try {
    for (const symbol of symbols) {
      const response = await axios.get(`${API_BASE_URL}/assets/${symbol}`);
      const data = response.data.data;

      const newStockData = new StockData({
        symbol: data.id,
        price: parseFloat(data.priceUsd),
        timestamp: new Date(),
      });

      await newStockData.save();
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Schedule data fetching every 10 seconds
setInterval(fetchData, process.env.POLLING_TIME);

// API endpoint to get the latest 20 entries for a symbol
app.get('/api/data/:symbol', async (req, res) => {
  const { symbol } = req.params;

  try {
    const data = await StockData.find({ symbol })
      .sort({ timestamp: -1 })
      .limit(20);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
