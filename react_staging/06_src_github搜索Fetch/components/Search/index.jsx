import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
	search = async () => {
		const { keyWordElement: { value: keyWord } } = this
		PubSub.publish('atguigu', { isFirst: false, isLoading: true })
		// 使用axios发送网络请求
		// axios.get(`http://api.github.com/search/users?q=${keyWord}`).then(
		// 	response=>{
		// 		console.log('成功了',response.data)
		// 		PubSub.publish('atguigu',{isLoading:false,users:response.data.items})

		// 	},
		// 	error=>{
		// 		console.log('失败了',error)
		// 		PubSub.publish('atguigu',{isLoading:false,err:error.message})
		// 	}
		// )

		// 使用fetch发送网络请求(未优化)
		// fetch(`http://api.github.com/search/users?q=${keyWord}`).then(
		// 	response=>{
		// 		console.log('联系服务器成功了')
		// 		return response.json()
		// 	 },
		// 	error=>{
		// 		console.log('联系服务器失败了',error)
		// 		return new Promise()
		// 	}
		// ).then(
		// 	response=>{
		// 		console.log('获取数据成功了',response)
		// 	},
		// 	error=>{
		// 		console.log('获取数据成功了',error)
		// 	}
		// )

		// 使用fetch发送网络请求(优化)
		try {
			const response = await fetch(`http://api.github.com/search/users?q=${keyWord}`)
			const data= await response.json()
			PubSub.publish('atguigu',{isLoading:false,users:data.items})
		} catch (error) {
			console.log('请求出错',error)
			PubSub.publish('atguigu',{isLoading:false,err:error.message})
		}
	}
	render() {
		return (
			<div>
				<h3>搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词" /><button onClick={this.search}>搜索</button>
				</div>
			</div>
		)
	}
}
