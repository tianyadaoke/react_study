import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {

  render() {
    return (
      <div>
        <h2>React Router Demo</h2>
  
          <Link to="/home">Home</Link>
          <p></p>
          <Link to="/about">About</Link>  
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
  

      </div>
    )
  }
}
