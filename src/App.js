import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './Topheader.css';
import TopHeader from './TopHeader.js';
import HomePage from './HomePage.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    < TopHeader />
                </header>
                < HomePage />
                < Footer />
            </div>
        );
    }
}

export default App;


