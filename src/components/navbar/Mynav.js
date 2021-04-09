import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import './navbar.css'
const Mynav = () => {


  return (
    <div>


      <Navbar className="navbar" bg="clear" expand="lg">
        <Navbar.Brand href="#home" >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Nav.Link className='navlink' href="#top">About</Nav.Link>
            <Nav.Link className='navlink' href="#mid">Services</Nav.Link>
            <Nav.Link className='navlink' href="#bot">How It Works?</Nav.Link>
          </Nav>
          <Button variant="outline-light">Log In</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );


}
export default Mynav
