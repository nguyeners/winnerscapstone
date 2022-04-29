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
    return(

      <div className="header" id = 'full-page'>
        <h1 className="welcome">TEAMLY</h1>
        <h2 className="welcome" align="right">Hello {logged_in ? this.props.current_user.email : 'guest'}!</h2>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/EventIndex">Event Listing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/AboutUs">About Us</NavLink>
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
                <NavLink href="/EventEdit">Edit</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/EventNew">Create Event</NavLink>
              </NavItem>
            </>
          }

        </Nav>
        <hr />
      </div>

    )
  }
}

export default Header
