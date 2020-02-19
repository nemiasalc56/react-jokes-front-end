import React from 'react'


function JokeList(props) {

	const jokes = props.jokes.map((joke) => {
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