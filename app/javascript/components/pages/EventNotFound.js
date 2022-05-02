import React, { Component } from 'react'
import pngegg from '../assets/pngegg.png'

class EventNotFound extends Component {
  render() {
    return (
      <>
        <div id='full-page'>
          <img src={pngegg} id='box' alt='notFound' height='200px' width='200px' />
          <h1>Hello this is the not found page!</h1>
        </div>
      </>
    )
  }
}

export default EventNotFound
