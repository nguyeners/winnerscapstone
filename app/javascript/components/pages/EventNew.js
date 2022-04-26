import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

class EventNew extends Component {
  constructor(props){
  super(props)
  this.state = {
    category: "",
    event_name: "",
    about: "",
    image: "",
    submitted: false
  }
}

    handleChange = (e) => {
      // setting state to the updated form content
      this.setState({
          [e.target.name]: e.target.value
      }
    )
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
              name="category"
              placeholder = "Category of Sport"
              onChange={this.handleChange}
              value={this.state.category}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="Event Name">Event Name</Label>
            <Input
              type="text"
              name="event_name"
              placeholder = "Name your event"
              onChange={this.handleChange}
              value={this.state.event_name}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="About">About</Label>
            <Input
              type="text"
              name="about"
              placeholder = "Let other's know what your event is about."
              onChange={this.handleChange}
              value={this.state.about}
            />
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="Image">Image</Label>
            <Input
              type="URL"
              name="image"
              placeholder = "Include a photo of your team."
              onChange={this.handleChange}
              value={this.state.image}
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={() => {
              console.log('foo', this.state)
              this.props.createEvent(this.state)
            }}>
              Create an Event
          </Button>
        </Form>
      </>
    )
  }
}

export default EventNew
