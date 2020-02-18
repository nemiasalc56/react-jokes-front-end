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

	// register method
	handleChange = (e) => {
		console.log(e.target.value);
		// update the info in state
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.register()

	}

	render() {
		return (
			<div>
				<h2>LoginRegisterForm</h2>

				<form onSubmit={this.handleSubmit}>
					<div>
						<label>First name:</label>
						<input
							type="text"
							name="firstName"
							value={this.state.firstName}
							placeholder="Enter First name"
							onChange={this.handleChange}
						/>
					</div>

					<div>
						<label>Last name:</label>
						<input
							type="text"
							name="lastName"
							value={this.state.lastName}
							placeholder="Enter lastName"
							onChange={this.handleChange}
						/>
					</div>

					<div>
						<label>Email:</label>
						<input
							type="text"
							name="email"
							value={this.state.email}
							placeholder="Enter email"
							onChange={this.handleChange}
						/>
					</div>

					<div>
						<label>Username:</label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							placeholder="Enter username"
							onChange={this.handleChange}
						/>
					</div>
					
					<div>
						<label>Password:</label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							placeholder="Enter password"
							onChange={this.handleChange}
						/>
					</div>
					<button type="Submit">Register</button>
				</form>
			</div>
			)
	}
}


export default LoginRegisterForm