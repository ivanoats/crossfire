import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default () => (
  <Navbar style={{backgroundColor: '#fff', borderColor: '#fff'}}>
    <Navbar.Header>
      <img className='img-responsive' src='../static/logo1000.png' style={{maxWidth: '400px'}} alt='Crossfire logo' />
    </Navbar.Header>
    <Nav pullRight={true}>
      <NavItem eventKey={2} href='#'>Crew</NavItem>
      <NavItem eventKey={3}>The Boat</NavItem>
      <NavItem eventKey={4} href='#'>Schedule</NavItem>
      <NavItem eventKey={5} href='#'>Training</NavItem>
      <NavItem eventKey={6} href='#'>Contact</NavItem>
    </Nav>
  </Navbar>
)
