import { connect } from 'react-redux'
import {increment,decrement,incrementAsync } from '../../redux/actions/count'
import React, { Component } from 'react'

class Count extends Component {
  state = { myCar: 'x60' }

  increment = () => {
    const { value } = this.selectedNumber
    this.props.increment(value*1)
  }
  decrement = () => {
    const { value } = this.selectedNumber
    this.props.decrement(value*1)
  }
  incrementOdd = () => {
    const { value } = this.selectedNumber
    if(this.props.sum%2!==0){
      this.props.increment(value*1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectedNumber
    this.props.incrementAsync(value*1,1000)
  }
  render() {
    return (
      <div>
        <h2>我是Count组件</h2>
        <p>当前求和为: {this.props.sum},下方组件总人数为:{this.props.personCount}</p>
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

export default connect(
  state => ({ sum: state.sum,personCount:state.persons.length }),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count)
