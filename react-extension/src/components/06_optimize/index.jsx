import React, { PureComponent } from 'react'
import "./index.css"

export default class Parent extends PureComponent {
  state={carName:'奔驰c63'}
  changeCar=()=>{
    this.setState({carName:'迈巴赫'})
  }
  // shouldComponentUpdate(nextProps,nextState){
  //  return this.state.carName!==nextState.carName
   
  // }
  render() {
    console.log('parent -- render')
    const {carName}=this.state
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <span>我的车是： {carName}</span>
     
      <br /><button onClick={this.changeCar}>点我换车</button>
        <hr />
        <Child carName={carName}/>
      </div>
    )
  }
}
class Child extends PureComponent {
  // shouldComponentUpdate(nextProps,nextState){
  //   return this.props.carName!==nextProps.carName
  // }
  render() {
    console.log('child -- render')
    const {carName} = this.props
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <span>我接到的车是{carName}</span>
      </div>
    )
  }
}