import mongoose from 'mongoose';

const StockDataSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: Date,
});

const StockData = mongoose.model('StockData', StockDataSchema);

export default StockData;
