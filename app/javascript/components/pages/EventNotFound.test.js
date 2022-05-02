import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import EventNotFound from './EventNotFound'
jest.mock('../assets/pngegg.png')
// import pngegg from '../assets/pngegg.png'

Enzyme.configure({adapter: new Adapter()})

let notFound
beforeEach(() => {
  notFound = shallow(<EventNotFound />)
})

describe("NotFound Page", () => {

    it("displays a heading", () => {
    const notFoundRendered = shallow(<EventNotFound />)
    const notFoundHeading = notFoundRendered.find("h1").text()
    expect(notFoundHeading).toEqual("Hello this is the not found page!")
  })

})
