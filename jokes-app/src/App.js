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
      // conver to json data
      const registerJson = await registerResponse.json()
      // added CORS on the back-end because the browser said that we need it

      if(registerResponse.status === 201) {
        this.setState({
          loggedIn: true
        })
      }
    } catch(err) {
      console.error(err);
    }

  }

  // add login method
  login = async (loginInfo) => {
    // get the url
    const url = process.env.REACT_APP_API_URL +'/api/v1/users/login'
    
    try {
      const loginResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const loginJson = loginResponse.json()

      if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true
        })
      }

    } catch(err) {
      console.error(err);
    }

    console.log("login method was called");
  }


  render() {

    return (
      <div className="App">
        {
          this.state.loggedIn 
          ? 
          <div>

            <JokeContainer />
            
          </div>
          :
          <LoginRegisterForm 
          register={this.register}
          login={this.login}
          />
          }
        
      </div>
    );

  }
}

export default App;
