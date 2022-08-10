import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Home.module.css";

function Slideshow() {
  return (
    <Carousel variant="dark" className={styles.slideshow}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./stikman/1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./stikman/11.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./stikman/20.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./stikman/15.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./stikman/3.png"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./stikman/8.png"
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
