import React from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./auth";

export const Nav: React.FC = () => {
    const ctx = React.useContext(AuthenticationContext);
    const [showItems, setShowItems] = React.useState<boolean>(false);
    const toggleShowItems = React.useCallback(() => setShowItems(!showItems), [showItems]);

    if (!ctx.account) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <LogInButton />
                    <div className="collapse navbar-collapse" />
                </div>
            </nav>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <LogOutButton />
                <div className="navbar-brand mx-3">Olá, {ctx.account.name}</div>
                <button className="navbar-toggler" type="button" onClick={toggleShowItems}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showItems ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/gestao-contratos">
                                <span className="nav-link">Gestão de Contratos</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gestao-normas">
                                <span className="nav-link">Gestão de Normas</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gestao-processos">
                                <span className="nav-link">Gestão de Processos</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


const LogInButton: React.FC = () => {
    const ctx = React.useContext(AuthenticationContext);
    const logIn = React.useCallback(() => ctx.login(), [ctx]);
    return (
        <button className="btn btn-primary" onClick={logIn}>Log&nbsp;in</button>
    );
};

const LogOutButton: React.FC = () => {
    const ctx = React.useContext(AuthenticationContext);
    const logOut = React.useCallback(() => ctx.logout(), [ctx]);
    return (
        <button className="btn btn-outline-primary" onClick={logOut}>Log&nbsp;out</button>
    );
};