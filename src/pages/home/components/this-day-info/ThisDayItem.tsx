import { Item } from '../../../../types';

import IndicatorSvg from '../../../../assets/icons/indicators/IndicatorSvg';
import s from './ThisDayInfo.module.scss';

type Props = {
  item: Item;
};

const ThisDayItem = ({ item }: Props) => {
  const { icon_id, name, value } = item;

  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvg id={icon_id} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
};

export default ThisDayItem;
