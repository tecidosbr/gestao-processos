import React from "react";
import { AccountInfo } from "@azure/msal-browser";

export interface AuthenticationContext {
    readonly account: AccountInfo | null;
    readonly login: () => Promise<void>;
    readonly logout: () => Promise<void>;
}

export const AuthenticationContext = React.createContext<AuthenticationContext>({
    account: null,
    login: async () => void 0,
    logout: async () => void 0
});
