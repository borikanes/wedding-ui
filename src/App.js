import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Topheader.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < TopHeader />
        </header>
        <h1 className="App-body">
          Save the Date!
        </h1>
        <p className="App-body-detail">Mallory & Bori</p>
        <p className="App-body-detail">September 22, 2018</p>

      </div>
    );
  }
}

export default App;


class TopHeader extends Component {
  render() {
    return(
      <div className="TopHeader">
        <div className="Top-row-div">
          <h5 className="Top-row-div-date-location">September 22, 2018</h5>
          <h5 className="Top-row-div-date-location">College Park, Maryland</h5>
          <h5 className="Top-row-div-hashtag">#MalloryAndBori</h5>
        </div>
        <div className="Header-title-dummy">
          <h1>Mallory & Bori</h1>
        </div>
        <div className="Header-title">
          <h1>Mallory & Bori</h1>
        </div>
      </div>
    );
  }
}