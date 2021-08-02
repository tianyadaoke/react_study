import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  
  state={mouse:false}
  handlerMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  handlerCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  handlerDelete=(id)=>{
    if(window.confirm('你确定删除吗？')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id,name,done}=this.props
    const {mouse} = this.state
    return (
      <div>
        <li style={{backgroundColor:mouse? '#ddd':'white'}} onMouseLeave={this.handlerMouse(false)} onMouseEnter={this.handlerMouse(true)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handlerCheck(id)}/>
            <span>{name}</span>
            <button className="item-delete" style={{display:mouse?'block':'none'}} onClick={()=>{this.handlerDelete(id)}}>删除</button>
          </label>
        </li>
      </div>
    )
  }
}
