import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardBody, CardSubtitle, CardText, CardGroup, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class EventIndex extends Component {

  handleSubmit = () =>  {
    console.log("click")
  }
          render() {
            return(
              <>
                <h1>Sport Event Listings</h1>
                  <Col sm="6">
                    {this.props.events && this.props.events.map((event, i) => {
                      return (
                        <div key={i}>
                        <CardGroup>
                          <Card>
                            <CardImg
                              alt="Card image cap"
                              src={event.image}
                              top
                              width="300 px"
                              height="300 px"
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
                                    </CardText>

                                  </CardBody>
                            </Card>
                          </CardGroup>
                        </div>
                      )
                    })
                  }
             </Col>
          </>
    )
  }
}

export default EventIndex
