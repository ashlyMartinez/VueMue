import { Modal, Row, Col } from 'react-bootstrap';
// import styles from './PaintingModal.module.css';
import './PaintinModule.css'

export default function PaintingModal({ show, onHide, painting  }) {
    console.log("PaintingModal rendered with painting:", painting);
    console.log("PaintingModal show prop:", show);
  return (
    <div className="pop-up-container"
             role="dialog"
             aria-modal="true"
             aria-labelledby="modal-title"
             style={{zIndex: 10}}
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
                <img className="pop-up-img" src={painting.imageURL} alt={painting.alt}/>

                {/*information displayed to the user in the 2D pop-up window*/}
                <div className="pop-up-info-box">
                    <h1>{painting.title}</h1>
                    <h2>{painting.people?.[0]?.name || "Unknown Artist"}</h2>
                    <p><strong>Period: </strong>{painting.period || "Unknown"}</p>
                    <p><strong>Dated: </strong>{painting.dated || "Unknown"}</p>
                </div>

                
            </div>
        </div>
  );
}                 