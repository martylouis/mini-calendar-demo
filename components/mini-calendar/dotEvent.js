import IconWarning from './iconWarning';

const DotEvent = ({ responseNeeded, time, children, ...rest }) => {
  return (
    <div className="ba-mc__schedule__event" {...rest}>
      <div className="ba-mc__dot_event">
        <div className="ba-mc__dot_event__time">{time}</div>
        <div className="ba-mc__dot_event__title">
          {responseNeeded && <IconWarning />}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DotEvent;
