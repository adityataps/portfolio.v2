import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.scss';


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {

    const handleScroll = () => {
        if (window.scrollY >= (window.innerHeight - 128)) {
            document.getElementById(styles.navbar)?.classList.add(styles.sticky);
        } else {
            document.getElementById(styles.navbar)?.classList.remove(styles.sticky);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

  return (
    // <div id={styles.navbar}>
    //   <a href="#/home"> home </a>
    //   <a href="#/about"> about </a>
    //   <a href="#/blog"> blog </a>
    //   <a href="#/experiences"> experiences </a>
    //   <a href="#/resume"> resume </a>
    //   <a href="#/contact"> contact </a>
    // </div>

    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      id={styles.navbar}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#/"> Aditya Tapshalkar, </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end navbar-text"
        >
          <Nav>
            <Nav.Link href="#/"> home </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/about"> about </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/blog"> blog </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/experiences"> experiences </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/resume"> resume </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/contact"> contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar expand="lg" className="bg-body-tertiary" id={styles.navbar}>
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default NavBar;
