import React, { useState } from 'react';
import './calendar.css';

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState({});

  const handleAddEvent = () => {
    const event = prompt('Enter event:');
    const date = prompt('Enter date (YYYY-MM-DD):');
    if (event && date) {
      const eventDate = new Date(date);
      if (!isNaN(eventDate)) {
        const eventMonth = eventDate.getMonth();
        setEvents((prevEvents) => {
          const monthEvents = [...(prevEvents[eventMonth] || []), { event, date: eventDate }];
          monthEvents.sort((a, b) => a.date - b.date);
          return {
            ...prevEvents,
            [eventMonth]: monthEvents,
          };
        });
      } else {
        alert('Invalid date format. Please enter a valid date.');
      }
    }
  };

  const handleDeleteEvent = (month, index) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [month]: prevEvents[month].filter((_, i) => i !== index),
    }));
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="arrow left-arrow" onClick={handlePrevMonth}>&#8592;</button>
        <h2>{monthNames[currentMonth]}</h2>
        <button className="arrow right-arrow" onClick={handleNextMonth}>&#8594;</button>
      </div>
      <ul className="event-list">
        {(events[currentMonth] || []).map((event, index) => (
          <li key={index}>
            {event.event} - {event.date.toDateString()}
            <button onClick={() => handleDeleteEvent(currentMonth, index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="calendar-footer">
        <button className="add-button" onClick={handleAddEvent}>+</button>
        <a className='git-button' href="https://github.com/JaredBake/startup.git" rel="noreferrer">GitHub</a>
      </div>
    </div>
  );
}
