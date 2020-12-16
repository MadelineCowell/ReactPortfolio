  
import React from "react";
import Navbar from "react-bootstrap/Navbar"
import { Form, Button, FormControl } from "react-bootstrap";
import Nav from "react-bootstrap/Nav"
import "./navbar.css"


function Navigation() {
  return (
    // <Container  fluid="true">
    //   <Navbar className="navbar">
    //         <Col className="links">
    //           <a className="main" href="/">main </a>
    //           <a className="about" href="/about">about </a>
    //           <a className="projects" href="/projects">projects </a>
    //         </Col>
    //         <Col >
    //           <Button className="contact">CONTACT</Button>
    //         </Col>
    //   </Navbar>
    // </Container>
    <>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Welcome</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Projects</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Contact</Button>
    </Form>
  </Navbar>
</>
  );
}
export default Navigation;