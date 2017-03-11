import React, { Component } from 'react';
import logo from './logo.svg';

class SaborHelado extends Component {

  constructor (props) {
    super (props);

    this.state = { value: 'Coco'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Tu saber de helado favorito es: ${this.state.value}`);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Selecciona tu sabor favorito:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="papaya">Papaya</option>
              <option value="gulupa">Gulupa</option>
              <option value="coco">Coco</option>
              <option value="sapote">Sapote</option>
            </select>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default SaborHelado;
