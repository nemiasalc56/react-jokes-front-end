import React, { Component } from 'react'
import JokeList from '../JokeList'
import NewJokeForm from '../NewJokeForm'


class JokeContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			jokes: [],
			addJoke: false
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

	// create a joke
	addJoke = async (jokeToAdd) => {
		console.log(jokeToAdd);
		// get the url
		const url = process.env.REACT_APP_API_URL + '/api/v1/jokes/'

		try {
			// fetch url
			const jokeToAddResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(jokeToAdd),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(jokeToAddResponse);

			// get the json data
			const jokeToAddJson = jokeToAddResponse.json()
			console.log(jokeToAddJson);
			this.setState({addJoke: false})

		} catch(err) {
			console.error(err);
		}
	}

	render() {
		return (
			<div>
				<header>
            <nav>
              <a className="link" >Home</a>|
              <a className="link" >My Jokes</a> |
              <a className="link" onClick={()=> this.setState({addJoke: true})}>New Joke</a>
            </nav>
          </header>
				<h2>JokeContainer</h2>

				{
					this.state.addJoke 
					? <NewJokeForm addJoke={this.addJoke}/>
					: <JokeList jokes={this.state.jokes}/>
				}

				
			</div>
			)
	}
}


export default JokeContainer