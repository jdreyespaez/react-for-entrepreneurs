import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Toggle extends Component {
  constructor (props) {
    super(props);
    this.state = {isToggleOn: true};

    // The binding thing I don't understand.
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;
