import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

class Header extends Component {
  render() {
    return(

      <div>
        <h1>Teamly</h1>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/EventIndex">Event Listing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users/sign_in">Sign In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users/sign_up">Sign Up</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>

    )
  }
}

export default Header
