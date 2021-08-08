import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state={
    hasError:''
  }
  // 当parent的子组件出现错误时候触发并携带错误信息
  static getDerivedStateFromError(error){
    console.log(error)
    return {hasError:error}
  }
  componentDidCatch(){
    // 可以统计错误发送给后台处理
    console.log("渲染组件时候出错")
  }
  render() {
    return (
      <div>
        <h2>Parent...</h2>
        {this.state.hasError?<h2>当前网络不稳定</h2>:<Child/>}
      </div>
    )
  }
}
