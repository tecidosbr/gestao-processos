import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";

export const Body = withRouter(({ history }) => {
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
