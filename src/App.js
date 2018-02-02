import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './Topheader.css';
import TopHeader from './TopHeader.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    < TopHeader />
                </header>
                <div className="App-top-image-div">

                </div>
                {/* <h1 className="App-body">
                  Save the Date!
                </h1>
                <p className="App-body-detail">Mallory & Bori</p>
                <p className="App-body-detail">September 22, 2018</p> */}

            </div>
        );
    }
}

export default App;


