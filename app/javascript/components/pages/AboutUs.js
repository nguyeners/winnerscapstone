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
      <h6> Full time barista turned developer, Kendra is thrilled to be working on Teamly with her teammates. She believes that it's a start in connecting communities with common interests. </h6>
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
      <h6> Paula is a recent LEARN Academy student who loves to read, paint, and walks around San Diego. When making this app it was really important to her that the app her and her teeam created was very inlcusive and dived in on the idea of unity. Growing up in central San Diego there would be times during the summer where Paula could hear cheers from across the street or from the alley right behind the apartments. Paula remembered random people coming together of all ages and bonding over a sport in the summer. That was the goal and vision of the app. To bring strangers together. </h6>
      </div>
    </div>
    </div>
    </>
    )
  }
}

export default AboutUs
