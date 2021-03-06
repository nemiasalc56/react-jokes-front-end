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
			isMyJoke: false,
			idOfJokeToEdit: -1
		}
	}

	componentDidMount() {

		this.getJokes()
	}

	// get the jokes
	getJokes = async () => {
		// get the url
		const url = process.env.REACT_APP_API_URL + '/api/v1/jokes/'
		
		try {

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
		} catch(err) {
			console.error(err);
		}

	}

	// show one joke with info
	getOneJoke = async (idOfJokeToShow) => {

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
				state.jokeListOpen = true

				this.setState(state)
			}

		} catch(err) {
			console.error(err);
		}
	}

	// get my jokes // change the name for one more semantic
	switchJokes = (name) => {

		if(name === "home") {
			this.setState({
				isMyJoke: false,
				jokeListOpen: true,
				idOfJokeToShow: -1,
				addJoke: false,
				idOfJokeToEdit: -1
			})
			this.getJokes()
		} else if(name === "my-jokes") {
			this.setState({
				isMyJoke: true,
				addJoke: false,
				idOfJokeToShow: -1,
				jokeListOpen: true,
				idOfJokeToEdit: -1
			})
			this.getJokes()
		} else if(name === "new-joke") {
			this.setState({
      			addJoke: true,
      			jokeListOpen: false,
      			idOfJokeToShow: -1,
      			idOfJokeToEdit: -1
      			})
		}

	}

	// find the joke to edit
	editJoke = (idOfJokeToEdit) => {
		
		this.setState({
			idOfJokeToEdit: idOfJokeToEdit,
			idOfJokeToShow: -1
		})
	}

	// update joke
	updateJoke = async (newJokeInfo) => {
	
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

			const updateJokeJson = await updateJokeResponse.json()
			
			// reflect changes on the screen
			if(updateJokeJson.status === 200) {
				// loop through the jokes
				const newArrayOfJokes = this.state.jokes.map((joke)=> {
					// we want to return everything with the updated one
					if(joke.id === this.state.idOfJokeToEdit) {
						return updateJokeJson.data
					} else {
						return joke
					}

				})

				this.setState({
					jokes: newArrayOfJokes,
					idOfJokeToEdit: -1,
					jokeListOpen: true
				})
			}

		} catch(err) {
			console.error(err);
		}
	}

	// delete method
	deleteJoke = async (idOfJokeToDelete) => {
		// find the joke to delete
		// delete joke
		try {
			// get the url
			const url = process.env.REACT_APP_API_URL + '/api/v1/jokes/' + idOfJokeToDelete
			// fetch url
			const jokeToDeleteResponse = await fetch(url, {
				credentials: 'include',
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const jokeToDeleteJson = await jokeToDeleteResponse.json()

			// remove the joke from my array of jokes
			if(jokeToDeleteJson.status === 200) {
				const jokes = this.state.jokes
				let index = 0
				for(let i = 0; i < jokes.length; i++) {
					if(jokes[i].id === idOfJokeToDelete) {
						index = i
					}
				}

				jokes.splice(index, 1)
				this.setState({
					jokes: jokes,
					jokeListOpen: true,
					idOfJokeToShow: -1
				})
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
		              <p
		              		className="link" 
		              		onClick={()=>this.switchJokes("home")}>Home</p>|
		              <p
		              		className="link"
		              		name="my-jokes"
		              		onClick={()=>this.switchJokes("my-jokes")}>My Jokes</p> |
		              <p
		              		className="link"
		              		onClick={()=> this.switchJokes("new-joke")}>New Joke</p> |
		              	<p 	className="link"
		              		onClick={this.props.logout}>Logout</p>
		            </nav>
          		</header>

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
						getOneJoke={this.getOneJoke}
						isMyJoke={this.state.isMyJoke}
						currentUserId={this.props.currentUserId}
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
				{this.state.idOfJokeToShow !== -1
					?
					<ShowContainer 
						joke={this.state.jokes.find((joke) => joke.id === this.state.idOfJokeToShow)}
						currentUserId={this.props.currentUserId}
						editJoke={this.editJoke}
						deleteJoke={this.deleteJoke}
						/>
					: null

				}

				
			</div>
			)
	}
}


export default JokeContainer