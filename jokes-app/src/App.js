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


  render() {
    console.log(process.env);
    return (
      <div className="App">
        <LoginRegisterForm />
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
