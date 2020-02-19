import React from 'react'


function JokeList(props) {
	let jokesFiltered
	if(props.isMyJoke) {
		jokesFiltered = props.jokes.filter(joke => props.currentUserId === joke.owner.id)
	} else {
		jokesFiltered = props.jokes.filter(joke => joke)
	}


	const jokes = jokesFiltered.map((joke) => {
		return (
			<div key={joke.id}>
				<li key={joke.id} onClick={() => props.getOneJoke(joke.id)}>{joke.title}</li>
			</div>
			)
	})

	return(
		<div>
			<h2>JokeList</h2>
			<ul>{jokes}</ul>
		</div>
		)
}


export default JokeList