import React, { Component } from 'react'

const detailData=[
  {id:'001',content:'你好中国'},
  {id:'002',content:'你好北京'},
  {id:'003',content:'你好上海'}
]
export default class Detail extends Component {
  render() {
    const {id,title}=this.props.match.params
    const findResult = detailData.find(detailObj=>{
      return detailObj.id===id
    })
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Tile:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    )
  }
}
