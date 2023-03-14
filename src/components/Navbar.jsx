import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="light" expand="md" className="mb-4">
      <Navbar.Brand href="#" className="font-weight-bold text-uppercase">Anamaya is BORED!</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#topics" className="text-uppercase">Topics</Nav.Link>
          <Nav.Link href="#dss" className="text-uppercase">DSS</Nav.Link>
          <Nav.Link href="#architecture" className="text-uppercase">Architectures</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
