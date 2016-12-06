import React from 'react'
import Link from 'next/link'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import CFNav from '../components/nav'
import HeadCommon from '../components/head-common'
import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <HeadCommon title='The Boat' />
    <CFNav />
    <Row>
      <Col sm={6}>
        <h1>The Boat</h1>
        <p>The design brief for Crossfire (ex Rima2) called for a boat that was capable of competing against the TP52's inshore buoy racing, yet strong enough to handle the most grueling offshore events.  features a high stability keel and bulb; over 50% ballast/displacement ratio. The high modulus carbon rig and composite C6 rigging adds greatly to the stability of this design.  Crossfire is a powerful yacht capable of strong upwind performance in the 9+ knot range and even more exciting downwind rides at well over 20 knots.</p>
        <p>Crossfire was built using Pre-Preg carbon fiber with Nomex core and high-density PVC foam core in the slamming areas. The construction of this yacht was focused around extensive offshore sailing; durability was of paramount concern.</p>
        <div className='panel panel-default'>
          <div className='panel-heading'>Measurements:</div>
          <div className='panel-body'>
            <table className='table'>
              <tr>
                <td>LOA:</td>
                <td>55ft 3in</td>
              </tr>
              <tr>
                <td>LWL:</td>
                <td>551ft 2in</td>
              </tr>
              <tr>
                <td>Beam:</td>
                <td>14ft 8in</td>
              </tr>
              <tr>
                <td>Draft:</td>
                <td>13 ft</td>
              </tr>
              <tr>
                <td>Bridge Clearance:</td>
                <td>90ft 5in</td>
              </tr>
              <tr>
                <td>Ballast:</td>
                <td>8050lb</td>
              </tr>
              <tr>
                <td>Displacement:</td>
                <td>20865lb</td>
              </tr>
            </table>
          </div>
        </div>
        <img className='img-responsive diagram' src='static/crossfire-diagram.min.svg' alt='diagram' />
        <p><Button><Link href='schedule'>Our Schedule</Link></Button></p>
      </Col>
      <Col sm={6}>
        <img className='img-responsive img-frame' src='static/crossfire-swiftsure-4.jpg' alt='crossfire' />
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)
