import React, { Component } from 'react'

export default class Demo extends Component {
  state={sum:0}
  addOne=()=>{
    // 对象式的setState
    // const {sum}=this.state
    // this.setState({sum:sum+1},()=>{
    //   console.log(this.state.sum)
    // })

    //函数式的setState
    this.setState(state=>({sum:state.sum+1}))
  }
  render() {
    return (
      <div>
        <h1>当前求和为: {this.state.sum}</h1>
        <button onClick={this.addOne}>点我+1</button>
      </div>
    )
  }
}
