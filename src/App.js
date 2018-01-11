import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import SearchBar from './containers/search';
import List from './containers/list';

class App extends Component {
  render() {
    return (
      <div>
      	
        <SearchBar />
        <List />
       
      </div>
    );
  }
}

export default App;
