import React from 'react'
import Link from 'next/link'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import CFNav from '../components/nav'
import HeadCommon from '../components/head-common'
import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <HeadCommon title='Crew' />
    <CFNav />
    <Row>
      <Col sm={6}>
        <h1>The Crew</h1>
        <p>The Crossfire Racing crew is a dedicated team of experienced sailors
        based on the Northwest.</p>
        <p>Our core lineup includes: </p>
        <ul>
          <li>Scott Anderson – Runners</li>
          <li>Bob Arney – Jib/Spin Trim</li>
          <li>Nigel Barron – Boat Captain</li>
          <li>Lou Bianco - Owner/Skipper</li>
          <li>Patrick Cook – Jib/Spin Trim</li>
          <li>Craig Cooper – Mid Bow</li>
          <li>Rick Donohue – Grinder</li>
          <li>Bruce Dunn – Grinder</li>
          <li>Patrick Gibbs – Bow</li>
          <li>Bruce Hedrick – Navigator</li>
          <li>Derek Murphy - Mast</li>
          <li>Rick Sassara – Grinder</li>
          <li>Mike Schaeffer – Tactician</li>
          <li>John Stanley – Main Trim</li>
          <li>Mike Stanley – Pit</li>
        </ul>
        <p><Button><Link href='boat'>The Boat</Link></Button></p>
      </Col>
      <Col sm={6}>
        <img className='img-responsive img-frame' src='static/crossfire-vm-2016-2.jpg' alt='Crossfire VM' />
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)
