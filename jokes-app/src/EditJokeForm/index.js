import React, { Component } from 'react'

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
			<div>
				<h2>EditJokeForm</h2>

				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Title:</label>
						<input
							type="text"
							name="title"
							value={this.state.title}
							placeholder="Enter title"
							onChange={this.handleChange}
						/>
					</div>

					<div>
						<label>Joke:</label>
						<textarea
							type="text"
							name="joke"
							value={this.state.joke}
							placeholder="Enter joke"
							onChange={this.handleChange}
						></textarea>
					</div>
					<button type="Submit">Update Joke</button>
				</form>
			</div>
		)
	}
}



export default EditJokeForm