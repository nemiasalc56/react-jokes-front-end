import React from 'react'

function ShowContainer(props) {
	console.log(props.joke);
	return(
		<div>
			<h2>ShowContainer</h2>

			<h3>{props.joke.title}</h3>
			<p>{props.joke.joke}</p>
			<p>Date: {props.joke.created_at}</p>
			<p>By: {props.joke.owner.first_name}</p>

		</div>
		)
}


export default ShowContainer