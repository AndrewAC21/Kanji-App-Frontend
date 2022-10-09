import { useState } from "react";
import KanjiContainer from "./components/Kanji/KanjiContainer";
import { Carousel, Footer } from "flowbite-react";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header />
      <KanjiContainer />
    </>
  );
}

export default App;
