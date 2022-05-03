import React, { Component } from 'react'

class EventHome extends Component {
  render() {
    return(
      <>
        <div className="backgroundpic">
        <div id = 'full-page'>
        <h1 id = 'h1-homepage'> Create or join any pick up game on Teamly </h1>
            <img src="https://images.unsplash.com/photo-1500871872539-d3fff9af3ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" height="95%" width="100%"  />
        <div className= 'hometext'>
        <br />
          <h2> Why use Teamly?</h2>
          <h3> Whatever sport you're looking to play in your free time Teamly can
              help.
          <br />
              Our platform makes it easy to join events with other like minded athletes,
          <br />
              and build connections with people with people who enjoy the same things
          <br />
              you do.
           </h3>
        </div>
        </div>
        <div className="row">
          <div className="column">
            <img src="https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" height="250px" width="250px" />
          </div>
          <div className="column">
            <img src="https://images.unsplash.com/photo-1642189523635-912d71d9cf12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" height="250px" width="250px"/>
          </div>
          <div className="column">
            <img src="https://images.unsplash.com/photo-1562920618-af1f5f02f0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" height="250px" width="250px"/>
          </div>
          <div className="column">
            <img src="https://images.unsplash.com/flagged/photo-1571771710019-ca58cf80f225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" height="250px" width="250px"/>
          </div>
        </div>
        <div className= 'hometext2'>
        <br />
        <br />
          <h2> Become a Better Athlete </h2>
          <h4>  The community of people on teamly are dedicated to their craft and play for the love of sports
          <br />
                as well as to improve their skills. Whether you’re just looking to play a quick 5 on 5 or are
          <br />
              working on a specific skill, you’re in the right place.
          </h4>
        </div>
        <div className="row2">
          <div className="column2">
            <img src="https://images.unsplash.com/photo-1593787406536-3676a152d9cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" height="250px" width="250px" />
          </div>
          <div className="column2">
            <img src="https://images.unsplash.com/photo-1529267988596-c9e1c9e4670f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" height="250px" width="250px" />
         </div>
        </div>
        <div className= 'hometext3'>
        <br />
        <br />
          <h2> Create Long Term Friendships </h2>
          <h4> “We made Teamly because we wanted to make a space for people to meet each other through sports
          <br />
                and create a safe place where everyone felt included.“ -Founders
          <br />
          </h4>
            <img src="https://images.unsplash.com/photo-1525162618450-db04e92d63d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" height="250px" width="250px" id="secondLast"/>
        </div>
        </div>
      </>
    )
  }
}

export default EventHome
