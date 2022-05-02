import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardBody, CardSubtitle, CardText, CardGroup, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class EventIndex extends Component {
  render() {
    return (
      <>
        <div id='full-page'>
          <h1>Sport Event Listings</h1>
          <Col sm="6">
            {this.props.events && this.props.events.map((event, i) => {
              return (
                <div key={i}>
                  <CardGroup>
                    <Card id='indexcard'>
                      <CardImg id='index-image'
                        alt="Card image cap"
                        src={event.image}
                        top
                        width="100 px"
                        height="100 px"
                      />
                      <CardBody key={event.id}>
                        <NavLink to={`/EventShow/${event.id}`} key={event.id}>
                          <CardTitle tag="h5">
                            {event.category}
                          </CardTitle>
                        </NavLink>
                        <CardSubtitle
                          className="mb-2 text-muted"
                          tag="h6">
                          About:  {event.about}
                        </CardSubtitle>
                        <CardText>
                          Event name: {event.event_name}
                          <br />
                          Created by:
                        </CardText>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </div>
              )
            })}
          </Col>
        </div>
      </>
    )
  }
}

export default EventIndex
