import React, { Component } from 'react'
import portfoliopic from '../assets/portfoliopic'
import kendra from '../assets/kendra'
import paulapic from '../assets/paulapic'

class AboutUs extends Component {
  render() {
    return(
    <>
    <div className="body">
    <h3> Get to know the Founders </h3>
    <div className="container">
      <img className="container__image"
      src={kendra} id='box' height = '300px' width = '250px'/>
      <div className="container__text">
      <h6> Kendra's Bio. </h6>
      </div>
    </div>
    <div className="container2">
      <img className="container__image2"
      src={portfoliopic} id='box' height = '300px' width = '250px'/>
      <div className="container__text2">
      <h6> Growing up playing sports Omar always had a passion for playing and competing with others. Throughout high school, college and the military he’s played in numerous Basketball, Football, Track, Soccer, Frisbee and Volleyball leagues and teams. His background and shared passion to play sports led him and the other cofounders to create Teamly.</h6>
      </div>
    </div>
    <div className="container3">
      <img className="container__image3"
      src={paulapic} id='box' height = '300px' width = '250px'/>
      <div className="container__text2">
      <h6> Paula's Bio.</h6>
      </div>
    </div>
    </div>
    </>
    )
  }
}

export default AboutUs
