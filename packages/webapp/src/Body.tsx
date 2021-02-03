import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

export const Body = withRouter(({ history }) => {
    return (
        <div className="container-fluid">
            <Switch>
                <Route path="/gestao-normas">
                    <gestao-normas-webapp />
                </Route>
                <Route path="/gestao-processos">
                    <gestao-processos-webapp />
                </Route>
                <Route path="/gestao-contratos">
                    <gestao-contratos-webapp />
                </Route>
            </Switch>
        </div>
    );
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gestao-contratos-webapp': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'gestao-normas-webapp': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'gestao-processos-webapp': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
