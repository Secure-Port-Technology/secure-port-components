import { useContext, createContext, useState } from "react";
import { useStorageState } from "./useStorageState";

import type { PropsWithChildren } from "react";

export type UserType = "user" | "manager";

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
  userType: UserType;
  setUserType: (userType: UserType) => void;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
  userType: "user",
  setUserType: () => null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [userType, setUserType] = useState<UserType>("user");

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession("xxx");
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
        userType,
        setUserType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
