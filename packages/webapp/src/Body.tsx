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
                    {auth.idToken && <gestao-normas-webapp idToken={auth.idToken}/>}
                </Route>
                <Route path="/gestao-processos" exact>
                    {auth.idToken && auth.idTokenDecoded?.groups.includes("408f52cf-93cd-4610-b703-1b1d8075d4ea")
                        ? <DataAccess />
                        : <NotFound />}
                </Route>
                <Route path="/gestao-contratos" exact>
                    {auth.idToken && auth.idTokenDecoded?.groups.includes("408f52cf-93cd-4610-b703-1b1d8075d4ea")
                        ? <gestao-contratos-webapp idToken={auth.idToken} />
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
            'gestao-contratos-webapp': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { idToken: string }, HTMLElement>;
            'gestao-normas-webapp': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { idToken: string }, HTMLElement>;
        }
    }
}
