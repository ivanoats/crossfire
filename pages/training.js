import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import CFNav from '../components/nav'
import HeadCommon from '../components/head-common'
import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <HeadCommon title='Training' />
    <CFNav />
    <Row>
      <Col xs={12} style={{height: '500px'}}>
        <h1>Training</h1>
        <p>More information coming soon.</p>
        <p>Please drop us a line at <a href='mailto:crossfire55155@gmail.com'>crossfire55155@gmail.com</a>.</p>
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)
