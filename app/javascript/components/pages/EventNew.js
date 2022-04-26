import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

class EventNew extends Component {
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
    this.props.createEvent(this.state.newEvent)
    this.setState({submitted: true})
  }

  render() {
    return(
      <>
        <h1>Hello this is the new page!</h1>
        <Form>
          <FormGroup>
            <Label for="Category">Category</Label>
            <Input
              type="text"
              name="name"
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
              name="name"
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
              name="name"
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
              name="name"
              placeholder = "Include a photo of your team."
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}>
              Create a New Profile
          </Button>
        </Form>
      </>
    )
  }
}

export default EventNew
