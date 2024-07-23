import React from 'react';
import { Provider } from 'react-redux';
import StockSelector from './components/StockSelector';
import DataTable from './components/DataTable';
import store from './store/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Stock Price Viewer</h1>
        <StockSelector />
        <DataTable />
      </div>
    </Provider>
  );
};

export default App;
