import React from 'react'

function ShowContainer(props) {
	console.log(props.currentUserId)
	
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
					<button onClick={()=> props.editJoke(props.joke.id)}>Edit</button>
					<button>Delete</button>
				</div>
				: null
			}

		</div>
		)
}


export default ShowContainer