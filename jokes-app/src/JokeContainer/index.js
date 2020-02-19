import React, { Component } from 'react'
import JokeList from '../JokeList'
import NewJokeForm from '../NewJokeForm'
import EditJokeForm from '../EditJokeForm'
import ShowContainer from '../ShowContainer'


class JokeContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			jokes: [],
			idOfJokeToShow: -1,
			addJoke: false,
			jokeListOpen: true,
			showJokeOpen: false,
			editJokeOpen: false,
			isMyJoke: false,
			idOfJokeToEdit: -1,
		}
	}

	componentDidMount() {

		this.getJokes()
	}

	// get the jokes
	getJokes = async () => {
		// get the url
		let url
		if(this.state.isMyJoke) {
			url = process.env.REACT_APP_API_URL + '/api/v1/jokes/mine'
		} else {
			url = process.env.REACT_APP_API_URL + '/api/v1/jokes/'
		}
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

		// get json
		const jokesJson = await jokesResponse.json()
		// get the jokes in state
		this.setState({
			jokes: jokesJson.data
		})

	}

	// show one joke with info
	getOneJoke = async (idOfJokeToShow) => {
		console.log(idOfJokeToShow);

		this.setState({
			idOfJokeToShow: idOfJokeToShow,
			jokeListOpen: false
		})
	}



	// create a joke
	addJoke = async (jokeToAdd) => {
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

			// get the json data
			const jokeToAddJson = await jokeToAddResponse.json()

			// this is so that we can the joke that was added showing on the page
			if(jokeToAddJson.status === 201) {
				const state = this.state

				state.jokes.push(jokeToAddJson.data)
				state.addJoke = false

				this.setState(state)
			}

		} catch(err) {
			console.error(err);
		}
	}

	// get my jokes // chage the name for one more semantic
	switchJokes = async (e) => {
		console.log("switchJokes was called");
		if(e.target.name === "home") {
			this.setState({
				isMyJoke: false,
				jokeListOpen: true,
				editJokeOpen: false,
				idOfJokeToShow: -1
			})
			this.getJokes()
		} else {
			this.setState({isMyJoke: true})
			this.getJokes()
		}

	}

	// find the joke to edit
	editJoke = (idOfJokeToEdit) => {
		
		this.setState({
			idOfJokeToEdit: idOfJokeToEdit
		})
		console.log(this.state);

	}

	// update joke
	updateJoke = async (newJokeInfo) => {
		console.log("this is newJokeInfo in updateJoke ");
		console.log(newJokeInfo);
		try {
			// fetch the url with the id of the joke to update
			const url = process.env.REACT_APP_API_URL + '/api/v1/jokes/' + this.state.idOfJokeToEdit
			const updateJokeResponse = await fetch(url, {
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(newJokeInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log(updateJokeResponse);
			const updateJokeJson = await updateJokeResponse.json()
			console.log(updateJokeJson);

		} catch(err) {
			console.error(err);
		}
	}

	render() {
		return (
			<div>
				<header>
            <nav>
              <a href="#" 
              		className="link" 
              		name="home" 
              		onClick={this.switchJokes}>Home</a>|
              <a href="#" 
              		className="link"
              		name="my jokes"
              		onClick={this.switchJokes}>My Jokes</a> |
              <a href="#"
              		className="link"
              		onClick={()=> this.setState({addJoke: true})}>New Joke</a>
            </nav>
          </header>
				<h2>JokeContainer</h2>

				{this.state.addJoke 
					? <NewJokeForm 
						addJoke={this.addJoke}
						getJokes={this.getJokes}
					/>
					: null
				}
				{this.state.jokeListOpen
					?
					<JokeList 
						jokes={this.state.jokes}
						editJoke={this.editJoke}
						getOneJoke={this.getOneJoke}
					/>
					: null
				}
				{
					this.state.idOfJokeToEdit !== -1
					?
					<EditJokeForm 
						jokeToEdit={this.state.jokes.find((joke) => joke.id === this.state.idOfJokeToEdit)}
						updateJoke={this.updateJoke}
					/>
					: null
				}
				{this.state.idOfJokeToShow !==-1
					?
					<ShowContainer joke={this.state.jokes.find((joke) => joke.id === this.state.idOfJokeToShow)}/>
					: null

				}

				
			</div>
			)
	}
}


export default JokeContainer