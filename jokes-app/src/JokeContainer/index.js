import React, { Component } from 'react'
import JokeList from '../JokeList'


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
		const url = process.env.REACT_APP_API_URL + '/api/v1/jokes/'
		// fetch the url
		const jokesResponse = await fetch(url, {
			// include credentials
			credentials: 'include',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		// we need to add CORS in the backend to have access to this information
		console.log(jokesResponse);

		// get json
		const jokesJson = await jokesResponse.json()
		console.log(jokesJson);
		// get the jokes in state
		this.setState({
			jokes: jokesJson.data
		})

	}

	render() {
		return (
			<div>
				<h2>JokeContainer</h2>
				<JokeList jokes={this.state.jokes}/>
			</div>
			)
	}
}


export default JokeContainer