import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import EventNotFound from './EventNotFound'

import pngegg from '../assets/pngegg.png'

Enzyme.configure({adapter: new Adapter()})

// describe("When NotFound renders", () => {
//   let notFound
//   beforeEach(() => {
//     notFound = shallow(<NotFound />)
//   })
//
//   it("checks all props for img", () => {
//     const img = notFound.find("img")
//     expect(img.prop("src")).toEqual("pngegg")
//     expect(img.prop("alt")).toEqual("notFound")
//     expect(img.prop("id")).toEqual("box")
//   })
// })


// describe("When NotFound renders", () => {
//   it("displays a heading", () => {
//     const notFoundRendered = shallow(<NotFound />)
//     const notFoundHeading = notFoundRendered.find("h1").text()
//     expect(notFoundHeading).toEqual("Hello this is the not found page!")
//   })
//   it("displays an image of a little kid playing soccer", () => {
//     const soccerBoy = shallow(<NotFound />)
//     const imageLoaded = soccerBoy.find('img').prop('src')
//     expect(imageLoaded).toEqual('../assets/pngegg.png')
//   })
// })
