import styles from "./Painting.module.css";
export default function Painting({ title, img }) { 
    console.log("Painting component rendered with title:", title);

    return (
        <div className={styles.paintingContainer}>
        
            <div className={styles.paintingVisualization}>
                <img src={img} alt={title} className={styles.paintingImage} />

            </div>
            <div className={styles.paintingDetails}>
                <h4>{title}</h4>
            </div>
        </div>
    );
}
