import { useEffect } from 'react';
import { useCustomDispath, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { fetchWeather } from '../../store/thunks/fetchWeather';
import Days from './components/days/Days';
import Spinner from './components/spinner/Spinner';
import ThisDayInfo from './components/this-day-info/ThisDayInfo';
import ThisDay from './components/this-day/ThisDay';

import s from './Home.module.scss';

const Home = () => {
  const dispatch = useCustomDispath();
  const { weather, isLoading } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchWeather('Paris'));
  }, []);

  if (isLoading === true) return <Spinner />
    
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather}/>
      </div>
      <Days />
    </div>
  );
};

export default Home;
