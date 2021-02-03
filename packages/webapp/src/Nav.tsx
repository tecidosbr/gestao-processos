import React from "react";
import { AuthenticationContext } from "./auth";

export const Nav: React.FC = () => {
    const ctx = React.useContext(AuthenticationContext);

    if (!ctx.account) {
        return <LogInButton />
    }

    console.log(ctx.account);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <LogOutButton />
                {ctx.account?.name}
            </div>
        </nav>
    )
}


const LogInButton: React.FC = () => {
    const ctx = React.useContext(AuthenticationContext);
    const logIn = React.useCallback(() => ctx.login(), []);
    return (
        <button onClick={logIn}>Log in</button>
    );
};

const LogOutButton: React.FC = () => {
    const ctx = React.useContext(AuthenticationContext);
    const logOut = React.useCallback(() => ctx.logout(), []);
    return (
        <button onClick={logOut}>Log out</button>
    );
};