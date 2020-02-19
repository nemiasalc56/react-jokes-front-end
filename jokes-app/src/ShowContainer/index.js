import React from 'react'

function ShowContainer(props) {
	console.log(props.currentUserId)
	// find the id of user logged in
	const url = process.env.REACT_APP_API_URL + '/api/v1/users/loggedId'
	
	return(
		<div>
			<h2>ShowContainer</h2>

			<h3>{props.joke.title}</h3>
			<p>{props.joke.joke}</p>
			<p>Date: {props.joke.created_at}</p>
			<p>By: {props.joke.owner.first_name}</p>

			{
				props.currentUserId === props.joke.id
				?
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
				: null
			}

		</div>
		)
}


export default ShowContainer