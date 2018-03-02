import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './Topheader.css';
import TopHeader from './TopHeader.js';
import HomePage from './HomePage.js';
import Faq from './Faq';
import Weddingparty from './WeddingParty.js';
import Registry from './Registry.js';
import Rsvp from './Rsvp.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header"></header>
                <div className="App-body-left-div" >
                    <p>M</p>
                </div>
                <div className="App-body-base-image-div">
                    <div className="App-body-image-div" ></div>
                </div>
                <div className="App-body-right-div" >
                    <p>B</p>
                </div>
            </div>
        );
    }
}

export default App;


