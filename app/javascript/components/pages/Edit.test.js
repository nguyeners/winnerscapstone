import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Edit from './Edit'

Enzyme.configure({adapter: new Adapter()})

describe("When Edit renders", () => {
  it("displays a heading", () => {
    const edit = shallow(<Edit />)
    const editHeading = edit.find("h1").text()
    expect(editHeading).toEqual("Hello this is the edit page!")
  })
})
