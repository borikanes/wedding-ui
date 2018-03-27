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
import Locations from './Locations.js';
import Rsvp from './Rsvp.js';
import Schedule from './Schedule.js';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        < TopHeader />
                    </header>
                    <Route exact path="/faq" component={Faq}/>
                    <Route exact path="/weddingparty" component={Weddingparty}/>
                    <Route exact path="/registry" component={Registry}/>
                    <Route exact path="/rsvp" component={Rsvp}/>
                    <Route exact path="/locations" component={Locations}/>
                    <Route exact path="/schedule" component={Schedule}/>
                    <Route exact path="/" component={HomePage}/>
                </div>
            </Router>
        );
    }
}

export default App;


