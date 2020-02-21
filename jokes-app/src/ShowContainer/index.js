import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import './index.css'


function ShowContainer(props) {	
	return(
		<div className="show-container">
			<div className="show">
				<Container>
					<div className="show-info">
						<h3 className="title">{props.joke.title}</h3>
						<p className="joke-description">{props.joke.joke}</p>
						<div className="author-date">
							<p>Date: {props.joke.created_at}</p>
							<p>By: {props.joke.owner.first_name}</p>	
						</div>

						{
							props.currentUserId === props.joke.owner.id
							?
							<div className="button">
								<Button onClick={()=> props.editJoke(props.joke.id)}>Edit</Button>
								<Button color="red" onClick={()=> props.deleteJoke(props.joke.id)}>Delete</Button>
							</div>
							: null
						}
						
					</div>
				</Container>
				
			</div>
			
		</div>
	)
}


export default ShowContainer