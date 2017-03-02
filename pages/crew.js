import React from 'react'
import Link from 'next/link'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import CFNav from '../components/nav'
import HeadCommon from '../components/head-common'
import CFFooter from '../components/footer'

export default () => (
  <Grid>
    <HeadCommon title='Crew' />
    <CFNav />
    <Row>
      <Col sm={6}>
        <h1>The Crew</h1>
        <p>The Crossfire Racing crew is a dedicated team of experienced sailors
        based on the Northwest.</p>
        <p>Our core lineup includes: </p>
        <ul>
          <li><b>Scott Anderson</b> – Runners
            <ul>
              <li>Years Sailing:  52 Years</li>
              <li>Offshore/Ocean Mileage:  10,000+ Miles</li>
              <li>Offshore/Ocean Experience: Races: Transpac, Tp-52 Worlds (South Beach, Fla.), Swiftsure, Southern Straits, Grand Prix; Cruising: Seattle To Hawaii</li>
            </ul>
          </li>
          <li><b>Bob Arney</b> – Jib/Spin Trimi
            <ul>
              <li>Years Sailing:  50 Years</li>
              <li>Offshore/Ocean Mileage:  80,000 Miles</li>
              <li>Offshore/Ocean Experience:  Races:  Transpac(5), Vic Maui(2), Marina Del Rey To Puerto Vallarta, Van Isle 360, Oregon Offshore (5), Other: Baha Ha Ha Rally</li>
              <li>Licenses: Uscg 50 Ton Master (Near Coastal); Other: American Sailing Association Instructor</li>
            </ul>
          </li>
          <li><b>Nigel Barron</b> – Boat Captain
            <ul>
              <li>Years Sailing:  30 Years</li>
              <li>Offshore/Ocean Mileage:  32,000 Miles</li>
              <li>Offshore/Ocean Experience:  Races: Transpac, Newport-Ensenada, Pacific Cup, Vicmaui, Swiftsure</li>
              <li>Licenses: Uscg 50 Grt</li>
            </ul>
          </li>
          <li>
            <b>Brad Baker</b>
            <ul>
              <li>Years Sailing:  36 Years</li>
              <li>Offshore/Ocean Mileage:  40,000 Miles</li>
              <li>Offshore/Ocean Experience:  Races: Swiftsure (30+), Southern Straits (12), Van Isle 360, Vic Maui (9); Sailing Venues: Puget Sound And Surrounding Waters; Cruising:   Seattle To South Pacific And Back</li>
            </ul>
          </li>
          <li>
            <b>Lou Bianco</b> - Owner/Skipper
            <ul>
              <li>Years Sailing:  30+Years</li>
              <li>Offshore/Ocean Mileage:  35,000 Miles</li>
              <li>Offshore/Ocean Experience:  Races: Stamford-Vineyard, Around Long Island (4), Transpac (3), Newport-Ensenada, Swiftsure (23), Southern Straits , Around The County (10); Sailing Venues: Long Island And Block Island Sound, Pacific Northwest: Puget Sound, Straits Of Juan De Fuca And Georgia.</li>
              <li>Licenses: Uscg 50 Grt</li>
            </ul>
          </li>
          <li>Patrick Cook – Jib/Spin Trim</li>
          <li>
            <b>Craig Cooper</b> – Mid Bow
            <ul>
              <li>Years Sailing:  18 Years</li>
              <li>Offshore/Ocean Mileage:  14,800+ Miles</li>
              <li>Offshore/Ocean Experience:  Races:  Vic Maui (2); Deliveries: U.S. West Coast (Including Chuck Paine 80' Sailing Yact To San Francisco)</li>
              <li>Licenses: Uscg 200 Ton Master, 500 Ton Mate</li>
            </ul>
          </li>
          <li><b>Rick Donohue</b> – Grinder
            <ul>
              <li>Years Sailing:  6</li>
              <li>Offshore/Ocean Mileage:  3,000 Miles</li>
            </ul>
          </li>
          <li>
            <b>Bruce Dunn</b> – Grinder
            <ul>
              <li>Years Sailing:  47 Years</li>
              <li>Offshore/Ocean Mileage:  15,000+</li>
              <li>Offshore/Ocean Experience:  Races: Tp52 Worlds(South Beach, Fla.), Waikiki Offshore Series, Newport-Ensenada, Oregon Offshore, Swiftsure (25),Grand Prix, Southern Straits (5)</li>
            </ul>
          </li>
          <li>Patrick Gibbs – Bow</li>
          <li>Derek Murphy - Mast
            <ul>
              <li>20 years sailing, 8 years racing</li>s
              <li>Offshore/Ocean Experience: 30,000 miles</li>
              <li>Offshore/Ocean Experience Races: Trans-Pac, St. Francis Yacht Club Rolex Big Boat Series, Newport to Ensenada, Santa Barbara to King Harbor, Swiftsure, various SoCal ocean/offshore races</li>
              <li>USCG licenses: Master (100 Gross Tons) and Engineer (Unlimited Horsepower)</li>
            </ul>
          </li>
          <li><b>Rick Sassara</b> – Grinder
            <ul>
              <li>Years Sailing:  42 Years</li>
              <li>Offshore/Ocean Mileage:  4,500 Miles</li>
              <li>Offshore/Ocean Experience:  Races:  Swiftsure (15), Southern Straits (4), Oregon Offshore (2), Grand Prix, Big Boat Series (2); Other:  Star National, Olson 30 National, Laser Nationals, Cruising And Deliveries</li>
            </ul>
          </li>
          <li>Mike Schaeffer – Tactician
            <ul>
              <li>Years Sailing:  40 Years</li>
              <li>Offshore/Ocean Mileage:  20,000+</li>
              <li>Offshore/Ocean Experience:  Races:  Mexorc(2), Long Beach Race Week, Swiftsure (14),  Round The Sound, Tri-Island Series (16), Round The County (6), Great Equalizer (3), Whidbey Island Race Week (4), Southern Straits (2); Other:  6 Different North American Championships</li>
            </ul>
          </li>
          <li><b>John Stanley</b> – Main Trim
            <ul>
              <li>Years Sailing:  43 Years</li>
              <li>Offshore/Ocean Mileage:  35,000 Miles</li>
              <li>Offshore/Ocean Experience:  Races:  Vic Maui (2), Transpac , Newport-Cabo (2), Isla Natividad , Kenwood Cup, Swiftsure, Southern Straits; Other: Collegiate Keelboat Sailing 1983 National Championship; Sailing Venues: Puget Sound, California, Hawaii, Masachusetts.</li>
            </ul>
          </li>
          <li><b>Mike Stanley</b> – Pit
            <ul>
              <li>Years Sailing:  40 Years</li>
              <li>Offshore/Ocean Mileage:  40,000 Miles</li>
              <li>Offshore/Ocean Experience: Races: Southern Straits ,Puget Sound And West Coast Regattas, Rolex Swan Atlantic Regatta, International Yacht Club Challenge, Around Oahu, Olson 30; Other: Olson 30 Nat'l Champion ('93,'95,'96), J35 Nat'l Champion ('98)</li>
            </ul>
          </li>
        </ul>
        <p><Button><Link><a href='boat'>The Boat</a></Link></Button></p>
      </Col>
      <Col sm={6}>
        <img className='img-responsive img-frame' src='static/crossfire-vm-2016-2.jpg' alt='Crossfire VM' />
      </Col>
    </Row>
    <CFFooter />
  </Grid>
)
