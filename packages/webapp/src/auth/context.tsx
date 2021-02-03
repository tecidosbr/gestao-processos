import React from "react";
import { PublicClientApplication, AccountInfo } from "@azure/msal-browser";

import { config } from "./config";

export interface AuthenticationContext {
  readonly account: AccountInfo | null;
  readonly accessToken: string | null;
  readonly login: () => Promise<void>;
  readonly logout: () => Promise<void>;
}

export const AuthenticationContext = React.createContext<AuthenticationContext>({
  account: null,
  accessToken: null,
  login: async () => void 0,
  logout: async () => void 0
});

const msal = new PublicClientApplication(config);

export const AuthenticationContextProvider: React.FunctionComponent<React.PropsWithChildren<{}>> = (props) => {
  const [account, setAccount] = React.useState<AccountInfo | null>(null);
  const [accessToken, setAcessToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const [account = null] = msal.getAllAccounts() ?? null;
    setAccount(account);
  }, []);

  React.useEffect(() => {
    if (!account && accessToken) {
      setAcessToken(null);
    } else if (account && !accessToken) {
      msal.acquireTokenSilent({ scopes: [], account }).then((response) => {
        setAcessToken(response.accessToken);
      });
    }
  }, [account, accessToken]);

  const login = async () => {
    if (!account) {
      const previousLoginResponse = await msal.handleRedirectPromise();
      const previousAccount = previousLoginResponse?.account ?? msal.getActiveAccount();
      if (previousAccount) {
        setAccount(previousAccount);
        setAcessToken(previousLoginResponse?.accessToken ?? null);
      } else {
        const { account, accessToken } = await msal.loginPopup({
          scopes: [],
          prompt: "select_account",
        });
        setAccount(account);
        setAcessToken(accessToken);
      }
    }
  };

  const logout = async () => {
    if (account) {
      await msal.logout({ account });
      setAccount(null);
    }
  };

  const token = '';
  const value = React.useMemo<AuthenticationContext>(() => ({ account, accessToken, login, logout }), [account, accessToken])

  return (
    <AuthenticationContext.Provider value={value}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}
