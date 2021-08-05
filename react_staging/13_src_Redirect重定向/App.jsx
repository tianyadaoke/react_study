import React, { Component } from 'react'
import { Route,Switch,Redirect} from 'react-router-dom'
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
        <MyNavLink to="/home">...home...</MyNavLink>
        <Switch>
          <Route  path="/about" component={About}></Route>
          <Route  path="/home" component={Home}></Route>
          <Redirect to="/home"/>
        </Switch>

      </div>
    )
  }
}
