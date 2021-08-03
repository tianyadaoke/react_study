import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state={users:[]} //初始化状态
  saveUsers=(users)=>{
    console.log("app收到了数据")
    this.setState({users})
  }
  render() {
    return (
      <div>
        <Search saveUsers={this.saveUsers}/>
        <List/>
      </div>
    )
  }
}
