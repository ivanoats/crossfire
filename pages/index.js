import React from 'react'
import Head from 'next/head'
import {Grid, Row, Col} from 'react-bootstrap'
import Hero from '../components/hero'
import Nav from '../components/nav'
// import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <Head>
      <title>Crossfire Racing</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
      />
    </Head>
    <Nav />
    <Hero />
    <Row>
      <Col>
        <h1>Crossfire Racing</h1>
        <p>Crossfire Racing is a Corinthian yacht racing program focused on competing at the highest levels in the sport while maintaining a commitment to sportsmanship and community development.</p>
        <p>Crossfire is Reichel-Pugh designed and McConaghy built custom race boat from Seattle, sailing under the Sloop Tavern Yacht Club burgee.</p>
      </Col>
    </Row>
  </Grid>
)
