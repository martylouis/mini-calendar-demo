import classNames from 'classnames';

const MiniCalendar = () => {
  return (
    <div className="ba-mini-calendar">
      <header className="ba-mini-calendar__header">
        <h2 className="ba-mini-calendar__heading">
          <a href="#">Schedule</a>
        </h2>
        <div className="ba-mini-calendar__nav">
          <div className="ba-mini-calendar__nav_date">November 2020</div>
          <div className="ba-mini-calendar__nav_buttons">
            <button className="ba-mini-calendar__nav_button prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16">
                <path id="path" d="M346.555,64l-6.326-7.381a.952.952,0,0,1,0-1.238L346.555,48,348,49.238,342.2,56,348,62.762Z" transform="translate(-340 -48)" />
              </svg>
            </button>
            <button className="ba-mini-calendar__nav_button next">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16">
                <path id="path" d="M5.445,96l6.326,7.381a.952.952,0,0,1,0,1.238L5.445,112,4,110.762,9.8,104,4,97.238Z" transform="translate(-4 -96)" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="ba-mini-calendar__calendar">
        <WeekDays />
        <DaysOfMonth />
      </div>
      <div className="ba-mini-calendar__event_date">
        <strong>Thursday</strong> 11/26/2020
      </div>
      <div className="ba-mini-calendar__event_list">
        <div className="ba-mini-calendar__event_item block block_event">AH Thursday Meeting 1WS</div>
        <div className="ba-mini-calendar__event_item block block_event">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path id="Path_22" data-name="Path 22" d="M7.2,10.4H8.8V12H7.2ZM7.2,4H8.8V8.8H7.2Zm.792-4a8,8,0,1,0,5.662,2.34A8,8,0,0,0,7.992,0ZM8,14.4A6.4,6.4,0,1,1,14.4,8,6.4,6.4,0,0,1,8,14.4Z" fill="#f46e00" />
          </svg>
          AH Friday Meeting 2WS
        </div>
        <div className="ba-mini-calendar__event_item block block_task">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path id="Path_1111" data-name="Path 1111" d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,12V9H4V7H8V4l4,4Z" />
          </svg>
          Task Item 1
        </div>
        <div className="ba-mini-calendar__event_item block block_dna">Date Not Available</div>
        <div className="ba-mini-calendar__event_item dot dot_event">
          <div className="ba-mini-calendar__event_time">2:30 PM – 3:00 PM</div>
          <div className="ba-mini-calendar__event_title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path id="Path_22" data-name="Path 22" d="M7.2,10.4H8.8V12H7.2ZM7.2,4H8.8V8.8H7.2Zm.792-4a8,8,0,1,0,5.662,2.34A8,8,0,0,0,7.992,0ZM8,14.4A6.4,6.4,0,1,1,14.4,8,6.4,6.4,0,0,1,8,14.4Z" fill="#f46e00" />
            </svg>
            Plumbing Rough-In
          </div>
        </div>
        <div className="ba-mini-calendar__event_item dot dot_event">
          <div className="ba-mini-calendar__event_time">4:00 PM – 5:00 PM</div>
          <div className="ba-mini-calendar__event_title">Electrical Rough-In</div>
        </div>
        <div className="ba-mini-calendar__event_item dot dot_event"></div>
      </div>
      <footer className="ba-mini-calendar__footer">
        <p className="ba-mini-calendar__view_more">
          <a href="#">View All</a>
        </p>
      </footer>
    </div>
  );
};

export default MiniCalendar;

const WeekDays = () => {
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return (
    <div className="ba-mini-calendar__weekdays">
      {weekdays.map((day) => (
        <div className="ba-mini-calendar__weekday" key={day}>
          {day}
        </div>
      ))}
    </div>
  );
};

const DaysOfMonth = () => {
  let days = [];

  const dayClassNames = (day) => {
    let currentDay = 26;
    let dna = [6, 7, 8, 16, 17, 29];
    let dnaStart = [6, 16, 29];
    let dnaEnd = [8, 17, 29];
    let classes = classNames({
      'ba-mini-calendar__date': true,
      current: currentDay == day,
      dna: dna.includes(day),
      'dna--start': dnaStart.includes(day),
      'dna--end': dnaEnd.includes(day),
    });
    return classes;
  };

  const hasDot = (day) => {
    let dotDay = [2, 4, 5, 12, 13, 19, 20, 26, 27, 30];
    return dotDay.includes(day);
  };

  for (let day = 1; day <= 30; day++) {
    days.push(
      <Day className={dayClassNames(day)} key={day} dot={hasDot(day)}>
        {day}
      </Day>
    );
  }

  return <div className="ba-mini-calendar__days">{days}</div>;
};

const Day = ({ children, dot, ...rest }) => (
  <button className="ba-mini-calendar__day">
    <div {...rest}>
      {children}
      <div className={classNames({ 'ba-mini-calendar__day_dot': true, visible: dot })} />
    </div>
  </button>
);
