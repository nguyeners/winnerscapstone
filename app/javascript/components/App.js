import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import EventIndex from './pages/EventIndex'
import EventHome from './pages/EventHome'
import EventShow from './pages/EventShow'
import EventEdit from './pages/EventEdit'
import EventNotFound from './pages/EventNotFound'
import EventNew from './pages/EventNew'
import UserProfilePage from './pages/UserProfilePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        events: []
      }
  }

  componentDidMount(){
    this.readEvent()
  }

  readEvent = () => {
    fetch("/events")
    .then(response => response.json())
    .then(eventsArray => this.setState({events: eventsArray}))
    .catch(errors => console.log("Events read errors:", errors))
  }

  createEvent = (newEvent) => {
    fetch("/events", {
      body: JSON.stringify(newEvent),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readEvent())
    .catch(errors => console.log("Events create errors:", errors))
  }

  updateEvent = (events, id) => {
  fetch(`/events/${id}`, {
    // converting an object to a string
    body: JSON.stringify(events),
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
  })
  .then(response => response.json())
  .then(payload => this.readEvent())
  .catch(errors => console.log("Events update errors:", errors))
}

deleteEvent = (id) => {
  fetch(`/events/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
  .then(response => response.json())
  .then(payload => this.readEvent())
  .catch(errors => console.log("delete errors:", errors))
}
  render() {
    return(
      <Router>
      <Header {...this.props}/>
        <Switch>
        <Route exact path='/' component={EventHome} />
        <Route path="/EventIndex" render={(props) => <EventIndex events={this.state.events} />} />

        <Route path="/EventShow/:id"
         render={(props) => {
          let id = props.match.params.id
          let eventObj = this.state.events.find( obj => obj.id === +id)
          return <EventShow eventObj={eventObj} deleteEvent = {this.deleteEvent} /> }}
        />

        <Route path='/EventEdit/:id'
        render={(props) => {
          let id = props.match.params.id
          let eventObj = this.state.events.find( obj => obj.id === +id)
          return <EventEdit updateEvent={this.updateEvent} eventObj={eventObj}/>}} />
        <Route path='/EventNew' component={() => <EventNew createEvent={this.createEvent}/>} />
        <Route path='/UserProfilePage/:id' component={() => <UserProfilePage {...this.props}/>} />
        <Route component={EventNotFound} />
        </Switch>
      <Footer />
      </Router>


    )
  }
}

export default App
