import { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../context/UserContext";
export default function useUser() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [token, setToken] = useState("");
  const instance = axios.create({
    baseURL: "https://kanji-app.up.railway.app",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const register = async (data) => {
    try {
      const response = await instance.post("/sign-up", { ...data });
      return response;
    } catch (error) {
      console.log("useUser");
      console.log(error);
      return error.response;
    }
  };

  const logIn = async ({ email, password }) => {
    setError(false);
    console.log(email, password);
    console.log("fetching desde useUser");
    try {
      const response = await instance.post("/login", {
        email,
        password,
      });
      console.log(response.data);

      setLoading(false);
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true);
      return data;
    }
  };

  const logOut = () => {
    setToken("");
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsLoggedIn(false);
  };

  const settings = async () => {
    const response = await instance.get("/profile/settings");
    console.log(response);
    console.log(data);
    if (response.status !== 200) {
      setLoading(false);
      setError(true);
      return data;
    }
    setLoading(false);
    return data;
  };

  const removeFromFavList = async (kanjiId) => {
    const response = await instance.delete(`/profile/favorite`, {
      data: kanjiId,
    });
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.status !== 200) {
      setLoading(false);
      setError(true);
      return data;
    }
    setLoading(false);
    return data;
  };
  const addToFavList = async (kanjiId) => {
    const response = await instance.post(`/profile/favorite`, {
      data: kanjiId,
    });
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.status !== 200) {
      setLoading(false);
      setError(true);
      return data;
    }
    setLoading(false);
    return data;
  };

  return {
    register,
    logIn,
    logOut,
    settings,
    addToFavList,
    removeFromFavList,
    loading,
    error,
  };
}
