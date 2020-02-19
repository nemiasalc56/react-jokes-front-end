import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import './index.css'


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
			<div className="login-container">
				<div className="login">
					<h2>
						{
							this.state.action === "login"
							? "Login"
							: "Register"
						}
					</h2>

					<Form onSubmit={this.handleSubmit}>
						{
							this.state.action === "register"
							? 
							<div>
								<Form.Field>
									<label>First name:</label>
									<input
										type="text"
										name="first_name"
										value={this.state.first_name}
										placeholder="Enter First name"
										onChange={this.handleChange}
									/>
								</Form.Field>

								<Form.Field>
									<label>Last name:</label>
									<input
										type="text"
										name="last_name"
										value={this.state.last_name}
										placeholder="Enter lastName"
										onChange={this.handleChange}
									/>
								</Form.Field>

								<Form.Field>
									<label>Email:</label>
									<input
										type="text"
										name="email"
										value={this.state.email}
										placeholder="Enter email"
										onChange={this.handleChange}
									/>
								</Form.Field>
								
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
						<div className="button">
							<Button type="Submit">
								{
									this.state.action === "login"
									? "Login"
									: "Register"
								}
							</Button>
							
						</div>
						<p className="button" onClick={this.switchForm}>Register</p>
					</Form>
				</div>
			</div>
			)
	}
}


export default LoginRegisterForm