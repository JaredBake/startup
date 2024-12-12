import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './app.css';
import { Calendars } from './calendars/calendars';
import { AuthState } from './login/authState';
import { Login } from './login/login';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div>
              <h1>Group Calendar</h1>
              
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item bg-black'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {/* <li className='nav-item'>
                  <NavLink className='nav-link' to='/calendars'>
                    Calendars
                  </NavLink>
                </li> */}
              {authState === AuthState.Authenticated && (
                <li className='nav-item bg-black'>
                  <NavLink className='nav-link' to='calendars'>
                    Calendars
                  </NavLink>
                </li>
              )}
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/calendars' element={<Calendars />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-dark text-muted'>
          <div className='container-fluid'>
            <span className='text-reset'>Jared Bake</span>
          </div>
          <a className='git-button' href="https://github.com/JaredBake/startup.git" rel="noreferrer">GitHub</a>
        </footer>
        <div className='time-display'> 
          <Time />
        </div>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

function Time() {

  const [time, setTime] = React.useState(new Date());
 
   React.useEffect(() => {
     setInterval(() => {
      setTime(new Date());
     }, 1000);
   }, []);
 
  return <span>{time.toLocaleString("en-US", {
 
   dateStyle: "full",
   timeStyle: "medium",
     hour12: false,
   
 })} </span>;
}

export default App;
