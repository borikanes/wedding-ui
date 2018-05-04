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
                <TopicHeader title="RSVP" detail="Please RSVP by July 22nd." />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        <div className="Rsvp-paragraph-div" >
                            <p>
                                Because we are passionate about technology (Bori) and saving trees (Mallory), we will NOT be sending out paper invitations but rather will send them via email.
                            </p>
                            <br/> 
                            <p>
                                To RSVP, either click the link we sent you via email OR type in your first name and surname below. This will only work for those who received an invitation in their inbox.
                            </p>
                            <p>
                                NOTE: The RSVP tool below works best on bigger screens
                            </p>
                            <iframe title="anrsvp" style={{'display':'block', 'width': '100%', 'height': '575px', 'border': 'none', 'overflow': 'hidden'}}
                                src="https://boriandmallory.anrsvp.com/?embed=true">
                            </iframe>
                            {/* <br/>  */}
                            <p style={{'marginTop':'0px'}} >
                                We encourage you to RSVP as soon as you can so we can plan adequately for you, our guests.
                            </p>
                            <br/> 
                            <p>
                                Please RSVP by July 22, 2018 at the latest.
                            </p>
                            <br/> 
                            <p>
                                We are honored and ecstatic to have you celebrate our love with us.
                            </p>
                        </div>
                        <div className="Rsvp-initials-div">
                            <p>M</p>
                            <div className="Rsvp-initials-vertical-line-div" ></div>
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