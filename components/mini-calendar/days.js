import dayjs from 'dayjs';
import classNames from 'classnames';
import DayButton from './dayButton';

const Days = ({ today, datesNotAvailable, datesWithEvents }) => {
  let days = [];

  let getStartDates = datesNotAvailable.map((date) => {
    return Array.isArray(date) ? date[0] : date;
  });

  let getEndDates = datesNotAvailable.map((date) => {
    return Array.isArray(date) ? date[date.length - 1] : date;
  });

  const dayClassNames = (day) => {
    let classes = classNames({
      'ba-mc__date': true,
      'ba-mc__date_today': dayjs(today).format('DD') == day,
      'ba-mc__date_notAvailable': datesNotAvailable.flat().includes(day),
      'ba-mc__date_notAvailable--start': getStartDates.includes(day),
      'ba-mc__date_notAvailable--end': getEndDates.includes(day),
    });
    return classes;
  };

  const hasEvent = (day) => {
    return datesWithEvents.includes(day);
  };

  for (let day = 1; day <= 30; day++) {
    days.push(
      <DayButton className={dayClassNames(day)} key={day} hasEvent={hasEvent(day)}>
        {day}
      </DayButton>
    );
  }

  return <div className="ba-mc__days">{days}</div>;
};

export default Days;
