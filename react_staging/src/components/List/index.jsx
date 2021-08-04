import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
	state = {
		users: [],//初始化状态
		isFirst: true, //是否为第一次打开
		isLoading: false, //是否加载中
		err: ''//存储请求相关错误信息
	}
	componentDidMount() {
		this.token=PubSub.subscribe('atguigu', (_, stateObj) => {
			this.setState(stateObj)
		})
	}
	componentWillUnmount(){
		PubSub.unsubscribe(this.token)
	}
	render() {
		const { users, isFirst, isLoading, err } = this.state
		return (
			<div className="row">
				{
					isFirst ? <h2>输入关键词随后点击搜索</h2> :
						isLoading ? <h2>Loading....</h2> :
							err ? <h2 style={{ color: 'red' }}>{err}</h2> :
								users.map((user) => {
									return (
										<div key={user.id} className="card">
											<a href={user.html_url}>
												<img src={user.avatar_url} style={{ width: '100px' }} alt="avatar" />
											</a>
											<p className="card-text">{user.login}</p>
										</div>
									)
								})
				}

			</div>
		)
	}
}
