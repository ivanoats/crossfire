import React from 'react'
import Link from 'next/link'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import CFNav from '../components/nav'
import HeadCommon from '../components/head-common'
import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <HeadCommon title='Schedule' />
    <CFNav />
    <Row>
      <Col sm={6}>
        <h1>Schedule</h1>
        <p>
          Crossfire racing has an extensive schedule of inshore and offshore
          racing scheduled for 2017. Look for us on the water!
        </p>
        <p>Our current schedule for 2017: </p>
        <ul className='list-group'>          <li className='list-group-item'>TTPYC Duwamish Head</li>          <li className='list-group-item'>CYC Blakely Rock</li>          <li className='list-group-item'>CYC Blakely Rock</li>          <li className='list-group-item'>CYC Scatchet Head</li>          <li className='list-group-item'>CYC Three Tree Point</li>          <li className='list-group-item'>STYC Blakely Rock Benefit</li>          <li className='list-group-item'>SYC Protection Island</li>          <li className='list-group-item'>SYC Vashon Island</li>          <li className='list-group-item'>RVYS Swiftsure Classic</li>          <li className='list-group-item'>SYC Blake Island</li>          <li className='list-group-item'>Leukemia Cup (tentative)</li>          <li className='list-group-item'>TYC Transpac Race</li>          <li className='list-group-item'>CYCE Foulweather Bluff</li>          <li className='list-group-item'>SYC Grand Prix</li>          <li className='list-group-item'>OIYC Round the County</li>          <li className='list-group-item'>TYC Winter Vashon</li>        </ul>        <p><Button><Link href='contact'>Contact Us</Link></Button></p>      </Col>
      <Col sm={6}>
        <img className='img-responsive img-frame' src='static/crossfire-swiftsure-1.jpg' alt='Crossfire at Swiftsure' />
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)
