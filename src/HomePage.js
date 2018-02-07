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
                <div className="Homepage-mid-base-div">
                    <div className="Homepage-mid-innerbase-div">
                        <div className="Homepage-mid-top-left-arc-div"></div>
                        <div className="Homepage-mid-top-right-arc-div"></div>
                        <div className="Homepage-mid-name-div">
                            
                        </div>
                        <div className="Homepage-mid-bottom-left-arc-div"></div>
                        <div className="Homepage-mid-bottom-right-arc-div"></div>
                    </div>
                </div>
            </div>
        );
    }
}