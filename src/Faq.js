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
                        <QuestionAndAnswer height="100px" question="What hotel can I stay at the night before the wedding?" answer="You can stay at any hotel in College Park or in Laurel."/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer height="100px" question="Where can I find parking?" answer="Parking at the chapel is limited. You'll receive more information as we get closer to the wedding day."/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer height="100px" question="What places can I visit around the area?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer height="100px" question="Can I bring guests to the wedding?" answer="The number of guests that you may bring is noted in your invitation. You may not bring more than the number indicated."/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer height="100px" question="What is the dress code?" answer="Semi-formal OR traditional Nigerian clothing."/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer height="100px" question="What is the color of the wedding?" answer="Teal and Champagne."/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer height="100px" question="What is the wedding schedule?" answer="Link to Itinerary page here."/>
                        <div className="Faq-question-answer-space-div" ></div>
                        {/* <QuestionAndAnswer height="200px" question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" ></div> */}
                        <div className="Faq-question-answer-space-div" ></div>
                        <div className="Faq-mid-initials-div">
                            <p>M</p>
                            <div className="Faq-mid-initials-vertical-line-div" ></div>
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

class QuestionAndAnswer extends Component {
    render(){
        return (
            <div style={{'height': this.props.height}} className="Faq-question-answer-parent-div">
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