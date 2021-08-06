import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

 class Header extends Component {
  back=()=>{
    this.props.history.goBack()
  }
  forward=()=>{
    this.props.history.goForward()
  }
  go=()=>{
    this.props.history.go(-2)
  }
  render() {
    return (
      <div>
        <h1>React Router Demo</h1>
        &nbsp;<button onClick={this.back}>回退</button>
        &nbsp;<button onClick={this.forward}>前进</button>
        &nbsp;<button onClick={this.go}>后退2页</button>
      </div>
    )
  }
}
// withRouter可以加工一般组件，让其具有路由组件所有的api
export default withRouter(Header)