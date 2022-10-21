import FavKanjiButton from "./FavKanjiButton";
function KanjiElement(kanji) {
  return (
    <div className=" bg-slate-200 w-full h-full border-2 relative">
      <FavKanjiButton kanjiId={kanji.id} className="hover:cursor-pointer" />
      <div className="h-full flex flex-col justify-around items-center">
        <h2 className="text-4xl mt-10">{kanji.hiragana}</h2>

        <h3 className="text-base">{kanji.furigana}</h3>
        <h1 className="text-6xl">{kanji.pictogram}</h1>

        <span className="text-base mb-10">{kanji.meaning}</span>
      </div>
    </div>
  );
}

export default KanjiElement;
