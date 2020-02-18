import React, { Component } from 'react'

class NewJokeForm extends Component {
	constructor() {
		super()

		this.state = {
			title: '',
			joke: ''
		}
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
						/>
					</div>

					<div>
						<label>Joke:</label>
						<input
							type="text"
							name="joke"
							value={this.state.joke}
							placeholder="Enter joke"
						/>
					</div>
				</form>
			</div>
			)
	}
}



export default NewJokeForm