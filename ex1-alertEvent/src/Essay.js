import React, { Component } from 'react';
import logo from './logo.svg';

class Essay extends Component {

  constructor (props) {
    super (props);

    this.state = {
      value: 'Por favor escribar un ensayo.'
    };
  }

  onTyping = (event) => {
    this.setState({ value: event.target.value });
  }

  submit = (event) => {
    event.preventDefault();
    alert(`El ensayo que escribió usted fue: ${this.state.value}`);
  }

  render() {
    //const name = this.state.name;
    //const age = this.state.age;
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Ensayo:
            <textarea type="text" value={this.state.name} onChange={this.onTyping}/>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default Essay;
