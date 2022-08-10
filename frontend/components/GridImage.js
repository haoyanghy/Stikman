import React from "react";
import styles from "../styles/Home.module.css";

const GridImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridImage}>
        <img width="400" height="400" src="./stikman/1.png" />
      </div>
      <div className={styles.gridImage}>
        <img width="400" height="400" src="./stikman/1.png" />
      </div>
      <div className={styles.gridImage}>
        <img width="400" height="400" src="./stikman/1.png" />
      </div>
      <div className={styles.gridImage}>
        <img width="400" height="400" src="./stikman/1.png" />
      </div>
    </div>
  );
};

export default GridImage;
