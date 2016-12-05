import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
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
        <ul>          <li>TTPYC Duwamish Head</li>          <li>CYC Blakely Rock</li>          <li>CYC Scatchet Head</li>          <li>CYC Three Tree Point</li>          <li>STYC Blakely Rock Benefit</li>          <li>SYC Protection Island</li>          <li>SYC Vashon Island</li>          <li>RVYS Swiftsure Classic</li>          <li>SYC Blake Island</li>          <li>Leukemia Cup (tentative)</li>          <li>TYC Transpac Race</li>          <li>CYCE Foulweather Bluff</li>          <li>SYC Grand Prix</li>          <li>OIYC Round the County</li>          <li>TYC Winter Vashon</li>        </ul>      </Col>
      <Col sm={6}>
        <img className='img-responsive' src='static/crossfire-swiftsure-1.jpg' alt='Crossfire at Swiftsure' />
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)
