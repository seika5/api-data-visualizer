import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCandlestickData,
  fetchLineChartData,
  fetchBarChartData,
  fetchPieChartData
} from '../../lib/api';

// Define async thunks for fetching chart data
export const fetchCandlestickDataThunk = createAsyncThunk(
  'charts/fetchCandlestickData',
  async () => {
    const data = await fetchCandlestickData();
    return data;
  }
);

export const fetchLineChartDataThunk = createAsyncThunk(
  'charts/fetchLineChartData',
  async () => {
    const data = await fetchLineChartData();
    return data;
  }
);

export const fetchBarChartDataThunk = createAsyncThunk(
  'charts/fetchBarChartData',
  async () => {
    const data = await fetchBarChartData();
    return data;
  }
);

export const fetchPieChartDataThunk = createAsyncThunk(
  'charts/fetchPieChartData',
  async () => {
    const data = await fetchPieChartData();
    return data;
  }
);

// Define the initial state for the charts
const initialState = {
  candlestickData: null,
  lineChartData: null,
  barChartData: null,
  pieChartData: null,
};

// Create the slice
const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandlestickDataThunk.fulfilled, (state, action) => {
        state.candlestickData = action.payload;
      })
      .addCase(fetchLineChartDataThunk.fulfilled, (state, action) => {
        state.lineChartData = action.payload;
      })
      .addCase(fetchBarChartDataThunk.fulfilled, (state, action) => {
        state.barChartData = action.payload;
      })
      .addCase(fetchPieChartDataThunk.fulfilled, (state, action) => {
        state.pieChartData = action.payload;
      });
  },
});

export default chartSlice.reducer;
