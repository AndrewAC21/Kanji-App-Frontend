import { useContext } from "react";
import { Carousel } from "flowbite-react";
import KanjiElement from "./KanjiElement";
import { KanjiContext } from "../../context/KanjiContext";

function KanjiContainer() {
  const kanjisData = [
    {
      kanji: "一",
      hiragana: "いち",
      romanji: "ichi",
      meaning: "one",
      id: 1,
      isFav: false,
    },
    { kanji: "二", hiragana: "に", romanji: "ni", meaning: "two" },
    { kanji: "三", hiragana: "さん", romanji: "san", meaning: "three" },
    { kanji: "四", hiragana: "よん", romanji: "yon", meaning: "four" },
    { kanji: "五", hiragana: "ご", romanji: "go", meaning: "five" },
    { kanji: "六", hiragana: "ろく", romanji: "roku", meaning: "six" },
    { kanji: "七", hiragana: "なな", romanji: "nana", meaning: "seven" },
    { kanji: "八", hiragana: "はち", romanji: "hachi", meaning: "eight" },
    { kanji: "九", hiragana: "きゅう", romanji: "kyuu", meaning: "nine" },
    { kanji: "十", hiragana: "じゅう", romanji: "juu", meaning: "ten" },
    { kanji: "百", hiragana: "ひゃく", romanji: "hyaku", meaning: "hundred" },
    { kanji: "千", hiragana: "せん", romanji: "sen", meaning: "thousand" },
    {
      kanji: "万",
      hiragana: "",
      katakana: "kat",
      romanji: "man",
      meaning: "ten tousand",
    },
  ];
  const { kanjis } = useContext(KanjiContext);
  return (
    <div
      //  className="flex content-center justify-center py-4 w-screen gap-5 box-border overflow-x-auto">
      className="h-96 w-[70%] ml-[calc(100vw*0.15)] mt-10  box-border"
    >
      <Carousel slide={false} indicators={false}>
        {kanjis.map((kanji) => (
          <KanjiElement {...kanji} key={kanji.id} />
        ))}
      </Carousel>
    </div>
  );
}

export default KanjiContainer;
