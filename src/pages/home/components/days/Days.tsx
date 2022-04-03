import Card from './Card';
import { days } from './index';
import { Day } from '../../../../types';

import s from './Days.module.scss';

const Days = () => {
  return (
    <>
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card days={day} key={day.day} />
        ))}
      </div>
    </>
  );
};

export default Days;
