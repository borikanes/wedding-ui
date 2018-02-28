import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './WeddingParty.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';

export default class WeddingParty extends Component {
    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader title="Wedding Party" detail="Meet our friends" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        
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