import { createContext, useState, useEffect } from "react";
import axios from "axios";

const KanjiContext = createContext();
const BASE_URL = "https://kanji-app.up.railway.app";
function KanjiProvider({ children }) {
  const [kanjis, setKanjis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // TODO fix useEffect fetch and use axios
  useEffect(() => {
    async function fetchKanjis() {
      try {
        const response = await axios.get(`${BASE_URL}/kanjis`);
        setLoading(false);
        setKanjis(response.data);
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
