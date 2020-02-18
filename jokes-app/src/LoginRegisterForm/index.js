import React, { Component } from 'react'


class LoginRegisterForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			username: '',
			password: '',
			action: 'login'
		}
	}

	// register method
	handleChange = (e) => {

		// update the info in state
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.loginRegister()
	}

	// switch the form to login or register
	switchForm = () => {
		console.log('switch form was called');
		if(this.state.action === "login") {
			this.setState({
				action: "register"
			})
		} else {
			this.setState({
				action: "login"
			})
		}
	}

	// login or register
	loginRegister = () => {
		if(this.state.action === "register") {
			this.props.register(this.state)
		} else {
			this.props.login({
				username: this.state.username,
				password: this.state.password
			})
		}
	}

	render() {
		return (
			<div>
				<h2>
					{
						this.state.action === "login"
						? "Login"
						: "Register"
					}
				</h2>

				<form onSubmit={this.handleSubmit}>
					{
						this.state.action === "register"
						? 
						<div>
							<div>
								<label>First name:</label>
								<input
									type="text"
									name="first_name"
									value={this.state.first_name}
									placeholder="Enter First name"
									onChange={this.handleChange}
								/>
							</div>

							<div>
								<label>Last name:</label>
								<input
									type="text"
									name="last_name"
									value={this.state.last_name}
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
							
						</div>
						: null
					}

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
					<button type="Submit">
						{
							this.state.action === "login"
							? "Login"
							: "Register"
						}
					</button>
					<p onClick={this.switchForm}>Register</p>
				</form>
			</div>
			)
	}
}


export default LoginRegisterForm