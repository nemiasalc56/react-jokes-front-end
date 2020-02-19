import React from 'react'


function JokeList(props) {
	// console.log(props.jokes);
	const jokes = props.jokes.map((joke) => {
		return (
			<li key={joke.id}>{joke.title}</li>
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