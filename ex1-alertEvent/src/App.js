import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super (props);

    this.state = {
      name,
      age: '',
    };
  }

  onTypingName = (event) => {
    this.setState({ name: event.target.value });
  }

  onTypingAge = (event) => {
    this.setState({ age: event.target.value });
  }

  submit = (event) => {
    event.preventDefault();
    alert(`Your name is ${this.state.name} and you are ${this.state.age} years old`);
  }

  render() {
    //const name = this.state.name;
    //const age = this.state.age;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>What's your name and age:</h2>
        </div>
        <br/>
      <form onSubmit={this.submit}>
          Name:
            <input type="text" value={this.state.name} onChange={this.onTypingName}/>
          <br/>
          Age:
            <input type="number" value={this.state.age} onChange={this.onTypingAge}/>
          <button>
            Greet me!
          </button>
        </form>
      </div>
    );
  }
}

export default App;
