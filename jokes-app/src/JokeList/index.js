import React from 'react'


function JokeList(props) {
	// console.log(props.jokes);
	const jokes = props.jokes.map((joke) => {
		return (
			<div key={joke.id}>
				<li onClick={() => props.getOneJoke(joke.id)}>{joke.title}</li>
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