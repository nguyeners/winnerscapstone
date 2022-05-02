import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import EventIndex from './EventIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When EventIndex renders", () => {

  const events = [
    {
      category: "",
      event_name: "",
      about: "",
      image: "",
    }
  ]

  let eventRendered
  beforeEach(() => {
    eventRendered = shallow(<EventIndex events={events} />)
  })

  it("displays a heading", () => {
    const eventHeading = eventRendered.find("h1").text()
    expect(eventHeading).toEqual("Sport Event Listings")
  })

  it("displays individual event cards on the page", () => {
    const card = eventRendered.find('CardGroup')
    expect(card.exists()).toBe(true)
  })

})
