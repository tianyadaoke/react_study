import React, { Component } from 'react'

export default class Count extends Component {
  state={sum:0}
  increment=()=>{
    const {value}=this.selectedNumber
    const {sum}=this.state
    this.setState({sum:sum+value*1})
  }
  decrement=()=>{
    const {value}=this.selectedNumber
    const {sum}=this.state
    this.setState({sum:sum-value*1})
  }
  incrementOdd=()=>{
    const {value}=this.selectedNumber
    const {sum}=this.state
   if(sum%2!==0){
    this.setState({sum:sum+value*1})
   }
  }
  incrementAsync=()=>{
    const {value}=this.selectedNumber
    const {sum}=this.state
    setTimeout(() => {
      this.setState({sum:sum+value*1})
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>当前求和为；{this.state.sum}</p>
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
