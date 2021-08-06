import React, { Component } from 'react'
// import qs from 'querystring'

const detailData=[
  {id:'001',content:'你好中国'},
  {id:'002',content:'你好北京'},
  {id:'003',content:'你好上海'}
]
export default class Detail extends Component {
  render() {
    //接收params参数
    // const {id,title}=this.props.match.params 
    //接受search参数
    // const {search}=this.props.location
    // const {id,title}=qs.parse(search.slice(1))

    //接受state参数
    const {id,title}=this.props.location.state||{}

    const findResult = detailData.find(detailObj=>{
      return detailObj.id===id
    })||{}
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Tile:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    )
  }
}
