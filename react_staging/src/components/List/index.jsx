import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
	render() {
		return (
			<div className="row">
				{
					this.props.users.map((user) => {
						return (
							<div key={user.id} className="card">
								<a href={user.html_url}>
									<img src={user.avatar_url} style={{width:'100px'}}/>
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
