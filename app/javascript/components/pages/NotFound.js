import React, { Component } from 'react'
import pngegg from '../assets/pngegg.png'

class NotFound extends Component {
  render() {
    return(
      <>
        <img src={pngegg} height = '200px' width = '200px'/>
        <h1>Hello this is the not found page!</h1>
      </>
    )
  }
}

export default NotFound
