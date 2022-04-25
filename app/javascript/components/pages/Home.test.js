import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

describe("When EventIndex renders", () => {
  it("displays a heading", () => {
    const homeRendered = shallow(<Home />)
    const homeHeadingText = homeRendered.find("h1").text()
    expect(homeHeadingText).toEqual("Hello this is home!")
  })
})
