import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <label htmlFor="">
          <input type="checkbox" />
          <span>
            <span>已完成0</span>/全部2
            <button>清除已完成任务</button>
          </span>
        </label>
      </div>
    )
  }
}
