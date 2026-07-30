import { Modal, Row, Col } from "react-bootstrap";
import useSound from "use-sound";
import { useEffect } from "react";
// import styles from './PaintingModal.module.css';
import "./PaintingModule.css";

export default function PaintingModal({ show, onHide, painting }) {
  console.log("PaintingModal rendered with painting:", painting);
  console.log("PaintingModal show prop:", show);
  const [play, { stop }] = useSound(painting?.sound, { loop: false });

  useEffect(() => {
    if (show && painting?.sound) {
      play();
    } else {
      stop();
    }


    // Cleanup: ensure sound stops if component unmounts
    return () => stop();
  }, [show, painting, play, stop]);
  return (
    <div
      className="pop-up-container"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{ zIndex: 10 }}
    >
      {/*pop-up window*/}
      <div className="pop-up-window">
        {/*button to close pop-up window - when user clicks button, selected art state goes to null*/}
        <button
          className="pop-up-button"
          onClick={() => onHide()}
          aria-label="Close details"
        >
          &times; {/*x symbol for the close of button*/}
        </button>
        {/*set img source to the primary url of the selected art, set alt text to the current painting's alt text state*/}
        <img
          className="pop-up-img"
          src={painting.imageURL}
          alt={painting.alt}
        />

        {/*information displayed to the user in the 2D pop-up window*/}
        <div className="pop-up-info-box">
          <h1>{painting.title}</h1>
          <h2>{painting.artist || "Unknown Artist"}</h2>
          <p>
            <strong>Dated: </strong>
            {painting.date || "Unknown"}
          </p>
          <ul>
            {painting.fun_facts.map(fact => {
                return <li>{fact}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
