import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './HomePage.css';

var ampersandSpanStyle = {
    fontSize: '60px',
    color: 'white',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
};


export default class HomePage extends Component {

    render() {
        return (
            <div className="Homepage-top-image-div">
                <div className="Homepage-top-image"></div>
                <div className="Homepage-top-image-text-div">
                    <h1>We're getting married!</h1>
                </div>
                <div className="Homepage-mid-base-div">
                    <div className="Homepage-mid-innerbase-div">
                        <div className="Homepage-mid-top-left-arc-div"></div>
                        <div className="Homepage-mid-top-right-arc-div"></div>
                        <div className="Homepage-mid-name-div">
                            <div className="Homepage-mid-mallory-div">
                                <h1> 
                                    Mallory 
                                    <span> McDonald </span>
                                </h1>
                            </div>
                            <span style={ampersandSpanStyle}>&</span>
                            <div className="Homepage-mid-bori-div">
                                <h1> 
                                    Oluwabori
                                    <span> Oludemi </span>
                                </h1>
                            </div>
                        </div>
                        <div className="Homepage-mid-bottom-left-arc-div"></div>
                        <div className="Homepage-mid-bottom-right-arc-div"></div>
                    </div>
                </div>
            </div>
        );
    }
}