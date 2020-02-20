import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import LoginRegisterForm from './LoginRegisterForm'
import JokeContainer from './JokeContainer'


class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      currentUserId: -1,
      message: ''
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
          loggedIn: true,
          currentUserId: registerJson.data.id
        })
      } else {
        this.setState({message: registerJson.message})
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
      const loginJson = await loginResponse.json()

      if(loginJson.status === 200) {
        this.setState({
          loggedIn: true,
          currentUserId: loginJson.data.id
        })
        
      } else {
        this.setState({message: loginJson.message})
      }


    } catch(err) {
      console.error(err);
    }

  }

  // logout method
  logout = async () => {
    // get the url
    const url = process.env.REACT_APP_API_URL +'/api/v1/users/logout'
    
    try {
      const logoutResponse = await fetch(url, {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const logoutJson = await logoutResponse.json()

      if(logoutJson.status === 201) {
        this.setState({
          loggedIn: false,
          currentUserId: -1,
          message: ''
        }) 
      }


    } catch(err) {
      console.error(err);
    }

  }


  render() {

    return (
      <div className="App">
        {
          this.state.loggedIn 
          ? 
          <div>

            <JokeContainer 
              currentUserId={this.state.currentUserId}
              logout={this.logout}
            />
            
          </div>
          :
          <LoginRegisterForm 
          register={this.register}
          login={this.login}
          message={this.state.message}
          />
          }
        
      </div>
    );

  }
}

export default App;
