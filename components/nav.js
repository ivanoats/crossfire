import React from 'react'
import Link from 'next/link'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default () => (
  <Navbar style={{backgroundColor: '#fff', borderColor: '#fff'}}>
    <Navbar.Header>
      <img className='img-responsive' src='../static/logo1000.png' style={{maxWidth: '400px'}} alt='Crossfire logo' />
    </Navbar.Header>
    <Nav pullRight={true}>
      <NavItem bsClass='div' eventKey={2}><Link href='crew'>Crew</Link></NavItem>
      <NavItem eventKey={3}>The Boat</NavItem>
      <NavItem eventKey={4} href='#'>Schedule</NavItem>
      <NavItem eventKey={5} href='#'>Training</NavItem>
      <NavItem eventKey={6} href='#'>Contact</NavItem>
    </Nav>
  </Navbar>
)
