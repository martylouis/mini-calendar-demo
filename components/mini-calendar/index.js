import Header from './header';
import Footer from './footer';
import DayNames from './dayNames';
import Days from './days';
import ScheduleDate from './scheduleDate';

const MiniCalendar = ({ today, datesWithEvents, datesNotAvailable, children }) => {
  return (
    <div className="ba-mc">
      <Header />
      <div className="ba-mc__calendar">
        <DayNames />
        <Days today={today} datesNotAvailable={datesNotAvailable} datesWithEvents={datesWithEvents} />
      </div>
      <div className="ba-mc__schedule">
        <ScheduleDate date={today} />
        <div className="ba-mc__schedule__events">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MiniCalendar;
