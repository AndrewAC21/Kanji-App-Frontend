import { useState, useEffect } from "react";
import axios from "axios";

export default function useKanji(id) {
  let isLoggedIn = false;
  const [isFav, setIsFav] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!isLoggedIn) return;
    async function fetchKanji() {
      try {
        const response = await fetch(
          `https://kanji-app.up.railway.app/profile/is-favorite/${id}`
        );
        const data = await response.json();
        console.log("fetching");
        setIsFav(data.isFav);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    fetchKanji();
  }, []);
  const toggleFav = (id) => {
    isFav ? RemoveFromFavKanjis(id) : AddToFavKanjis(id);
    setIsFav(!isFav);
  };
  return { isFav, toggleFav, loading, error };
}
