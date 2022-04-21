jest.mock('../assets/pngegg.png')

// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound'
//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})


describe("When EventIndex renders", () => {
  it("displays a heading", () => {
    const notFoundRendered = shallow(<NotFound />)
    const notFoundHeading = notFoundRendered.find("h1").text()
    expect(notFoundHeading).toEqual("Hello this is the not found page!")
  })
})
