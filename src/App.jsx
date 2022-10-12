import { Suspense } from "react";
import KanjiContainer from "./components/Kanji/KanjiContainer";
import Header from "./components/Header/Header";
import { KanjiProvider } from "./context/KanjiContext";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <KanjiProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <KanjiContainer />
          </Suspense>
        </KanjiProvider>
      </UserProvider>
    </>
  );
}

export default App;
