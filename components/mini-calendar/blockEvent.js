import classNames from 'classnames';
import IconTask from './iconTask';
import IconWarning from './iconWarning';

const BlockEvent = ({ type = 'event', responseNeeded = false, children, ...rest }) => {
  const blockEventClassNames = (type) => {
    let classes = classNames({
      'ba-mc__block_event': true,
      [`ba-mc__block_event--${type}`]: type,
    });
    return classes;
  };

  return (
    <>
      <div className="ba-mc__event_item">
        <div className={blockEventClassNames(type)}>
          <div className="ba-mc__block_event__title">
            {type == 'task' && <IconTask />}
            {responseNeeded && <IconWarning />}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockEvent;
