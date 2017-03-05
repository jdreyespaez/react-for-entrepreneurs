import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DEFAULT_QUERY ='react';

const PATH_BASE =  'http://it-ebooks-api.info/v1';
const PATH_SEARCH = '/search/';
const PARAM_SEARCH = '{query}';

// `${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${DEFAULT_QUERY}`
// https://hn.it-ebooks-api.info/v1/search/react

class App extends Component {

  constructor (props) {
    super (props);

    this.state = {
      result: null,
      query: DEFAULT_QUERY,
    };
  }

  setSearchQuery = (result) => {
    this.setState({ result });
  }

  fetchSearchQuery = (result) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}${PARAM_SEARCH}${DEFAULT_QUERY}`)
      .then(response => response.json())
      .then(result => this.setSearchQuery(result));
  }

  componentDidMount() {
    const { query } = this.state;
    this.fetchSearchQuery(query);
  }

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        </div>
        <br/>
      </div>
    );
  }
}

export default App;
