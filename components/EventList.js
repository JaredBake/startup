import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div key={index} style={{ backgroundColor: '#e1e1e1', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
          {event}
        </div>
      ))}
    </div>
  );
};

export default EventList;
