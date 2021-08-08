import React, { Component } from 'react'
import "./index.css"


export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h1>我是Parent组件</h1>
      <A render={(name)=><B name={name}/>}/>
      </div>
    )
  }
}
class A extends Component {
  state = { name: 'tom' }
  render() {
    const {name}=this.state
    return (
      <div className="a">
        A...........
       {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        B...............{this.props.name}
      </div>
    )
  }
}

