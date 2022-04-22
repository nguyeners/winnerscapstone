import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import EventIndex from './pages/EventIndex'
import Home from './pages/Home'
import Show from './pages/Show'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'
import New from './pages/New'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
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

      <Router>
      <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/EventIndex' component={EventIndex} />
        <Route path='/Show' component={Show} />
        <Route path='/Edit' component={Edit} />
        <Route path='/New' component={New} />
        <Route component={NotFound} />
        </Switch>
      <Footer />
      </Router>


    )
  }
}

export default App
