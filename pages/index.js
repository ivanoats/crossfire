import React from 'react'
import Head from 'next/head'
import {Grid} from 'react-bootstrap'
import Header from '../components/header'
import Hero from '../components/hero'
import Nav from '../components/nav'

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
  </Grid>
)
