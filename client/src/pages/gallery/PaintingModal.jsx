import { Modal, Row, Col } from 'react-bootstrap';
import styles from './PaintingModal.module.css';

export default function PaintingModal({ show, onHide, painting }) {
    console.log("PaintingModal rendered with painting:", painting);
    console.log("PaintingModal show prop:", show);
  return (
    <Modal show={show} onHide={onHide} dialogClassName={styles.customModalDialog} contentClassName={styles.modalContent} centered>
      <Modal.Header className = {styles.modalHeader} closeButton>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Row className={styles.splitPane}>
          
         
          <Col md={5} className={styles.sourceSection}>
            <div className={styles.sourceCard}>

              <h5 className={styles.tagLabel}>Zoom in on Painting</h5>
              <Col md={12} className={styles.sourceImageContainer}>
                <img src={painting?.paintUrl} alt={painting?.title} className={styles.sourceImage} />
              </Col>
              <div className={styles.sourceTag}>{painting?.artistName}</div>
              <div className={styles.sourceTag}>{painting?.title}</div>
              

              <div className={styles.sourceName}>{painting?.title}</div>
              <div className={styles.sourceDev}>{painting?.artistName}</div>

              {/* Divider inside the card */}
              <div style={{ 
                width: '40px', 
                height: '2px', 
                backgroundColor: '#4facfe', 
                borderRadius: '2px',
                marginTop: '10px' 
              }} />

            </div>
          </Col>

          
          <Col md={5} className={styles.targetSection}>
            <h5 className="mb-4">About this Painting</h5>
            <div className={styles.scrollContainer}>
              
            </div>
          </Col>

        </Row>
      </Modal.Body>
    </Modal>
  );
}                 