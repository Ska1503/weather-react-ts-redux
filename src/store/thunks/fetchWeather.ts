import { AppDispatch } from '..';
import { WeatherService } from '../../services/weatherService';
import { currentWeatherSlice } from '../../slices/currentWeatherSlice';

export const fetchWeather = (payload: string) => async (dispatch: AppDispatch) => {
  dispatch(currentWeatherSlice.actions.weatherFetching());
  const res = await WeatherService.getCurrentWeather(payload);

  try {
    if (res.status === 200) {
      dispatch(currentWeatherSlice.actions.weatherFetched(res));
    } else {
      dispatch(currentWeatherSlice.actions.weatherFetchingError(res));
    }
  } catch (error) {
    console.log(error);
  }
};
