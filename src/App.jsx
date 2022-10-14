import { Suspense } from "react";
import KanjiContainer from "./components/Kanji/KanjiContainer";
import Header from "./components/Header/Header";
import { KanjiProvider } from "./context/KanjiContext";
function App() {
  return (
    <>
        <Header />
        <KanjiProvider>
          <KanjiContainer />
        </KanjiProvider>
    </>
  );
}

export default App;
