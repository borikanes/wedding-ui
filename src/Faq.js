import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Faq.css';
import TopicHeader from './TopicHeader.js';
import './HomePage.css';
import './MidSection.css';
import Footer from './Footer.js';

export default class Faq extends Component {
    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader height="90%" title="FAQs" detail="Common questions you may have about our wedding. Feel free to message us if you have more questions!"/>
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        <QuestionAndAnswer question="Which hotel can I stay at the night before the wedding" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
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

class QuestionAndAnswer extends Component {
    render(){
        return (
            <div className="Faq-question-answer-parent-div">
                <div className="Faq-question-div">
                    <h1>QUESTION</h1>
                    <p>{this.props.question}</p>
                </div>
                <div className="Faq-vertical-line-enclosing-div" >
                    <div className="Faq-vertical-line-div" ></div>
                </div>
                <div className="Faq-answer-div">
                    <h1>ANSWER</h1>
                    <p>{this.props.answer}</p>
                </div>
            </div>
        );
    }
}