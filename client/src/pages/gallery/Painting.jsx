import styles from "./Painting.module.css";

export default function Painting({ title, img, artistName, date, width, height, funFacts, alt }) { 
    console.log("Painting component rendered with title:", title);

    return (
        <div className={styles.paintingContainer}>
        
            <div className={styles.paintingVisualization}>
                <figure style={{width: width/3+40, height: height/3+40}} className={styles.paintingFigure}>
                    <div className={styles.outerBevel}>
                    <div className={styles.flatSurface}>
                        <div className={styles.innerBevel}>
                        <img width={width/3} height={height/3} src={img} alt={alt} className={styles.paintingImage} />
                        </div>
                    </div>
                    </div>
                </figure>
                

            </div>
           
        </div>
    );
}
