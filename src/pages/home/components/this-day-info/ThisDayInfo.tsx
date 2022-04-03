import ThisDayItem from './ThisDayItem';
import { Item } from '../../../../types';
import { WeatherProps } from '../this-day/ThisDay';

import cloud from '../../../../assets/images/cloud.png';
import s from './ThisDayInfo.module.scss';

const ThisDayInfo = ({ weather }: WeatherProps) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value:  `${weather.main.pressure} мм ртутного столба - нормальное`,
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${weather.wind.speed} м/с`,
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};

export default ThisDayInfo;
