import React, { Component } from 'react';
import './App.css';
import LoginRegisterForm from './LoginRegisterForm'
import JokeContainer from './JokeContainer'


class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false
    }
  }

  // add register method
  register = async (registerInfo) => {
    console.log("register in App.js was called");
    console.log(registerInfo);

    // get the url
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/register'
    
    try {
         // fetch url
      const registerResponse = await fetch(url, {
        // including the credentials
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(registerResponse);
    // conver to json data
      const registerJson = await registerResponse.json()
      console.log(registerJson);
      // added CORS on the back-end because the browser said that we need it
    } catch(err) {
      console.error(err);
    }

  }

  // add login method
  login = (loginInfo) => {

    console.log("login method was called");
  }


  render() {
    console.log(process.env.REACT_APP_API_URL);
    return (
      <div className="App">
        <LoginRegisterForm 
          register={this.register}
          login={this.login}
        />

        {
          this.state.loggedIn 
          ? <JokeContainer />
          : null
          }
        
      </div>
    );

  }
}

export default App;
