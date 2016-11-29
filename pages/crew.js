import React from 'react'
import Head from 'next/head'
import {Grid, Row, Col} from 'react-bootstrap'
import Hero from '../components/hero'
import Nav from '../components/nav'
// import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <Head>
      <title>Crossfire Racing - Crew</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
      />
    </Head>
    <Nav />
    <Row>
      <Col>
        <h1>The Crew</h1>
        <p>The Crossfire Racing crew is a dedicated team of experienced sailors
        based on the Northwest.  Our core lineup includes: </p>

        <ul>
      </Col>
    </Row>
  </Grid>
)
