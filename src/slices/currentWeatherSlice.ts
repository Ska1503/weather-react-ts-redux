import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather } from '../store/types';

export type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: ResponseType;
};

type ResponseType = {
  status: number;
  message: string;
};

export const initialState: CurrentWeather = {
  weather: {
    main: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
      humidity: 0,
    },
    name: '',
    wind: {
      speed: 0,
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const currentWeatherSlice = createSlice({
  name: 'current_wather',
  initialState,
  reducers: {
    weatherFetching: (state) => {
      state.isLoading = true;
    },
    weatherFetched: (state, action: PayloadAction<AxiosResponse<Weather>>) => {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    weatherFetchingError: (state, action: PayloadAction<AxiosResponse<Weather>>) => {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default currentWeatherSlice.reducer;
