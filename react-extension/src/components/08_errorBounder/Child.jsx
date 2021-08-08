import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    status:200,
    // users:[
    //   {id:1,name:'tom',age:18},
    //   {id:2,name:'jack',age:28},
    //   {id:3,name:'miki',age:39},
    // ]
    users:'abc'
}
  render() {
    return (
      <div>
        <h2>Child...</h2>
        {
          this.state.users.map(user => {
            return <h4 key={user.id}>{user.name}----{user.age}</h4>
          })
        }
      </div>
    )
  }
}
