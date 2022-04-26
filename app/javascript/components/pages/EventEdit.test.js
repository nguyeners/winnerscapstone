import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import EventEdit from './EventEdit'

Enzyme.configure({adapter: new Adapter()})

describe("When Edit renders", () => {
  it("displays a heading", () => {
    const edit = shallow(<EventEdit />)
    const editHeading = edit.find("h1").text()
    expect(editHeading).toEqual("Hello this is the edit page!")
  })
})
