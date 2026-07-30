import GridExample from "./pages/GalleryCard.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import useSound from "use-sound"
import frogs_insects_pond from "./assets/sounds/frogs_insects_pond.wav"
import man_smoking_cigar from "./assets/sounds/man_smoking_cigar.mp3"
import ocean from "./assets/sounds/ocean.wav"
import pond_water from "./assets/sounds/pond_water.ogg"
import romantic from "./assets/sounds/romantic.wav"
import Button from "react-bootstrap/Button";
import { useState } from "react";
import GalleryPage from "./pages/gallery/GalleryPage.jsx"

function App() {


  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(pond_water, {loop: true});

  const handleClick = () => {
    if (isPlaying) {
      stop();
    }
    else {
      play();
    }

    setIsPlaying(!isPlaying);
  }
  return(
  <>
      <GalleryPage   />
  </>
  )
}

export default App