import React, { Component } from 'react'

export default class News extends Component {
  componentDidMount(){
    this.timer = setTimeout(() => {
      this.props.history.push('/home/message/')
    }, 2000);
  }
  componentWillUnmount(){
    clearTimeout(this.timer)
  }
  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
