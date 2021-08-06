import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
  state={myCar:'x60'}
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  increment=()=>{
    const {value}=this.selectedNumber
    store.dispatch({type:'increment',data:value*1})
  }
  decrement=()=>{
    const {value}=this.selectedNumber
    store.dispatch({type:'decrement',data:value*1})
  }
  incrementOdd=()=>{
    const {value}=this.selectedNumber
    const sum=store.getState()
   if(sum%2!==0){
    store.dispatch({type:'increment',data:value*1})
   }
  }
  incrementAsync=()=>{
    const {value}=this.selectedNumber
    setTimeout(() => {
      store.dispatch({type:'increment',data:value*1})
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>当前求和为: {store.getState()}</p>
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
