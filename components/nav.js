import React from 'react'
import Link from 'next/link'
import {Navbar, Nav, Row, Col} from 'react-bootstrap'

export default () => (
  <Row>
    <Col xs={12}>
      <Navbar className='cf-navbar' collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link>
              <a href='/'>
                <img className='cf-logo' src='../static/logo1000.png' alt='Crossfire logo' />
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight style={{paddingRight: '15px'}}>
            <li role='presentation'><Link><a className='button' href='crew'>Crew</a></Link></li>
            <li role='presentation'><Link><a className='button' href='boat'>The Boat</a></Link></li>
            <li role='presentation'><Link><a className='button' href='schedule'>Schedule</a></Link></li>
            <li role='presentation'><Link><a className='button' href='training'>Training</a></Link></li>
            <li role='presentation'><Link><a className='button' href='contact'>Contact</a></Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  </Row>
)
