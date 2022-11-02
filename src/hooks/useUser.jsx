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
      setJWT(token);
      setIsLoggedIn(true);
      return response;
    } catch (e) {
      return e;
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setJWT(null);
    window.sessionStorage.removeItem("jwt");
  };
  const register = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/sign-up`, { ...data });
      return response;
    } catch (error) {
      return error.response;
    }
  };
  const settings = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile/settings`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      setLoading(false);
      return response;
    } catch (e) {
      setLoading(false);
      setError(true);
      return e;
    }
  };

  const getFavs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/profile/favorites`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      return response;
    } catch (e) {
      return e;
    }
  }

  return {
    register,
    logIn,
    logOut,
    settings,
    loading,
    error,
    getFavs
  };
}
