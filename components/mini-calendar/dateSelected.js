import dayjs from 'dayjs';

const DateSelected = ({ date }) => (
  <div className="ba-mc__date_selected">
    <strong>{dayjs(date).format('dddd')}</strong> {dayjs(date).format('M/D/YYYY')}
  </div>
);

export default DateSelected;
