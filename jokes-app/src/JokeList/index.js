import React from 'react'
import { Card } from 'semantic-ui-react'


function JokeList(props) {
	let jokesFiltered
	if(props.isMyJoke) {
		jokesFiltered = props.jokes.filter(joke => props.currentUserId === joke.owner.id)
	} else {
		jokesFiltered = props.jokes.filter(joke => joke)
	}


	const jokes = jokesFiltered.map((joke) => {
		return (
			<Card onClick={() => props.getOneJoke(joke.id)} key={joke.id}>
				<Card.Content>
					<Card.Header 
						className="title"
						key={joke.id} 
						>
						{joke.title}
					</Card.Header>
				</Card.Content>
			</Card>
			)
	})

	return(
		<div className="joke">
			<h2>Jokes</h2>
			<div className="jokeList">
				<Card.Group>{jokes}</Card.Group>
			</div>
			
		</div>
		)
}


export default JokeList