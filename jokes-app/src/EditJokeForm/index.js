import React, { Component } from 'react'

class EditJokeForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			joke: ''
		}
	}

	
	render() {
		return(
			<div>
				<h2>EditJokeForm</h2>

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
					<button type="Submit">Update Joke</button>
				</form>
			</div>
		)
	}
}



export default EditJokeForm