import React from 'react'
import Link from 'next/link'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default () => (
  <Navbar style={{backgroundColor: '#fff', borderColor: '#fff'}}>
    <Navbar.Header>
      <Link href='/'>
        <img className='img-responsive' src='../static/logo1000.png' style={{maxWidth: '400px'}} alt='Crossfire logo' />
      </Link>
    </Navbar.Header>
    <Nav pullRight={true}>
      <li role='presentation'><Link className='button' href='crew'>Crew</Link></li>
      <NavItem eventKey={3} href='boat'>The Boat</NavItem>
      <NavItem eventKey={4} href='schedule'>Schedule</NavItem>
      <NavItem eventKey={5} href='training'>Training</NavItem>
      <NavItem eventKey={6} href='contact'>Contact</NavItem>
    </Nav>
  </Navbar>
)
