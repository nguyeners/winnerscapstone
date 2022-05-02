import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import EventNew from './EventNew'

Enzyme.configure({adapter: new Adapter()})

describe("When EventIndex renders", () => {

  let newRendered
  beforeEach(() => {
    newRendered = shallow(<EventNew />)
  })

  it("displays a heading", () => {
    const newHeadingText = newRendered.find("h1").text()
    expect(newHeadingText).toEqual("Hello this is the new page!")
  })

})
