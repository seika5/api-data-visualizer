"use client";

import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, TimeScale } from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import date adapter for Chart.js
import { addDays } from 'date-fns'; // Import date-fns for date manipulation

// Register necessary components and scales
ChartJS.register(
  CandlestickController,
  CandlestickElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  TimeScale // Register TimeScale to handle time-based x-axis
);

interface CandlestickChartProps {
  data: {
    datasets: {
      label: string;
      data: {
        x: Date; // Date
        o: number; // Open
        h: number; // High
        l: number; // Low
        c: number; // Close
      }[]; 
    }[];
  };
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  // Prepare chart data
  const chartData = {
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      data: dataset.data.map(item => ({
        x: addDays(new Date(item.x), 1), // Add 1 day to the date
        o: item.o,
        h: item.h,
        l: item.l,
        c: item.c
      }))
    }))
  };

  // Chart options
  const options: ChartOptions<'candlestick'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Candlestick Chart',
      },
    },
    scales: {
      x: {
        type: 'time',
        title: {
          display: true,
          text: 'Date',
        },
        time: {
          unit: 'day',
        },
        ticks: {
          source: 'auto',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: true,
        ticks: {
          callback: function (value: string | number) {
            return Number(value).toFixed(0); // Ensure the value is treated as a number
          },
        },
      },
    },
  };


  return (
    <Chart
      type="candlestick"
      data={chartData}
      options={options}
    />
  );
};

export default CandlestickChart;
