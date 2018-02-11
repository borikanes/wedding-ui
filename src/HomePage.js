import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './HomePage.css';

export default class HomePage extends Component {

    render() {
        var ampersandSpanStyle;
        if (window.matchMedia("(min-width: 446px)").matches && window.matchMedia("(max-width: 659px)").matches) {
            ampersandSpanStyle = {
                fontSize: '40px',
                color: 'black',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            };
        } else {
            ampersandSpanStyle = {
                fontSize: '60px',
                color: 'black',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            };
        }
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
                                    Bori
                                    <span> Oludemi </span>
                                </h1>
                            </div>
                        </div>
                        <div className="Homepage-mid-hashtag-div">
                            <p>#malloryandbori</p>
                        </div>
                        <div className="Homepage-mid-date-base-div">
                            <div className="Homepage-mid-date-month-div">
                                <hr className="Homepage-horizontal-line" />
                                <p>September</p>
                                <hr className="Homepage-horizontal-line" />
                            </div>
                            <div className="Homepage-mid-date-day-div">
                                <p>22</p>
                            </div>
                            <div className="Homepage-mid-date-year-div">
                            <hr className="Homepage-horizontal-line" />
                                <p>2018</p>
                                <hr className="Homepage-horizontal-line" />
                            </div>
                        </div>
                        <div className="Homepage-mid-location-div" >
                                <p>College Park, MD</p>
                        </div>
                        
                        <div className="Homepage-mid-bottom-horizontal-line-div">
                            <hr className="Homepage-bottom-horizontal-line" />
                        </div>
                        <div className="Homepage-mid-initials-div">
                            <p>M</p>
                            <div className="Homepage-mid-initials-vertical-line-div" ></div>
                            <p>B</p>
                        </div>
                        <div className="Homepage-mid-bottom-left-arc-div"></div>
                        <div className="Homepage-mid-bottom-right-arc-div"></div>
                    </div>
                </div>
            </div>
        );
    }
}