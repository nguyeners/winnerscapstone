import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import EventShow from './EventShow'

Enzyme.configure({adapter: new Adapter()})

describe("When EventIndex renders", () => {
  it("displays a heading", () => {
    const show = shallow(<EventShow />)
    const showHeading = show.find("h1").text()
    expect(showHeading).toEqual("")
  })
})
