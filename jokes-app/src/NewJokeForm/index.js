import React, { Component } from 'react'
import { Form, Label, Button } from 'semantic-ui-react'
import './index.css'

class NewJokeForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			joke: ''
		}
	}

	// allow user to type
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	// 
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addJoke(this.state)
	}

	render() {
		return (
			<div className="addJoke-container">
				<div className="addJoke">
				<h2>Create a New Joke</h2>
					<Form onSubmit={this.handleSubmit}>
						<div>
							<Label>Title:</Label>
							<input
								type="text"
								name="title"
								value={this.state.title}
								placeholder="Enter title"
								onChange={this.handleChange}
							/>
						</div>

						<div>
							<Label>Joke:</Label>
							<textarea
								type="text"
								name="joke"
								value={this.state.joke}
								placeholder="Enter joke"
								onChange={this.handleChange}
							></textarea>
						</div>
						<div className="button">
							<Button color="green" type="Submit">Add Joke</Button>
							
						</div>
					</Form>
					
				</div>
			</div>
			)
	}
}



export default NewJokeForm