import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default () => (
  <Navbar>
    <Navbar.Header>
      <img className='img-responsive' src='../static/logo1000.png' style={{maxWidth: '400px'}} alt='Crossfire logo' />
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href='#'>About</NavItem>
      <NavItem eventKey={2} href='#'>Crew</NavItem>
      <NavItem eventKey={3} href='#'>Schedule</NavItem>
      <NavItem eventKey={4} href='#'>Training</NavItem>
      <NavItem eventKey={5} href='#'>Contact</NavItem>
    </Nav>
  </Navbar>
)
