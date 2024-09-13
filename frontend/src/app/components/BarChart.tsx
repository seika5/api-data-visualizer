"use client";

import React from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

interface BarChartProps {
  data: {
    labels: string[];
    data: number[];
  };
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Bar Chart Data',
        data: data.data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bar Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X-Axis Label',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y-Axis Label',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Chart type="bar" data={chartData} options={options} />
  );
};

export default BarChart;
