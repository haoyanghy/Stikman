import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
// import React, { useState } from "react";

function Navibar() {
  // Problem: Can't find a way to use variable inside of double quotes of href
  // const [navLinks, setNavLinks] = useState(["About", "Roadmap", "Team"]);
  // const navLinksMap = navLinks.map((navLink, index) => {
  //   return (
  //     <motion.div whileHover={{ scale: 1.2 }}>
  //       <Nav.Link href="">{navLink}</Nav.Link>
  //     </motion.div>
  // );
  // });
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <motion.div whileHover={{ scale: 1.3 }}>
          <Navbar.Brand href="/">Stikman</Navbar.Brand>
        </motion.div>

        <Nav className="me-auto">
          {/* {navLinksMap} */}
          <motion.div whileHover={{ scale: 1.2 }}>
            <Nav.Link href="#about">About</Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Nav.Link href="#team">Team</Nav.Link>
          </motion.div>
        </Nav>

        {/* Should be link to discord SERVER */}
        <Navbar.Brand target="_blank" href="https://discord.com/">
          <motion.div
            animate={{
              rotate: [360, 0, 0, 360],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <img
              src="/discord.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Discord logo"
            />{" "}
          </motion.div>
        </Navbar.Brand>

        {/* Link to Twitter PAGE */}
        <Navbar.Brand target="_blank" href="https://twitter.com/">
          <motion.div
            animate={{
              rotate: [360, 0, 0, 360],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <img
              src="/twitter.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Twitter logo"
            />
          </motion.div>
        </Navbar.Brand>

        {/* Link to Instagram PAGE */}
        <Navbar.Brand target="_blank" href="https://www.instagram.com/">
          <motion.div
            animate={{
              rotate: [360, 0, 0, 360],
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <img
              src="/instagram.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Instagram logo"
            />
          </motion.div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navibar;
