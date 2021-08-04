import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={
    users:[],//初始化状态
    isFirst:true, //是否为第一次打开
    isLoading:false, //是否加载中
    err:'',//存储请求相关错误信息

  } 
  upDateAppState=(stateObj)=>{
    this.setState(stateObj)
  }
  
  render() {
    const {users}=this.state
    return (
      <div>
        <Search upDateAppState={this.upDateAppState} />
        <List {...this.state}/>
      </div>
    )
  }
}
