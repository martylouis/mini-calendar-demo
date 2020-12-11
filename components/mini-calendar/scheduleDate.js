import dayjs from 'dayjs';

const ScheduleDate = ({ date }) => (
  <div className="ba-mc__schedule__date">
    <strong>{dayjs(date).format('dddd')}</strong> {dayjs(date).format('M/D/YYYY')}
  </div>
);

export default ScheduleDate;
