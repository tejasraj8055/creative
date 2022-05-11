
import React from 'react'
import {Navbar, Nav,Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant='dark' expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Creative</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
     <div>
     <Nav
        className="ml-auto my-2 my-lg-0"
        style={{ maxHeight: '80px' }}
        navbarScroll
      >
        <Nav.Link href="/cart">Home</Nav.Link>
        <Nav.Link href="/login">About</Nav.Link>
        <Nav.Link href="/cart">Services</Nav.Link>
        <Nav.Link href="/login">Work</Nav.Link>
        <Nav.Link href="/login">Blog</Nav.Link>
      </Nav>
     </div>
     <div>
     <Button variant="outline-info">Contact</Button>
     </div>
      
        
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header