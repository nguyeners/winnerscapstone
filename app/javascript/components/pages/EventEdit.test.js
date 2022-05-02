import React from 'react'
import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import EventEdit from './EventEdit'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

describe("When Edit renders", () => {

  it("displays a heading", () => {
    const edit = shallow(<EventEdit />)
    const editHeading = edit.find("h1").text()
    expect(editHeading).toEqual("Hello this is the edit page!")
  })

  // it.only("handles text input", () => {
  //   const wrapper = shallow(<EventEdit />)
  //   const inputField = wrapper.find({ name: "event_name" })
  //   // console.log(inputField)
  //   inputField.simulate('change', { target: { value: "H" } })
  //   wrapper.setState({event_name: "H"})
  //   // console.log(inputField.debug())
  //   expect(inputField.props().value).toEqual("H")
  // })

})