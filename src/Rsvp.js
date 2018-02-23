import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Rsvp.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css'

export default class Rsvp extends Component {
    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader title="RSVP" detail="Please RSVP because we need to know if you can join us. Danke!" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div /*style={innerDivHeight}*/ className="MidSection-inner-div" >
                        <a href="https://google.com">Click Me</a>
                    </div>
                    <div className="MidSection-mid-bottom-left-arc-div"></div>
                    <div className="MidSection-mid-bottom-right-arc-div"></div>
                </div>
            </div>            
        );
    }
}