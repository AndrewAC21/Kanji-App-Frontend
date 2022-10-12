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

  /* onst logIn = async ({ email, password }) => {
    console.log(email, password);
    console.log("fetching desde context");
    const response = await instance.post("/login", {
      email,
      password,
    });
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.status !== 200) {
      return "error";
    }
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsLoggedIn(true);
  }; */
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {isLoggedIn ? "Logged In" : "Not Logged in"}
      {children}
    </UserContext.Provider>
  );
};
