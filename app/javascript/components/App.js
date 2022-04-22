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
    return(
      <Router>
      <Header {...this.props}/>
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
