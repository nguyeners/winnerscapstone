import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

class Header extends Component {

    render() {
      const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
      } = this.props
      console.log("logged_in:", logged_in)
      console.log("current_user:", current_user)
      console.log("new_user_route:", new_user_route)
      console.log("sign_in_route:", sign_in_route)
      console.log("sign_out_route:", sign_out_route)
    return(
      <>
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
          { !logged_in &&
            <>
              <NavItem>
                <a href={sign_in_route} className="nav-link">Sign In</a>
              </NavItem>
              <NavItem>
                <a href={new_user_route} className="nav-link">Sign Up</a>
              </NavItem>
            </>
          }

          { logged_in &&
            <>
              <NavItem>
                <a href={sign_out_route} className="nav-link">Sign Out</a>
              </NavItem>
              <NavItem>
                <NavLink href="/Edit">Edit</NavLink>
              </NavItem>
            </>
          }
        </Nav>
        <hr />
      </div>

      </>
    )
  }
}

export default Header
