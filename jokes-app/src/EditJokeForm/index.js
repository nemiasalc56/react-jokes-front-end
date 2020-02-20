import React, { Component } from 'react'
import { Form, Label, Button } from 'semantic-ui-react'
import './index.css'

class EditJokeForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			joke: ''
		}
	}

	componentDidMount() {
		this.setState({
			title: this.props.jokeToEdit.title,
			joke: this.props.jokeToEdit.joke
		})
	}

	// handle changes 
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	// handle submit
	handleSubmit = (e) => {
		e.preventDefault()

		this.props.updateJoke(this.state)
	}
	
	render() {
		return(
			<div className="edit-container">
				<div className="edit-page">
					<h2>Update this joke</h2>

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
							<Button color="green" type="Submit">Update Joke</Button>
							
						</div>
					</Form>
				</div>
				
			</div>
		)
	}
}



export default EditJokeForm