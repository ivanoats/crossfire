import React from 'react'
import Link from 'next/link'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

export default () => (
  <Navbar style={{backgroundColor: '#fff', borderColor: '#fff'}} collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link href='/'>
          <img src='../static/logo1000.png' style={{maxWidth: '400px'}} alt='Crossfire logo' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <li role='presentation'><Link className='button' href='crew'>Crew</Link></li>
        <NavItem eventKey={3} href='boat'>The Boat</NavItem>
        <NavItem eventKey={4} href='schedule'>Schedule</NavItem>
        <NavItem eventKey={5} href='training'>Training</NavItem>
        <NavItem eventKey={6} href='contact'>Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
