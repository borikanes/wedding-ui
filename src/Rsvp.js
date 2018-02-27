import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Rsvp.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';

export default class Rsvp extends Component {
    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader title="RSVP" detail="Please RSVP because we need to know if you can join us. Danke!" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div /*style={innerDivHeight}*/ className="MidSection-inner-div" >
                        <div className="Rsvp-paragraph-div" >
                        <p>
                            Because we are passionate about saving trees, we will NOT be sending out paper 
                            invites but rather will send them over email.
                        </p>
                        <br/> 
                        <p>
                            If you've not received an email from us please reach out to Bori or Mallory. 
                        </p>
                        <br/> 
                        <p>
                            We encourage you to RSVP as soon as you can so we can plan adequately for you, our guests.
                        </p>
                        <br/> 
                        <p>
                            We are honored and ecstatic to have you celebrate our love.
                        </p>
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