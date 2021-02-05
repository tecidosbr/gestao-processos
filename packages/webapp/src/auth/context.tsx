import React from "react";
import { PublicClientApplication, AccountInfo } from "@azure/msal-browser";
import jwt from "jwt-decode";
import { config } from "./config";

interface IdTokenDecoded {
  groups: string;
}
interface AccessTokenDecoded {
  family_name: string;
  given_name: string;
}
export interface IAuthContext {
  readonly account: AccountInfo | null;
  readonly idToken: string | null;
  readonly idTokenDecoded: IdTokenDecoded | null;
  readonly accessTokenDecoded: AccessTokenDecoded |  null;
  readonly login: () => Promise<void>;
  readonly logout: () => Promise<void>;
}

export const AuthContext = React.createContext<IAuthContext>({
  account: null,
  idToken: null,
  idTokenDecoded: null,
  accessTokenDecoded: null,
  login: async () => void 0,
  logout: async () => void 0
});

const msal = new PublicClientApplication(config);

export const AuthContextProvider: React.FunctionComponent<React.PropsWithChildren<{}>> = (props) => {
  const [account, setAccount] = React.useState<AccountInfo | null>(null);
  const [idToken, setIdToken] = React.useState<string | null>(null);
  const [idTokenDecoded, setIdTokenDecoded] = React.useState<IdTokenDecoded | null>(null);
  const [accessTokenDecoded, setAccessTokenDecoded] = React.useState<any>(null);

  React.useEffect(() => {
    const [account = null] = msal.getAllAccounts() ?? null;
    setAccount(account);
  }, []);

  React.useEffect(() => {
    if (!account && idToken) {
      setIdToken(null);
      setIdTokenDecoded(null);
      setAccessTokenDecoded(null);
    } else if (account && !idToken) {
      msal.acquireTokenSilent({ scopes: [], account }).then((response) => {
        setIdToken(response.idToken);
        setIdTokenDecoded(jwt(response.idToken));
        setAccessTokenDecoded(jwt(response.accessToken));
      });
    }
  }, [account, idToken]);
  console.log(idTokenDecoded);
  console.log(accessTokenDecoded);
  const value = React.useMemo<IAuthContext>(() => ({
    account,
    idToken,
    idTokenDecoded,
    accessTokenDecoded,
    async login() {
      if (!account) {
        const previousLoginResponse = await msal.handleRedirectPromise();
        const previousAccount = previousLoginResponse?.account ?? msal.getActiveAccount();
        if (previousAccount) {
          setAccount(previousAccount);
          setIdToken(previousLoginResponse?.idToken ?? null);
          setIdTokenDecoded(previousLoginResponse?.idToken ? jwt(previousLoginResponse.idToken) : null);
          setAccessTokenDecoded(previousLoginResponse?.accessToken ? jwt(previousLoginResponse.accessToken) : null);
        } else {
          const { account, idToken, accessToken } = await msal.loginPopup({
            scopes: [],
            prompt: "select_account",
            redirectUri: "/",
          });
          setAccount(account ?? msal.getActiveAccount());
          setIdToken(idToken);
          setAccessTokenDecoded(jwt(accessToken));
        }
      }
    },
    async logout() {
      if (account) {
        await msal.logout({ account });
        setAccount(null);
        setIdToken(null);
        setAccessTokenDecoded(null);
      }
    }
  }), [account, idToken, idTokenDecoded, accessTokenDecoded])

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
