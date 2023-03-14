import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="md" className="mb-4">
      <Navbar.Brand href="#" className="font-weight-bold text-uppercase">Anamaya was BORED!</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#topics" className="text-uppercase">Topics</Nav.Link>
          <Nav.Link href="#architecture" className="text-uppercase">Architecture</Nav.Link>
          <Nav.Link href="#important" className="text-uppercase">Important Questions</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
