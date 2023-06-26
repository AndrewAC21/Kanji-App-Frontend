import { useCallback, useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import useUser from "../hooks/useUser";
import KanjiElement from "../components/Kanji/KanjiElement";

function FavKanjisModal({ showFavKanjisModal, setShowFavKanjisModal }) {
  const { getFavs } = useUser();
  const [favs, setFavs] = useState([]);

  const favList = async () => {
    const { data } = await getFavs();
    setFavs(data);
  };

  useEffect(
    useCallback(() => {
      favList();
    }, [favs]),
    []
  );
  return (
    <Modal
      show={showFavKanjisModal}
      onClose={() => setShowFavKanjisModal(false)}
    >
      <Modal.Header>Your Favorite Kanjis</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col items-center justify-center gap-1">
          {favs.map((kanji) => {
            return <KanjiElement {...kanji} key={kanji.id} />;
          })}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FavKanjisModal;
