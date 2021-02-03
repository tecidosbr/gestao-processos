import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

declare global {
        namespace JSX {
        interface IntrinsicElements {
        'gestao-contratos': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
          'gestao-normas': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
          'gestao-processos': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}
