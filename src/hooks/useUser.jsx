import { useState } from "react";
import axios from "axios";

export default function useUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [token, setToken] = useState("");
  const instance = axios.create({
    baseURL: "https://kanji-app.up.railway.app",
    headers: {},
  });

  const logIn = async ({ username, password }) => {
    const response = await instance.post("/login", { username, password });
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.status !== 200) {
      setLoading(false);
      setError(true);
      return data;
    }
    setLoading(false);
    setToken(data.auth_token);
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setToken("");
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setIsLoggedIn(false);
  };

  const settings = async () => {
    const response = await instance.get("/profile/settings");
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
    isLoggedIn,
    logIn,
    logOut,
    settings,
    addToFavList,
    removeFromFavList,
    loading,
    error,
  };
}
