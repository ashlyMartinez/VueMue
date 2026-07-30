import Painting from "./Painting.jsx";
import styles from "./GalleryPage.module.css";
import { useState, useRef, useEffect } from "react";
import PaintingModal from "./PaintingModal.jsx";
import paintings from "../../dummydata/DummyData.js";
//import useSound from "use-sound"
import pond_water from "../../assets/sounds/pond_water.ogg"

//const dummyData = [{ id: 1, title: "Painting 1", artistName: "Claude Monet", paintUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437127/2331256/source" }, { id: 2, title: "Painting 2", artistName: "Claude Monet", paintUrl: "https://example.com/painting2.jpg" },  {id: 3, title: "Painting 3", artistName: "Claude Monet", paintUrl: "https://example.com/painting3.jpg" },  {id: 4, title: "Painting 4", artistName: "Claude Monet", paintUrl: "https://example.com/painting4.jpg" },  {id: 5, title: "Painting 5", artistName: "Claude Monet", paintUrl: "https://example.com/painting5.jpg" }];

export default function GalleryPage() {
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRef = useHorizontalScroll();

  return (
    <div className={styles.galleryPageContainer} onWheel={handleScroll}>
      <div className={styles.galleryPageHeader}>
        <h1>Gallery Page</h1>
        <p>Here is our collection of Claude Monet paintings:</p>
      </div>
      <div className={styles.galleryPageContent}>
        {paintings.map((painting) => {
          console.log(`Here is the painting title: ${painting.title}`);
          return (
            <div
              className={styles.paintingWrapper}
              key={painting.id}
              onClick={() => {
                setShowCompareModal(true);
                setSelectedPainting(painting);
                handleClick();
              }}
            >
              <Painting
                title={painting.title}
                img={painting.imageURL}
                artistName={painting.artist}
                date={painting.date}
                width={painting.width}
                height={painting.height}
                funFacts={painting.fun_facts}
                alt={painting.alt_text}
                sound={painting.sound}
              />
            </div>
          );
        })}
      </div>
      {showCompareModal ? (
        <PaintingModal
          show={showCompareModal}
          onHide={() => setShowCompareModal(false)}
          painting={selectedPainting}
        />
      ) : null}
    </div>
  );
}

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}
