import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import EventHome from './EventHome'

Enzyme.configure({adapter: new Adapter()})

describe("When EventIndex renders", () => {
  it("displays a heading", () => {
    const homeRendered = shallow(<EventHome />)
    const homeHeadingText = homeRendered.find("h1").text()
    expect(homeHeadingText).toEqual(" Create or join any pick up game on Teamly ")
  })
})
