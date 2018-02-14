import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './Topheader.css';
import TopHeader from './TopHeader.js';
import HomePage from './HomePage.js';
import Footer from './Footer.js';
import Faq from './Faq';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        < TopHeader />
                    </header>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/faq" component={Faq}/>
                    < Footer />
                </div>
            </Router>
        );
    }
}

export default App;


