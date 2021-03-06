import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Post from './Components/Post'

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div id='App'>
          <Navbar />
          <Switch>
            {' '}
            //using switch we would only be able to hit one route at a time i.e.
            would only be able to show one component at a time
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
