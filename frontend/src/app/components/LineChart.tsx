"use client";

import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register necessary components and scales for Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement // Register PointElement to handle points on the line chart
);

interface LineChartProps {
  data: {
    labels: string[]; // Array of labels for the x-axis
    data: number[];   // Array of data points for the y-axis
  };
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  // Prepare chart data
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Line Chart Data',
        data: data.data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
        fill: true, // Fill area under the line
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Labels',
        }
      },
      y: {
        title: {
          display: true,
          text: 'Values',
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
    <div>
      <Chart
        type="line"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default LineChart;
