import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Navibar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Stikman</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
        </Nav>

        {/* Should be link to discord SERVER */}
        <Navbar.Brand href="https://discord.com/">
          <img
            src="/discord.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Discord logo"
          />
        </Navbar.Brand>

        {/* Link to Twitter PAGE */}
        <Navbar.Brand href="https://twitter.com/">
          <img
            src="/twitter.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Twitter logo"
          />
        </Navbar.Brand>

        {/* Link to Instagram PAGE */}
        <Navbar.Brand href="https://www.instagram.com/">
          <img
            src="/instagram.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Instagram logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navibar;
