import React, { Component } from 'react'

class UserProfilePage extends Component {
  render() {
    const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  } = this.props
    console.log(current_user);
    return(
      <>
      <h1> Welcome to your Profile! </h1>
      <pre> {JSON.stringify(current_user, null, 2)} </pre>
      </>
    )
  }
}

export default UserProfilePage
