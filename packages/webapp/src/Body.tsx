import React, { useContext, useEffect } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { AuthenticationContext } from './auth';

export const Body = withRouter(({ history }) => {
    const authCtx = useContext(AuthenticationContext);

    useEffect(() => {
        if (!authCtx.account) {
            history.push('/');
        }
    }, [authCtx.account, history]);

    return (
        <div className="container-fluid">
            <Switch>
                <Route path="/gestao-normas">
                    <gestao-normas />
                </Route>
                <Route path="/gestao-processos">
                    <gestao-processos />
                </Route>
                <Route path="/gestao-contratos">
                    <gestao-contratos />
                </Route>
            </Switch>
        </div>
    );
});
