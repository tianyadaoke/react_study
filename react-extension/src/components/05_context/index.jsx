import React, { Component } from 'react'
import "./index.css"

// 应用开发中一般不用context用redux
const UserNameContext = React.createContext()
export default class A extends Component {
  state = { username: 'tom', age: 18 }
  render() {
    const { username, age } = this.state
    return (
      <div className="a">
        <h3>我是A组件</h3>
        <h4>我的用户名是{username}</h4>
        <UserNameContext.Provider value={{ username, age }}>
          <B></B>
        </UserNameContext.Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <h3>我是B组件</h3>
        <C></C>
      </div>
    )
  }
}


// class C extends Component {
//   static contextType=UserNameContext
//   render() {
//     const {username,age}=this.context
//     return (
//       <div className="c">
//          <h3>我是C组件</h3>
//         <h4>我从A接收到的用户名是:{username}</h4>
//         <h4>我从A接收到的年龄是:{age}</h4>
//       </div>
//     )
//   }
// }

function C() {
  return (
    <div className="c">
      <h3>我是C组件</h3>
      <h4>
        <UserNameContext.Consumer>
          {
            value=>{
              return `我从A接收到的用户名是:${value.username},年龄是${value.age}`
            }
          }
        </UserNameContext.Consumer>
      </h4>
    </div>
  )
}