import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messagerArr: [
      { id: '001', title: '消息1' },
      { id: '002', title: '消息2' },
      { id: '003', title: '消息3' },
    ]
  }
  replaceShow = (id, title) => {
    //replace跳转，携带params参数
    //this.props.history.replace(`/home/message/detail/${id}/${title}`)
    //replace跳转，携带query参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
    //replace跳转，携带state参数
    this.props.history.replace(`/home/message/detail`, { id, title })
  }
  pushShow = (id, title) => {
    //push跳转，携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    //push跳转，携带query参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    //push跳转，携带state参数
    this.props.history.push(`/home/message/detail`, { id, title })
  }
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
    const { messagerArr } = this.state
    return (
      <div>
        <ul>
          {
            messagerArr.map(msgObj => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                  &nbsp;<button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push查看</button>
                  &nbsp;<button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>
                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                  {/* 向路由组件传递state参数 */}
                  <Link  to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
        {/* 接收search参数,无需声明，正常接收路由即可*/}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}
        {/* 接收state参数,无需声明，正常接收路由即可 */}
        <Route path="/home/message/detail" component={Detail}></Route>
        <hr />
        &nbsp;<button onClick={this.back}>回退</button>
        &nbsp;<button onClick={this.forward}>前进</button>
        &nbsp;<button onClick={this.go}>后退2页</button>
      </div>
    )
  }
}
