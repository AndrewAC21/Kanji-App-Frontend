import { Carousel } from "flowbite-react";
import KanjiElement from "./KanjiElement";

function KanjiContainer() {
  return (
    <div
      //  className="flex content-center justify-center py-4 w-screen gap-5 box-border overflow-x-auto">
      className="h-80 w-[70%] ml-[calc(100vw*0.15)] mt-10 "
    >
      <Carousel slide={false}>
        <KanjiElement />
        <KanjiElement />
        <KanjiElement />
        <KanjiElement />
        <KanjiElement />
        <KanjiElement />
      </Carousel>
    </div>
  );
}

export default KanjiContainer;
