import React, { Component } from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'
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
			action: 'login',
			message: ''
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

		if(this.state.action === "login") {
			this.setState({
				action: "register",
				first_name: '',
				last_name: '',
				email: '',
				username: '',
				password: '',
				message: ''
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
			// aperantly (await) this is not a good idea
			this.props.login({
				username: this.state.username,
				password: this.state.password
			})
			// then run this to update the message on for the user
		}
	}

	// show the message
	showMessage = () => {
		this.setState({message: this.props.message})
	}

	// trying to show the updated message on the screen
	componentDidUpdate(prevProps) {
		
		if(this.props.message !== prevProps.message) {
			this.showMessage()
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
						<div className="warning"><small>{this.state.message}</small></div>
						<div className="button-login">
							<Button type="Submit" color="green">
								{
									this.state.action === "login"
									? "Login"
									: "Register"
								}
							</Button>
							
						</div>
						<Modal.Actions>
							{this.state.action !== "register"
								?
								<p className="register-login-container"><span className="register-login" onClick={this.switchForm}>
									Register
								</span></p>
								: <p className="register-login-container"><span className="register-login" onClick={this.switchForm}>
									Login
								</span></p>
							}
						</Modal.Actions>
					</Form>
				</div>
			</div>
			)
	}
}


export default LoginRegisterForm