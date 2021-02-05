import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from './auth';
import { Nav } from './Nav';
import { Body } from './Body';

export const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Nav />
        <Body />
      </Router>
    </AuthContextProvider>
  );
}
