import React, { useState, useEffect } from "react";
import {
  AddToFavKanjis,
  RemoveFromFavKanjis,
} from "../../services/Kanji/toggleFavKanji";

function FavKanjiButton() {
  const [favKanji, setFavKanji] = useState(true);
  useEffect(() => {
    favKanji ? AddToFavKanjis("favorito") : RemoveFromFavKanjis("no favorito");
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={favKanji ? "red" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      onClick={() => setFavKanji(!favKanji)}
      className="w-10 h-10 absolute right-16 top-5 hover:cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

export default FavKanjiButton;
