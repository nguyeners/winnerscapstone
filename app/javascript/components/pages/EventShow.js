import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

  class EventShow extends Component {
    constructor(props){
      super(props)
        this.state= {
          newEvent: {
            image: "",
            category: "",
            about: "",
            event_name: ""
          },
          submitted: false
        }
      }

    render() {
      return(
        <>
        <div id = 'full-page'>
          <h3>Events</h3>
            <div id = 'showpicture'>
              <img src={this.props.eventObj && this.props.eventObj.image} />
            </div>
            <div id = 'textbox'>
              <h1>{this.props.eventObj && this.props.eventObj.category}</h1>
              <p>About:{this.props.eventObj && this.props.eventObj.about}</p>
              <p>Event Name: {this.props.eventObj && this.props.eventObj.event_name}</p>
              <NavLink to={`/EventEdit/${this.props.eventObj && this.props.eventObj.id}`}>
                <Button>Edit Event Listing</Button>
              </NavLink>
              <NavLink to={`/EventIndex/${this.props.eventObj && this.props.eventObj.id}`}>
                <Button onClick = {this.handleDelete} >
                  Delete Event Listing
                </Button>
              </NavLink>
            </div>
        </div>
        </>
      )
    }
  }

export default EventShow
