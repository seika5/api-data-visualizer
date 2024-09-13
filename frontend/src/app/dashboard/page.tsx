"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCandlestickDataThunk, fetchLineChartDataThunk, fetchBarChartDataThunk, fetchPieChartDataThunk } from '../../redux/slices/chartSlice';
import { RootState } from '../../redux/store';
import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart'; // Ensure this component exists
import BarChart from '../components/BarChart'; // Ensure this component exists
import PieChart from '../components/PieChart'; // Ensure this component exists

import '../../styles/globals.css';  // Import global CSS

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  
  const candlestickData = useSelector((state: RootState) => state.charts.candlestickData);
  const lineChartData = useSelector((state: RootState) => state.charts.lineChartData);
  const barChartData = useSelector((state: RootState) => state.charts.barChartData);
  const pieChartData = useSelector((state: RootState) => state.charts.pieChartData);

  useEffect(() => {
    // Fetch all chart data on component mount
    dispatch(fetchCandlestickDataThunk() as any);
    dispatch(fetchLineChartDataThunk() as any);
    dispatch(fetchBarChartDataThunk() as any );
    dispatch(fetchPieChartDataThunk() as any);
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1 className="title">Dashboard</h1>
      <div className="chart-container">
        <div className="chart-item">
          <h2>Candlestick Chart</h2>
          {candlestickData ? <CandlestickChart data={candlestickData} /> : <p>Loading Candlestick Chart...</p>}
        </div>
        <div className="chart-item">
          <h2>Line Chart</h2>
          {lineChartData ? <LineChart data={lineChartData} /> : <p>Loading Line Chart...</p>}
        </div>
        <div className="chart-item">
          <h2>Bar Chart</h2>
          {barChartData ? <BarChart data={barChartData} /> : <p>Loading Bar Chart...</p>}
        </div>
        <div className="chart-item">
          <h2>Pie Chart</h2>
          {pieChartData ? <PieChart data={pieChartData} /> : <p>Loading Pie Chart...</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
