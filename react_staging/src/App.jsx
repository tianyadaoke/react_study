import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData=()=>{
    axios.get("http://localhost:3000/students").then(
      resp=>{console.log('成功了',resp.data)},
      error=>{console.log('失败了',error)}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生信息</button>
      </div>
    )
  }
}
