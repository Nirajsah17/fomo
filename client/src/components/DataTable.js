import React from 'react';
import { useSelector } from 'react-redux';

const DataTable = () => {
  const stockData = useSelector((state) => state.stock.data);
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {stockData?.map((data) => (
            <tr key={data._id}>
              <td>{data.symbol}</td>
              <td>${parseFloat(data.price).toFixed(2)}</td>
              <td className="row-style">{new Date(data.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
