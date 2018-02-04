import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './HomePage.css';

export default class HomePage extends Component {

    render() {
        return (
            <div className="Homepage-top-image-div">
                <div className="Homepage-top-image"></div>
                <div className="Homepage-top-image-text-div">
                    <h1>We're getting married!</h1>
                </div>
            </div>
        );
    }
}