import React from 'react';
import logo from './pucminas.jpg';

export const NotFound: React.FC = () => {
    return (
        <div className="container-fluid text-center d-flex flex-column justify-content-center">
            <img src={logo} alt="logo" width={200} />
            <h1>Não encontrado</h1>
            <p>A página que você acessou não existe</p>
        </div>
    );
};

