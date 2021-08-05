import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'

export default class App extends Component {

  render() {
    return (
      <div>
          <Header/>
          <Link to="/home">Home</Link>
          <p></p>
          <Link to="/about">About</Link>  
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
      </div>
    )
  }
}
