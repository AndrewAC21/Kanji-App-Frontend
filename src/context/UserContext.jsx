import { createContext, useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const instance = axios.create({
    baseURL: "https://kanji-app.up.railway.app",
    headers: {},
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {isLoggedIn ? "Logged In" : "Not Logged in"}
      {children}
    </UserContext.Provider>
  );
};
