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
        <h1>A Catchy Headline</h1>
        <p>Lanyard killick topgallant nipper parrel loot walk the plank gunwalls Pirate Round run a shot across the bow. Handsomely Sail ho boatswain Plate Fleet gangway wench rutters boom bounty measured fer yer chains. Driver dance the hempen jig rope's end man-of-war rigging grapple hempen halter hogshead bucko list.</p>
        <p>Stern mizzenmast nipperkin holystone square-rigged warp wherry broadside parley gunwalls. Stern Nelsons folly poop deck nipperkin coxswain scallywag keelhaul hearties swing the lead galleon. Coxswain topmast carouser Sink me spike line holystone crimp code of conduct snow.</p>
        <p>Swing the lead warp stern yo-ho-ho Nelsons folly fathom topsail gally splice the main brace ahoy. Bounty Nelsons folly six pounders gangway hardtack ho Jack Tar gally poop deck clap of thunder. Case shot aye port pinnace long clothes landlubber or just lubber avast Pirate Round stern marooned.</p>
      </Col>
    </Row>
  </Grid>
)
