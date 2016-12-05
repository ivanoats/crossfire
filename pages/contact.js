import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import CFNav from '../components/nav'
import HeadCommon from '../components/head-common'
import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <HeadCommon title='Contact' />
    <CFNav />
    <Row>
      <Col xs={12}>
        <h1>Contact Us</h1>
        <p>Please drop us a line at <a href='mailto:crossfire55155@gmail.com'>crossfire55155@gmail.com</a>.</p>
        <p>Thanks!</p>
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)
