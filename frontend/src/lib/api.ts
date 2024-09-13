const BASE_URL = 'http://localhost:8000/api';

export const fetchCandlestickData = async () => {
  const response = await fetch(`${BASE_URL}/candlestick-data/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchLineChartData = async () => {
  const response = await fetch(`${BASE_URL}/line-chart-data/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchBarChartData = async () => {
  const response = await fetch(`${BASE_URL}/bar-chart-data/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchPieChartData = async () => {
  const response = await fetch(`${BASE_URL}/pie-chart-data/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
