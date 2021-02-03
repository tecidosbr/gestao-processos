import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { AuthenticationContextProvider } from './auth';
import { Nav } from './Nav';
import { Body } from './Body';

export const App: React.FC = () => {
  return (
    <AuthenticationContextProvider>
      <Router>
        <Nav />
        <Body />
      </Router>
    </AuthenticationContextProvider>
  );
}
