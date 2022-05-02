import React, { Component } from 'react'

class EventHome extends Component {
  render() {
    return(
      <>
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
      </>
    )
  }
}

export default EventHome
