import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

class EventEdit extends Component {
  constructor(props){
  super(props)
  this.state = {
    newEvent: {
      category: "",
      name: "",
      about: "",
      image: "",
    },
    submitted: false
  }
}

handleChange = (e) => {
  // destructuring form out of state
  let { newEvent } = this.state
  newEvent[e.target.name] = e.target.value
  // setting state to the updated form content
  this.setState({newEvent: newEvent})
}

handleSubmit = () => {
  // a function call being passed from App.js
  this.props.updateEvent(this.state.newEvent, this.props.eventObj.id)
  this.setState({submitted: true})
}
  render() {
    return(
      <>
        <h1>Hello this is the edit page!</h1>
        <Form>
          <FormGroup>
            <Label for="Category">Category</Label>
            <Input
              type="text"
              name="Category"
              placeholder = "Category of Sport"
              onChange={this.handleChange}
              value={this.state.newEvent.category}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="Event Name">Event Name</Label>
            <Input
              type="text"
              name="Event Name"
              placeholder = "Name your event"
              onChange={this.handleChange}
              value={this.state.newEvent.event_name}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="About">About</Label>
            <Input
              type="text"
              name="About"
              placeholder = "Let other's know what your event is about."
              onChange={this.handleChange}
              value={this.state.newEvent.about}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="Image">Image</Label>
            <Input
              type="URL"
              name="Image"
              placeholder = "Include a photo of your team."
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}>
              Update your Event
          </Button>
        </Form>
      </>
    )
  }
}

export default EventEdit
