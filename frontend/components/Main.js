import React from "react";
import Slideshow from "./Slideshow";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styles from "../styles/Home.module.css";

const Main = ({ tokenIdsMinted, buttonHandler }) => {
  return (
    <>
      <CardGroup className={styles.mainCard}>
        <Card border="light">
          <Card.Body className={styles.leftCard}>
            <h1 className={styles.mainTitle}>Welcome to Stikman!</h1>
            <Card.Text className={styles.mainDescription}>
              {"It's an NFT collection of interesting Stikman figures."}
              <br />
              {tokenIdsMinted}/20 have been minted.
            </Card.Text>
            {buttonHandler()}
          </Card.Body>
        </Card>

        <Card border="light">
          <Card.Body className={styles.rightCard}>
            <Slideshow />
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Main;
