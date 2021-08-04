import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
	search = () => {
		// const {value} = this.keyWordElement
		// console.log(value)
		const {keyWordElement:{value:keyWord}}=this
		this.props.upDateAppState({isFirst:false,isLoading:true,})
		axios.get(`http://api.github.com/search/users?q=${keyWord}`).then(
			response=>{
				console.log('成功了',response.data)
				this.props.upDateAppState({isLoading:false,users:response.data.items})
			},
			error=>{
				console.log('失败了',error)
				this.props.upDateAppState({isLoading:false,err:error.message})
			}
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
