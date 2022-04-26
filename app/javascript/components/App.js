import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import EventIndex from './pages/EventIndex'
import EventHome from './pages/EventHome'
import EventShow from './pages/EventShow'
import EventEdit from './pages/EventEdit'
import EventNotFound from './pages/EventNotFound'
import EventNew from './pages/EventNew'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const mockEvents= [
  {
    id:1,
    image: "https://images.unsplash.com/photo-1535116117846-4d672a4431d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: 'Soccer',
    about: 'playing soccer at the park',
    event_name: 'Omars soccer club'
  },
  {
    id:2,
    image: "https://images.unsplash.com/photo-1561917443-6c5a9a4fca6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2186&q=80",
    category: 'Basketball',
    about: 'playing basketball at a different park',
    event_name: 'Kendras basketball club'
  },
  {
    id:3,
    image: "https://images.unsplash.com/photo-1591337819702-5c21810edd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: 'Frisbee',
    about: 'playing ',
    event_name: 'Paulas frisbee club'
  }
]



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
    this.setState({events: mockEvents})
    // fetch("http://localhost:3000/events")
    // .then(response => response.json())
    //
    // .then(eventsArray => this.setState({events: eventsArray}))
    // .catch(errors => console.log("Event read errors:", errors))
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
          return <EventShow eventObj={eventObj} /> }}
        />

        <Route path='/Edit' component={EventEdit} />
        <Route path='/New' component={EventNew} />
        <Route component={EventNotFound} />
        </Switch>
      <Footer />
      </Router>


    )
  }
}

export default App
