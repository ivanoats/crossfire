import React from 'react'
import Head from 'next/head'

const HeadCommon = (props) => (
  <Head>
    <title>{`Crossfire Racing - ${props.title || 'Home'}`}</title>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
    />
    <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' />
    {
      (process.env.NODE_ENV === 'development')
      ? (<link rel='stylesheet' href='static/crossfire.css' />)
      : (<link rel='stylesheet' href='static/crossfire.min.css' />)
    }
  </Head>
)

HeadCommon.propTypes = {
  title: React.PropTypes.string
}

export default HeadCommon
