import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const BASE_URL = "https://kanji-app.up.railway.app";
export default function useKanji(id) {
  const { isLoggedIn, jwt } = useContext(UserContext);
  const [isFav, setIsFav] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  useEffect(() => {
    if (!isLoggedIn) return setIsFav(false);
    async function fetchKanji() {
      try {
        const response = await axios.get(
          `${BASE_URL}/profile/is-favorite/${id}`,
          {
            headers: { Authorization: `Bearer ${jwt}` },
          }
        );
        setIsFav(response.data);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    fetchKanji();
  }, [isLoggedIn]);
  console.log(isFav, id);
  const toggleFav = (id) => {
    isFav ? removeFromFavList(id) : addToFavList(id);
  };
  const removeFromFavList = async (kanjiId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/profile/favorites`, {
        headers: { Authorization: `Bearer ${jwt}` },
        data: { kanjiId: kanjiId },
      });
      setIsFav(false);
    } catch (e) {
      setLoading(false);
      console.log(e);

      setLoading(false);
      setError(true);
    }
  };
  const addToFavList = async (kanjiId) => {
    try {
      const response = await instance.post(`/profile/favorites`, {
        kanjiId,
      });
      setIsFav(true);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true);
      return e;
    }
  };
  return { isFav, toggleFav, loading, error };
}
