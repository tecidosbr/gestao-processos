import React from 'react';
import logo from './pucminas.jpg';

export const NotFound: React.FC = () => {
    return (
        <div className="container-fluid">
            <img src={logo} alt="logo" />
            <h1>O endereço que você tentou acessar não existe</h1>
        </div>
    );
};

