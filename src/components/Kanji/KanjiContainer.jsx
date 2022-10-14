import { useContext } from "react";
import { Carousel } from "flowbite-react";
import KanjiElement from "./KanjiElement";
import { KanjiContext } from "../../context/KanjiContext";

function KanjiContainer() {
  const { kanjis } = useContext(KanjiContext);
  return (
    <div
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
