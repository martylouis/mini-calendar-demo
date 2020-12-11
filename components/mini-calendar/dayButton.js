import classNames from 'classnames';

const DayButton = ({ children, hasEvent, ...rest }) => (
  <button className="ba-mc__day">
    <div {...rest}>
      {children}
      <div className={classNames({ 'ba-mc__day_dot': true, 'ba-mc__day_dot--hasEvent': hasEvent })} />
    </div>
  </button>
);

export default DayButton;
