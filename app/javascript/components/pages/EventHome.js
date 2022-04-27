import React, { Component } from 'react'

class EventHome extends Component {
  render() {
    return(
      <>
      <div className= "intropic">
       <img src="https://images.unsplash.com/photo-1525916801717-9405b53a3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" height= "300px" width= "300px" />
      </div>
        <h1> Create or join any pick up game on Teamly </h1>
        <h3> Whatever sport you're looking to play in your free time Teamly can
            help.
        <br />
            Our platform makes it easy to join events with other like minded athletes,
        <br />
            and build connections with people with people who enjoy the same things
        <br />
            you do.
         </h3>

        <div className="homepic">
            <img src="https://images.unsplash.com/photo-1500871872539-d3fff9af3ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" height="95%" width="100%"  />
        </div>
      </>
    )
  }
}

export default EventHome
