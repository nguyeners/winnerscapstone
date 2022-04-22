import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Show from './Show'

Enzyme.configure({adapter: new Adapter()})

describe("When EventIndex renders", () => {
  it("displays a heading", () => {
    const show = shallow(<Show />)
    const showHeading = show.find("h1").text()
    expect(showHeading).toEqual("Hello this is the show page!")
  })
})
