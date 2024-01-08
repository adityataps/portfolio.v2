import React, { useEffect, useState, useRef } from 'react';
import styles from './NavBar.module.scss';


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Fade from "react-bootstrap/Fade";

function NavBar(props) {

  const [isHomePage, setIsHomePage] = useState(props.currRoute);

  // console.log('from navbar, current route is', props.currRoute)


  // const isHomePage = useRef(window.scrollY === 0);

  const applySticky = () => {
    if (window.scrollY >= (window.innerHeight - 128)) {
        document.getElementById(styles.navbar)?.classList.add(styles.sticky);
    } else {
        document.getElementById(styles.navbar)?.classList.remove(styles.sticky);
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", applySticky);
      applySticky();
      return () => window.removeEventListener("scroll", applySticky);
  }, []);

  // debugger;
  // let isHomePage = window.scrollY === 0;


  // console.log(isHomePage.current)

  const handleSelect = (selectedKey) => {
    console.log('test', selectedKey);
  }

  // debugger;

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary`}
      id={styles.navbar}
      data-bs-theme="dark"
    >
      <Container>
        <Fade in={!isHomePage}>
          <Navbar.Brand id={styles.navbarBrand}>
            Aditya Tapshalkar,
          </Navbar.Brand>
        </Fade>
        <Navbar.Toggle />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end navbar-text"
        >
          <Nav activeKey={props.currRoute} onSelect={handleSelect}>
            <Nav.Link href="#/" eventKey="/" className={`${styles.navLink} ${props.currRoute === '/' ? styles.selectedNav : ''}`}> home </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/about" eventKey="/about" className={`${styles.navLink} ${props.currRoute === '/about' ? styles.selectedNav : ''}`}> about </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/blog" eventKey="/blog" className={`${styles.navLink} ${props.currRoute === '/blog' ? styles.selectedNav : ''}`}> blog </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/experiences" eventKey="/experiences" className={`${styles.navLink} ${props.currRoute === '/experiences' ? styles.selectedNav : ''}`}> experiences </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/resume" eventKey="/resume" className={`${styles.navLink} ${props.currRoute === '/resume' ? styles.selectedNav : ''}`}> resume </Nav.Link>
            <Navbar.Text className={styles.linkSeparator}> • </Navbar.Text>

            <Nav.Link href="#/contact" eventKey="/contact" className={`${styles.navLink} ${props.currRoute === '/contact' ? styles.selectedNav : ''}`}> contact </Nav.Link>
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
