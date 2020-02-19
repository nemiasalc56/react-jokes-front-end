import React from 'react'


function JokeList(props) {
	// console.log(props.jokes);
	const jokes = props.jokes.map((joke) => {
		return (
			<div key={joke.id}>
				<li>{joke.title}</li>
				<button onClick={() => props.editJoke(joke.id)}>Edit</button>
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