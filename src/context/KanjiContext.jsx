import { createContext, useState, useEffect } from "react";
import {
  AddToFavKanjis,
  RemoveFromFavKanjis,
} from "../services/Kanji/toggleFavKanji";

const KanjiContext = createContext();

function KanjiProvider({ children }) {
  const [kanjis, setKanjis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // TODO fix useEffect fetch and use axios
  useEffect(() => {
    async function fetchKanjis() {
      try {
        const response = await fetch("https://kanji-app.up.railway.app/kanjis");
        const data = await response.json();
        setLoading(false);
        setKanjis(data);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    }
    fetchKanjis();
  }, []);

  return (
    <KanjiContext.Provider value={{ kanjis }}>{children}</KanjiContext.Provider>
  );
}

export { KanjiContext, KanjiProvider };
