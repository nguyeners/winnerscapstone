import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

class EventNew extends Component {
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
        </Form>
      </>
    )
  }
}

export default EventNew
