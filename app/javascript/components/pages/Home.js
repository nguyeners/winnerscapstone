import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

class Home extends Component {
  render() {
    return(
      <>
        <Header />
        <h1>Hello this is home!</h1>
        <Footer />
      </>
    )
  }
}

export default Home
