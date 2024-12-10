import React, { useState } from 'react';
import EventList from './components/EventList';
import Header from './components/Header';
import LoginButton from './components/LoginButton';
import MonthSwitcher from './components/MonthSwitcher';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser') || null);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const events = {
    "January": ["January 1, 2024 - 10:00 AM", "January 10, 2024 - 2:00 PM"],
    "February": ["February 5, 2024 - 1:30 PM", "February 14, 2024 - 4:00 PM"],
    // Add other months...
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  return (
    <div>
      <Header loggedInUser={loggedInUser} handleLogout={handleLogout} />
      <h1>Jared Bake</h1>
      <div>{months[currentMonthIndex]}</div>
      <MonthSwitcher 
        currentMonthIndex={currentMonthIndex} 
        setCurrentMonthIndex={setCurrentMonthIndex} 
        months={months}
      />
      <EventList events={events[months[currentMonthIndex]]} />
      {!loggedInUser && <LoginButton />}
    </div>
  );
};

export default App;
