import React, { Component } from 'react'
import portfoliopic from '../assets/portfoliopic'
import kendra from '../assets/kendra'

class AboutUs extends Component {
  render() {
    return(
    <>
    <h3> Get to know the Founders </h3>
    <div className="container">
      <img className="container__image"
      src={portfoliopic} id='box' height = '200px' width = '200px'/>
      <div className="container__text">
      <h6> Growing up playing competitive sports I’ve always had the passion to compete. As a adult, it I’ve seen how hard it can be to find other people that want to play and thought Teamly would be the perfect platform to help solve that for everyone.</h6>
      </div>
    </div>
    <div className="container2">
      <img className="container__image2"
      src={kendra} id='box' height = '300px' width = '200px'/>
      <div className="container__text2">
      <h6> Kendra's Bio.</h6>
      </div>
    </div>
    </>
    )
  }
}

export default AboutUs
