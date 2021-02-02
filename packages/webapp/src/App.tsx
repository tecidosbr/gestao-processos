import React, { useState } from 'react';
import { AuthenticationContextProvider } from './auth';
import { Nav } from './Nav';

export const App: React.FC = () => {
  return (
    <AuthenticationContextProvider>
      <div className="container-fluid">
        <Nav />
      </div>
    </AuthenticationContextProvider>
  );
}
