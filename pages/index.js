import React from 'react'
import Link from 'next/link'
import HeadCommon from '../components/head-common'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import Hero from '../components/hero'
import CFNav from '../components/nav'
import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <HeadCommon />
    <CFNav />
    <Hero />
    <Row>
      <Col xs={12} style={{height: '400px'}}>
        <h1>Crossfire Racing</h1>
        <p>Crossfire Racing is a Corinthian yacht racing program focused on competing at the highest levels in the sport while maintaining a commitment to sportsmanship and community development.</p>
        <p>Crossfire is Reichel-Pugh designed and McConaghy built custom race boat from Seattle, sailing under the Sloop Tavern Yacht Club burgee.</p>
        <p><Button><Link href='crew'>About the crew</Link></Button></p>
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)
