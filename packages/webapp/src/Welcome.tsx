import React from 'react';
import { AuthContext } from './auth';
import logo from './pucminas.jpg';

export const Welcome: React.FC = () => {
    const auth = React.useContext(AuthContext);

    if (!auth.account) {
        return (
            <div className="container-fluid text-center d-flex flex-column justify-content-center">
                <img src={logo} alt="logo" width={200} />
                <h1>Bem vindo ao SIGO</h1>
                <p>Faça login para acessar as funcionalidades</p>
            </div>
        );
    }

    return (
        <div className="container-fluid text-center d-flex flex-column justify-content-center">
            <img src={logo} alt="logo" width={200} />
            <h1>Bem vindo ao SIGO {auth.accessTokenDecoded?.given_name} {auth.accessTokenDecoded?.family_name}</h1>
        </div>
    );
};

