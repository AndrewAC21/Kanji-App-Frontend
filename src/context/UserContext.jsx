import { createContext } from "react";
import useUser from "../hooks/useUser";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isLoggedIn, loading, error } = useUser();

  return (
    <UserContext.Provider value={{ isLoggedIn, loading, error }}>
      {isLoggedIn ? "Logged In" : "Not Logged in"}
      {children}
    </UserContext.Provider>
  );
};
