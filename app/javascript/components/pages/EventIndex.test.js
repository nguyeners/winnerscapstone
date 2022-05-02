import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import EventIndex from './EventIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When EventIndex renders", () => {
  it("displays a heading", () => {
    const eventRendered = shallow(<EventIndex />)
    const eventHeading = eventRendered.find("h1").text()
    expect(eventHeading).toEqual("Sport Event Listings")
  })
})
