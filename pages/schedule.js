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
        <ul>
      <Col sm={6}>
        <img className='img-responsive' src='static/crossfire-swiftsure-1.jpg' alt='Crossfire at Swiftsure' />
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)