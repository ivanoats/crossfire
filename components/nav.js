import React from 'react'
import Link from 'next/link'
import {Navbar, Nav, NavItem, Row, Col} from 'react-bootstrap'

export default () => (
  <Row>
    <Col xs={12}>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href='/'>
              <img className='img-responsive' src='../static/logo1000.png' alt='Crossfire logo' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li role='presentation'><Link className='button' href='crew'>Crew</Link></li>
            <li role='presentation'><Link className='button' href='boat'>The Boat</Link></li>
            <NavItem eventKey={4} href='schedule'>Schedule</NavItem>
            <NavItem eventKey={5} href='training'>Training</NavItem>
            <NavItem eventKey={6} href='contact'>Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  </Row>
)
