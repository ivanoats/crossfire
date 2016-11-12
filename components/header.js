import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default () => (
  <Row>
    <Col xs={4}>
      <a href='/' title='Return to the homepage' id='crossfire-logo'>
        <img className='img-responsive' src='../static/logo1000.png' style={{maxWidth: '400px'}} alt='Crossfire logo' />
      </a>
    </Col>
    <Col xs={8} />
  </Row>
)
