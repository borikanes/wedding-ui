import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';
// import './Topheader.css';
// import TopHeader from './TopHeader.js';
// import HomePage from './HomePage.js';
// import Faq from './Faq';
// import Weddingparty from './WeddingParty.js';
// import Registry from './Registry.js';
// import Rsvp from './Rsvp.js';

class App extends Component {
    handleClick(){
        console.log(process.env.REACT_APP_DEEZ);
    }
    render() {
        var saveTheDateStyle;
        var dayStyle;
        if (window.matchMedia("(max-width: 400px)").matches) {
            saveTheDateStyle = {
                marginBottom: '20px', 
                marginTop: '20px', 
                fontSize: '35px', 
                color: 'turquoise'
            };

            dayStyle = {
                fontSize: '40px',
                marginTop: '15px'
            };
        } else {
            saveTheDateStyle = {
                marginBottom: '0', 
                marginTop: '0', 
                fontSize: '50px', 
                color: 'turquoise'
            };
            
            dayStyle = {
                fontSize: '45px'
            };
        }
        return (
            <div className="App">
                <header className="App-header"></header>
                <div className="App-body-left-div" >
                    <p>M</p>
                </div>
                <div className="App-body-mid-div">
                    <div className="App-mid-innerbase-div">
                        <div className="App-mid-top-left-arc-div"></div>
                        <div className="App-mid-top-right-arc-div"></div>

                        <div className="App-mid-name-div"> 
                            <div className="App-mallory-div">
                                <h1>Mallory</h1>
                                <h1>McDonald</h1>
                            </div>
                            <div className="App-ampersand-div">
                                <h1 style={{'fontSize': '2.2em'}}>&</h1>
                            </div>
                            <div className="App-bori-div">
                                <h1>Oluwabori</h1>
                                <h1>Oludemi</h1>
                            </div>
                        </div>
                        <div className="App-uppermid-div">
                            <h1 className="App-save-the-date-h1" >SAVE THE DATE!</h1>
                            <h1 style={{'marginBottom': '0', 'marginTop': '10px', 'fontWeight': 'normal'}} >We're getting married</h1>
                            <h1 style={{'marginBottom': '0', 'marginTop': '0', 'fontWeight': 'normal'}} >on</h1>
                        </div>
                        <div className="App-date-div" >
                            <div className="App-month-div">
                                <hr className="App-horizontal-line" />
                                <p>September</p>
                                <hr className="App-horizontal-line" />
                            </div>
                            <div className="App-day-div">
                                <p>22</p>
                            </div>
                            <div className="App-year-div">
                            <hr className="App-horizontal-line" />
                                <p>2018</p>
                                <hr className="App-horizontal-line" />
                            </div>
                        </div>
                        <div className="App-location-div" >
                            <h1>in</h1>
                            <h1>College Park, Maryland</h1>
                        </div>
                        <div className="App-mid-bottom-horizontal-line-div">
                            <hr className="App-bottom-horizontal-line" />
                        </div>
                        <div className="App-webiste-info-div" >
                            <p>Wedding Website - <a href="https://boriandmallory.com">boriandmallory.com</a></p>
                        </div>
                        <div className="App-mid-initials-div">
                            <p>M</p>
                            <div className="App-mid-initials-vertical-line-div" ></div>
                            <p>B</p>
                        </div>

                        <div className="App-mid-bottom-left-arc-div"></div>
                        <div className="App-mid-bottom-right-arc-div"></div>
                    </div>
                </div>
                <div className="App-body-right-div" >
                    <p>B</p>
                </div>
            </div>
        );
    }
}

export default App;


