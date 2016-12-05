import React from 'react'
import Link from 'next/link'
import {Navbar, Nav, Row, Col} from 'react-bootstrap'

export default () => (
  <Row>
    <Col xs={12}>
      <Navbar className='cf-navbar' collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href='/'>
              <img className='cf-logo' src='../static/logo1000.png' alt='Crossfire logo' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight style={{paddingRight: '15px'}}>
            <li role='presentation'><Link className='button' href='crew'>Crew</Link></li>
            <li role='presentation'><Link className='button' href='boat'>The Boat</Link></li>
            <li role='presentation'><Link className='button' href='schedule'>Schedule</Link></li>
            <li role='presentation'><Link className='button' href='training'>Training</Link></li>
            <li role='presentation'><Link className='button' href='contact'>Contact</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  </Row>
)
