import React, { Component } from 'react'


class JokeContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			jokes: []
		}
	}

	componentDidMount() {
		this.getJokes()
	}

	// get the jokes
	getJokes = async () => {
		console.log("getJokes is getting called");
		// get the url
		// fetch the url
		// get json
		

	}

	render() {
		return (
			<div>
				<h2>JokeContainer</h2>
			</div>
			)
	}
}


export default JokeContainer