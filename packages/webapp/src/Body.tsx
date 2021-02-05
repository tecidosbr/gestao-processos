import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { AuthContext } from './auth';
import { NotFound } from './NotFound';
import { Welcome } from './Welcome';
import { DataAccess } from './DataAccess';

export const Body = withRouter(() => {
    const auth = React.useContext(AuthContext);

    if (!auth.account) {
        return <Welcome />;
    }

    return (
        <div className="container-fluid">
            <Switch>
                <Route path="/" exact>
                    <Welcome />
                </Route>
                <Route path="/gestao-normas" exact>
                    <gestao-normas-webapp />
                </Route>
                <Route path="/gestao-processos" exact>
                    {auth.idTokenDecoded?.groups.includes("408f52cf-93cd-4610-b703-1b1d8075d4ea")
                        ? <DataAccess />
                        : <NotFound />}
                </Route>
                <Route path="/gestao-contratos" exact>
                    {auth.idTokenDecoded?.groups.includes("408f52cf-93cd-4610-b703-1b1d8075d4ea")
                        ? <gestao-contratos-webapp />
                        : <NotFound />}
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div >
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