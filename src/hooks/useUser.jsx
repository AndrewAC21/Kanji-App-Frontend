import { useState, useContext, useCallback, useEffect } from "react";
import axios from "axios";

import { UserContext } from "../context/UserContext";

const BASE_URL = "https://kanji-app.up.railway.app";
export default function useUser() {
  const { jwt, setJWT } = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(
    useCallback(() => {
      if (jwt) setIsLoggedIn(true);
    }, []),
    []
  );
  const logIn = async ({ email, password }) => {
    setError(false);
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      const token = await response.data.token.access_token;
      window.sessionStorage.setItem("jwt", token);
      setIsLoggedIn(true);
      return response;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
    window.sessionStorage.removeItem("jwt");
  };
  const register = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/sign-up`, { ...data });
      return response;
    } catch (error) {
      console.log("useUser");
      console.log(error);
      return error.response;
    }
  };
  const settings = async () => {
    console.log(instance.defaults.headers);
    try {
      const response = await instance.get("/profile/settings");
      console.log(response);
      setLoading(false);
      return response;
    } catch (e) {
      setLoading(false);
      setError(true);
      return e;
    }
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
