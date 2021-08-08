import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Loading from './Loading'
// import About from './About'
// import Home from './Home'

const Home = lazy(() => import("./Home"))
const About = lazy(() => import("./About"))

export default class Demo extends Component {
  render() {
    return (
      <div>
        <NavLink to="/about">about链接</NavLink>
        <br />
        <NavLink to="/home">home链接</NavLink>
        <hr />
        <Suspense fallback={<Loading/>}>
          <Route path="/about" component={About}></Route>
          <Route path="/home" component={Home}></Route>
        </Suspense>

      </div>
    )
  }
}
