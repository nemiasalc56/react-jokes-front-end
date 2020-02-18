import React, { Component } from 'react'

class NewJokeForm extends Component {
	constructor() {
		super()

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

	render() {
		return (
			<div>
				<h2>NewJokeForm</h2>

				<form>
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
						<input
							type="text"
							name="joke"
							value={this.state.joke}
							placeholder="Enter joke"
							onChange={this.handleChange}
						/>
					</div>
				</form>
			</div>
			)
	}
}



export default NewJokeForm