import React from 'react';

const Header = ({ loggedInUser, handleLogout }) => {
  return (
    <header style={{ backgroundColor: '#4a90e2', padding: '20px', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {loggedInUser ? (
        <div>
          <p>Hello, {loggedInUser}!</p>
          <button 
            onClick={handleLogout} 
            style={{ backgroundColor: '#e74c3c', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Logout
          </button>
        </div>
      ) : (
        <a href="/login" style={{ backgroundColor: '#ffffff', border: '2px solid #4a90e2', color: '#4a90e2', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '1000px' }}>
          Login
        </a>
      )}
    </header>
  );
};

export default Header;
