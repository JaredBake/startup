import React from 'react';

const MonthSwitcher = ({ currentMonthIndex, setCurrentMonthIndex, months }) => {
  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === 0 ? months.length - 1 : prevIndex - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex === months.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ margin: '30px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
      <button onClick={handlePrevMonth} style={{ fontSize: '2em' }}>&#8592;</button>
      <span style={{ fontSize: '2em', fontWeight: 'bold' }}>{months[currentMonthIndex]}</span>
      <button onClick={handleNextMonth} style={{ fontSize: '2em' }}>&#8594;</button>
    </div>
  );
};

export default MonthSwitcher;
