import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <h1 className="App-body">
          Save The Date
        </h1>
        <p className="App-body-detail">Mallory & Bori</p>
        <p className="App-body-detail">September 22, 2018</p>

      </div>
    );
  }
}

export default App;
