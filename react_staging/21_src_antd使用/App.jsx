import React, { Component } from 'react'
import {Button,DatePicker} from 'antd'
import 'antd/dist/antd.css'
import {WechatOutlined} from '@ant-design/icons'
export default class App extends Component {
   onChange=(date, dateString)=> {
    console.log(date, dateString);
  }
  render() {
    return (
      <div>
        App
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <WechatOutlined />
        <DatePicker onChange={this.onChange} />
      </div>
    )
  }
}
 