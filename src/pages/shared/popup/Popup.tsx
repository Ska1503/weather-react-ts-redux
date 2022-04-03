import SvgIcon from '../../../assets/icons/global/SvgIcon';
import ThisDayItem from '../../home/components/this-day-info/ThisDayItem';
import { items } from './index';
import { Item } from '../../../types';
import s from './Popup.module.scss';

type Props = {};

const Popup = (props: Props) => {
  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <SvgIcon id="sun" />
          </div>
          <div className={s.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day__city}>
            Город: <span>Киев</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <SvgIcon id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
