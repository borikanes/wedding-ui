import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Faq.css';
import TopicHeader from './TopicHeader.js';
import './HomePage.css';
import './MidSection.css';

export default class Faq extends Component {
    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader height="90%" title="FAQs" detail="Common questions you may have about our wedding. Feel free to message us if you have more questions!"/>
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        <QuestionAndAnswer />
                    </div>
                    <div className="MidSection-mid-bottom-left-arc-div"></div>
                    <div className="MidSection-mid-bottom-right-arc-div"></div>
                </div>
            </div>
        );
    }
}

class QuestionAndAnswer extends Component {
    render(){
        return (
            <div className="Faq-question-answer-parent-div">
                <div className="Faq-question-div">
                    <h1>Question:</h1>
                    <p>Which hotel can I stay at the night before the wedding</p>
                </div>
                <div className="Faq-vertical-line-enclosing-div" >
                    <div className="Faq-vertical-line-div" ></div>
                </div>
                <div className="Faq-answer-div">
                    <h1>Answer</h1>
                    <p>You can stay at any hotel in College park or in Laurel</p>
                </div>
            </div>
        );
    }
}