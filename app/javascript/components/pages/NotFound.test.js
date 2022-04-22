
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound'

import pngegg from '../assets/pngegg.png'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
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
