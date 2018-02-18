import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Faq.css';
import TopicHeader from './TopicHeader.js';
import MidSection from './MidSection.js';
import './HomePage.css';

export default class Faq extends Component {
    render(){
        return(
            <div className="Faq-parent-div">
                <TopicHeader height="90%" title="FAQs" detail="Common questions you may have about our wedding. Feel free to message us if you have more questions!"/>
                <div className="Faq-body-content-div" >
                    <div className="Faq-mid-top-left-arc-div"></div>
                    <div className="Faq-mid-top-right-arc-div"></div>
                    <div>

                    </div>

                </div>
            </div>
        );
    }
}