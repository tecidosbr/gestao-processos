import React, { useContext, useCallback } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import { PublicClientApplication, AccountInfo } from "@azure/msal-browser";

import { config } from "./config";

const msal = new PublicClientApplication(config);

export const AuthenticationContextProvider: React.FunctionComponent<React.PropsWithChildren<{}>> = (props) => {
  const [account, setAccount] = React.useState<AccountInfo | null>(null);

  React.useEffect(() => {
    const  [ initialAccount = null ] = msal.getAllAccounts() ?? []; 
    setAccount(initialAccount);
  }, []);

  const login = async () => {
    const { account } = await msal.loginPopup({
      scopes: [],
      prompt: "select_account",
    });
    setAccount(account);
  };

  const logout = async () => {
    if (account) {
      msal.logout({ account });
      setAccount(null);
    }
  };

  const value = React.useMemo<AuthenticationContext>(() => ({ account, login, logout }), [account])

  return (
    <AuthenticationContext.Provider value={value}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}
