import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';
import './Locations.css';

export default class Locations extends Component {
    render() {
        return (
            <div className="MidSection-parent-div">
                <TopicHeader title="Locations" detail="These are the venues the wedding will be taking place" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div /*style={innerDivHeight}*/ className="MidSection-inner-div" >
                        <div className="Locations-parent-div" >
                            <div className="Locations-church-div" >
                                <h1>Church</h1>
                                <p>Some church</p>
                                <p>Church ceremony starts at 11am</p>
                                <p>1600 Pennsylvania Ave, Some City, MD 22222</p>
                                <button className="Locations-direction-button" >Direction</button>
                            </div>
                            <div className="Locations-vertical-line-enclosing-div" >
                                <div className="Locations-vertical-line-div" ></div>
                            </div>
                            <div className="Locations-reception-div" >
                                <h1>Reception</h1>
                                <p>Some Hall's Placeholder</p>
                                <p>Reception starts at 2pm. You're welcome to arrive early</p>
                                <p>1600 Pennsylvania Avenue, Some City, MD 22222</p>
                                <button className="Locations-direction-button" >D i r e c t i o n</button>
                            </div>
                        </div>
                        <div className="Locations-initials-div">
                            <p>M</p>
                            <div className="Locations-initials-vertical-line-div" ></div>
                            <p>B</p>
                        </div>
                    </div>
                    <div className="MidSection-mid-bottom-left-arc-div"></div>
                    <div className="MidSection-mid-bottom-right-arc-div"></div>
                </div>
                <div className="MidSection-footer-divider-div" ></div>
                <Footer />
            </div>
        );
    }
}