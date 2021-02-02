import React, { useContext, useCallback } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

export const AuthenticationButton: React.FC = () => {
  const ctx = useContext(AuthenticationContext);
  return (
    ctx.account
      ? <LogOutButton />
      : <LogInButton />
  );
};

const LogInButton: React.FC = () => {
  const ctx = useContext(AuthenticationContext);
  const logIn = useCallback(() => ctx.login(), []);
  return (
    <button onClick={logIn}>Log in</button>
  );
};

const LogOutButton: React.FC = () => {
  const ctx = useContext(AuthenticationContext);
  const logOut = useCallback(() => ctx.logout(), []);
  return (
    <button onClick={logOut}>Log out</button>
  );
};