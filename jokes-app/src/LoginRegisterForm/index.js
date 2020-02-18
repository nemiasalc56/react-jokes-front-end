import React, { Component } from 'react'


class LoginRegisterForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			username: '',
			password: ''
		}
	}
	render() {
		return (
			<div>
				<h2>LoginRegisterForm</h2>

				<form>
					<div>
						<label>First name:</label>
						<input
							type="text"
							name="firstName"
							placeholder="Enter First name"
						/>
					</div>

					<div>
						<label>Last name:</label>
						<input
							type="text"
							name="lastName"
							placeholder="Enter lastName"
						/>
					</div>

					<div>
						<label>Email:</label>
						<input
							type="text"
							name="email"
							placeholder="Enter email"
						/>
					</div>

					<div>
						<label>Username:</label>
						<input
							type="text"
							name="username"
							placeholder="Enter username"
						/>
					</div>
					
					<div>
						<label>Password:</label>
						<input
							type="password"
							name="password"
							placeholder="Enter password"
						/>
					</div>
				</form>
			</div>
			)
	}
}


export default LoginRegisterForm