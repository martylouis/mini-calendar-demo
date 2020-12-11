const DayNames = () => {
  const day_names_two = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const day_names_three = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="ba-mc__day_names">
      {day_names_three.map((day_name) => (
        <div className="ba-mc__day_name" key={day_name}>
          {day_name}
        </div>
      ))}
    </div>
  );
};

export default DayNames;
