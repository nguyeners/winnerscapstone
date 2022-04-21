import React, { Component } from 'react'
import errorpage from '../assets/errorpage.png'
import Header from './components/Header'
import Footer from './components/Footer'

class NotFound extends Component {
  render() {
    return(
      <>
        <Header />
        <img src={errorpage}/>
        <h1>Hello this is the not found page!</h1>
        <Footer />
      </>
    )
  }
}

export default NotFound
