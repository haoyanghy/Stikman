import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/Home.module.css";

function Team() {
  return (
    <>
      <div className={styles.altTitle} id="team">
        <h1> Our Team </h1>
      </div>
      <CardGroup className={styles.card}>
        <Card>
          <Card.Img
            className={styles.teamImg}
            variant="top"
            src="./avatar.png"
          />
          <Card.Body>
            <Card.Title className={styles.roadmapHeader}>John</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Nav.Link className={styles.teamLink} href="/">
              See more...
            </Nav.Link>{" "}
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
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Nav.Link className={styles.teamLink} href="/">
              See more...
            </Nav.Link>{" "}
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
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Nav.Link className={styles.teamLink} href="/">
              See more...
            </Nav.Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default Team;
