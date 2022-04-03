import SvgIcon from '../../../../assets/icons/global/SvgIcon';
import { Weather } from '../../../../store/types';

import s from './ThisDay.module.scss';


export type WeatherProps = {
  weather: Weather;
};

const ThisDay = ({ weather }: WeatherProps) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <SvgIcon id="mainly_cloudy" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__city}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
