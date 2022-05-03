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

      <div className="headerbackground">
      <div className="header" id = 'full-page'>
        <h1 className="welcome">TEAMLY</h1>
        <h2 className="welcome" align="right">Hello {logged_in ? this.props.current_user.email : 'guest'}!</h2>
        <img src= "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1866&q=80" height="100px" width="100px"/>
        <Nav>
          <NavItem>
            <NavLink href="/" id="nav-text">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/EventIndex" id="nav-text">Event Listing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/AboutUs" id="nav-text">About Us</NavLink>
          </NavItem>

          { !logged_in &&
            <>
              <NavItem>
                <a href={sign_in_route} className="nav-link" id="nav-text">Sign In</a>
              </NavItem>
              <NavItem>
                <a href={new_user_route} className="nav-link" id="nav-text">Sign Up</a>
              </NavItem>
            </>
          }

          { logged_in &&
            <>
              <NavItem>
                <a href={sign_out_route} className="nav-link" id = "nav-text">Sign Out</a>
              </NavItem>
              <NavItem>
                <NavLink href="/EventEdit" id = "nav-text">Edit</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/EventNew" id = "nav-text">Create Event</NavLink>
              </NavItem>
            </>
          }

        </Nav>
        <hr />
      </div>
      </div>

    )
  }
}

export default Header
