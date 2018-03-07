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