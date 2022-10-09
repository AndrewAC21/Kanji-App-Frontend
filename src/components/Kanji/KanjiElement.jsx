import { useState, useEffect } from "react";
import FavKanjiButton from "./FavKanjiButton";

function KanjiElement({
  hiragana = "hiragana",
  meaning = "meaning",
  kanji = "KAnji",
  romanji = "rōmaji",
}) {
  return (
    <div className="border-red-700 w-auto h-full border-2 relative">
      <FavKanjiButton className="hover:cursor-pointer" />
      <div className="h-full flex flex-col justify-around items-center">
        <h2 className="text-4xl">{hiragana} </h2>

        <h3 className="text-base ">{romanji}</h3>
        <h1 className="text-6xl "> {kanji}</h1>

        <span className="text-base">{meaning}</span>
      </div>
    </div>
  );
}

export default KanjiElement;
