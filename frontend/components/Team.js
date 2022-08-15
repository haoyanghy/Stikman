import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Team() {
  return (
    <>
      <div className={styles.teamTitle} id="team">
        Our Team
      </div>
      <CardGroup className={styles.teamCard}>
        <Card>
          <Card.Img
            className={styles.teamImg}
            variant="top"
            src="./avatar.png"
          />
          <Card.Body>
            <Card.Title className={styles.roadmapHeader}>John</Card.Title>
            <Card.Text className={styles.teamDescription}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link className={styles.teamLink} target="_blank" href="/">
              See more...
            </Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            className={styles.teamImg}
            variant="top"
            src="./avatar.png"
          />
          <Card.Body>
            <Card.Title className={styles.roadmapHeader}>Alex</Card.Title>
            <Card.Text className={styles.teamDescription}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link className={styles.teamLink} target="_blank" href="/">
              See more...
            </Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            className={styles.teamImg}
            variant="top"
            src="./avatar.png"
          />
          <Card.Body>
            <Card.Title className={styles.roadmapHeader}>Mary</Card.Title>
            <Card.Text className={styles.teamDescription}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link className={styles.teamLink} target="_blank" href="/">
              See more...
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default Team;
