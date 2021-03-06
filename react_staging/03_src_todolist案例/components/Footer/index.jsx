import React, { Component } from 'react'

export default class Footer extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props 
    const total = todos.length
    const doneCount = todos.reduce((pre,todo)=>{

        return pre+(todo.done?1:0)
      
    },0)

    return (
      <div>
        <label htmlFor="">
          <input 
          type="checkbox"
           checked={doneCount===total&&total!==0?true:false}
           onChange={this.handleCheckAll}/>
          <span>
            <span>已完成{doneCount}</span>/全部{total}
            <button onClick={this.handleClearAllDone}>清除已完成任务</button>
          </span>
        </label>
      </div>
    )
  }
}
