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
			const jokeToAddJson = await jokeToAddResponse.json()
			console.log(jokeToAddJson.status);

			// this is so that we can the joke that was added showing on the page
			if(jokeToAddJson.status === 201) {
				const state = this.state
				console.log(state);
				state.jokes.push(jokeToAddJson.data)
				state.addJoke = false
				console.log(state);
				this.setState(state)

			}

		} catch(err) {
			console.error(err);
		}
	}

	render() {
		return (
			<div>
				<header>
            <nav>
              <p className="link" >Home</p>|
              <p className="link" >My Jokes</p> |
              <p className="link" onClick={()=> this.setState({addJoke: true})}>New Joke</p>
            </nav>
          </header>
				<h2>JokeContainer</h2>

				{
					this.state.addJoke 
					? <NewJokeForm 
						addJoke={this.addJoke}
						getJokes={this.getJokes}
					/>
					: <JokeList jokes={this.state.jokes}/>
				}

				
			</div>
			)
	}
}


export default JokeContainer