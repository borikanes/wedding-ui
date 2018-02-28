import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './WeddingParty.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';
import Avatar from 'react-avatar';

export default class WeddingParty extends Component {
    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader title="Wedding Party" detail="Meet our friends" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        <WeddingPartyProfile height="200px"/>
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

class WeddingPartyProfile extends Component {
    render(){
        return (
            <div style={{'height': this.props.height}} className="Wedding-question-answer-parent-div">
                <div className="Wedding-left-profile-div">
                    <div className="Wedding-avatar-style" >
                        <Avatar className="Wedding-avatar-style" size="100" round="true" src="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966" />
                    </div>
                    <h1>TUMI OLUDEMI</h1>
                    <p>Bridesmaid</p>
                    <p>I'm the most awesome person ever but not really this is just a placeholder for text to test</p>
                </div>
                <div className="Wedding-vertical-line-enclosing-div" >
                    <div className="Wedding-vertical-line-div" ></div>
                </div>
                <div className="Wedding-right-profile-div">
                    <div className="Wedding-avatar-style" >
                        <Avatar className="Wedding-avatar-style" size="100" round="true" src="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966" />
                    </div>
                    <h1>RACHEL POISALL</h1>
                    <p>Bridesmaid</p>
                    <p>I'm the most awesome person ever but not really this is just a placeholder for text to test</p>
                </div>
            </div>
        );
    }
}