import React from 'react';

import '../app.css';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid backImage text-center'>
      <div >

        {authState !== AuthState.Unknown && <h1>Jared Bake</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}
