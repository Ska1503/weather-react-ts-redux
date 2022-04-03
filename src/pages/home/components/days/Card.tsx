import { Day } from '../../../../types';

import s from './Days.module.scss';
import SvgIcon from '../../../../assets/icons/global/SvgIcon';

type Props = {
  days: Day;
};

const Card = ({ days }: Props) => {
  const { day, day_info, icon_id, temp_day, temp_night, info } = days;

  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.day__info}>{day_info}</div>
      <div className={s.img}>
        <SvgIcon id={icon_id} />
      </div>
      <div className={s.temp__day}>{temp_day}</div>
      <div className={s.temp__night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};

export default Card;
