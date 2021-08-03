import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
	search = () => {
		// const {value} = this.keyWordElement
		// console.log(value)
		const {keyWordElement:{value:keyWord}}=this
		console.log(keyWord)
		axios.get(`http://api.github.com/search/users?q=${keyWord}`).then(
			response=>{
				console.log('成功了',response.data)
				this.props.saveUsers(response.data.items)
			},
			error=>{console.log('失败了',error)}
		)
	}
	render() {
		return (
			<div>
				<h3>搜索github用户</h3>
				<div>
					<input ref={c=>this.keyWordElement=c} type="text" placeholder="输入关键词" /><button onClick={this.search}>搜索</button>
				</div>
			</div>
		)
	}
}
