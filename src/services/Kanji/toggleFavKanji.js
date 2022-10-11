import axios from "axios";

const AddToFavKanjis = (kanjiId) => {
  console.log("Agregado a favoritos", kanjiId);
  // axios.post("https://kanji-app.app.railway.up/profile/favorites", kanji);
};

const RemoveFromFavKanjis = (kanji) => {
  console.log("Quitado de favoritos", kanji);
  // axios.delete("https://kanji-app.app.railway.up/profile/favorites", kanji);
};

export { AddToFavKanjis, RemoveFromFavKanjis };
