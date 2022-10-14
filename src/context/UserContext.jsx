import { createContext, useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));
  const [isLoggedIn, setIsLoggedIn] = useState(() => false);

  return (
    <UserContext.Provider value={{ jwt, setJWT, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
