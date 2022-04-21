import React, { Component } from 'react'
import errorpage from '../assets/errorpage.png'

class NotFound extends Component {
  render() {
    return(
      <>
        <img src={errorpage}/>
        <h1>Hello this is the not found page!</h1>
      </>
    )
  }
}

export default NotFound
