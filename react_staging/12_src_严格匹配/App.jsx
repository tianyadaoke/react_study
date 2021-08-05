import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import About from './pages/About'
import Home from './pages/Home'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        {/* <NavLink to="/home" activeClassName="atguigu"><h2>Home</h2></NavLink>
          <NavLink to="/about" activeClassName="atguigu"><h2>About</h2></NavLink>   */}
        <MyNavLink to="/about">...about...</MyNavLink>
        <MyNavLink to="/home/a/b">...home...</MyNavLink>
        <Switch>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>

      </div>
    )
  }
}
