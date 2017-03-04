import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super (props);

    this.state = {
      name
    };
  }

  onTyping = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        </div>
        <br/>
        <form>
          <input type="text" value={this.state.name} onChange={this.onTyping}/>
        </form>
        <p className="App-intro">
          Hello, world!
        </p>

      </div>
    );
  }
}

export default App;
