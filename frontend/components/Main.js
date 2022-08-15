import React from "react";
import ProgressBar from "./ProgressBar";
import Slideshow from "./Slideshow";
import styles from "../styles/Home.module.css";

const Main = ({ tokenIdsMinted, buttonHandler }) => {
  return (
    <div className={styles.main}>
      <ProgressBar />
      <div>
        <h1 className={styles.title}>Welcome to Stikman!</h1>
        <div className={styles.description}>
          {"It's an NFT collection of interesting Stikman figures."}
          <br />
          <br />
          {tokenIdsMinted}/20 have been minted.
        </div>
        {buttonHandler()}
      </div>
      <Slideshow />
    </div>
  );
};

export default Main;
