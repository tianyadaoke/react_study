import React, { Component } from 'react'

export default class Count extends Component {
  state = { myCar: 'x60' }

  increment = () => {
    const { value } = this.selectedNumber
    this.props.jia(value*1)
  }
  decrement = () => {
    const { value } = this.selectedNumber
    this.props.jian(value*1)
  }
  incrementOdd = () => {
    const { value } = this.selectedNumber
    if(this.props.sum%2!==0){
      this.props.jia(value*1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectedNumber
    this.props.jiaAsync(value*1,1000)
  }
  render() {
    console.log('ui组件收到的props是',this.props)
    return (
      <div>
        <p>当前求和为: {this.props.sum}</p>
        <select ref={c => this.selectedNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;<button onClick={this.increment}>+</button>
        &nbsp;<button onClick={this.decrement}>-</button>
        &nbsp;<button onClick={this.incrementOdd}>当前求和为奇数再加</button>
        &nbsp;<button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
