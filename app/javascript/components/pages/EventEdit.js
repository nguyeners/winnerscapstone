import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class EventEdit extends Component {
  constructor(props) {
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
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.updateEvent(this.state, this.props.eventObj.id)
    this.setState({ submitted: true })
  }
  render() {
    return (
      <>
        <h1>Hello this is the edit page!</h1>
        <Form>
          <FormGroup>
            <Label for="Category">Category</Label>
            <Input
              type="text"
              name="category"
              placeholder="Category of Sport"
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
              placeholder="Name your event"
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
              placeholder="Let other's know what your event is about."
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
              placeholder="Include a photo of your team."
              onChange={this.handleChange}
              value={this.state.image}
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}>
            Update your Event
          </Button>
          {this.state.submitted && <Redirect to="/EventIndex" />}
        </Form>
      </>
    )
  }
}

export default EventEdit
