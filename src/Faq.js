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
                    <div style={{'alignItems': 'center'}} className="MidSection-inner-div" >
                        <QuestionAndAnswer question="Can I bring guests to the wedding?" answer="The number of guests that you may bring is noted in your invitation. You may not bring more than the number indicated. The wedding is strictly by invitation."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>
                        <QuestionAndAnswer question="What hotel can I stay at the night before the wedding?" answer="You can stay at any hotel in the area. We recommend the Fairfield Inn by Marriott in Laurel. There are also several low-budget hotels close to the Banquet Hall."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>
                        <QuestionAndAnswer question="Where can I find parking?" answer="Parking at the Chapel is limited. Check back here for information as we get closer to the wedding day. Parking at the Banquet Hall is abundant."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>
                        <br/>
                        <QuestionAndAnswer question="What is the dress code?" answer="Semi-formal OR traditional Nigerian clothing."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>
                        
                        <QuestionAndAnswer question="What is the color of the wedding?" answer="Teal and Champagne."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer question="What is the wedding schedule?" answer={"You can view the schedule "}/>                        
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer question="What should I expect at the traditional Nigerian ceremony?" answer=""/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>
                        <QuestionAndAnswer question="What are some things to do around the area?" answer=""/>
                        <div className="Faq-question-answer-space-div" ></div>
                        <div className="Faq-question-answer-space-div" ></div>
                        <div className="Faq-question-answer-space-div" ></div>
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
        var evenLonger = {}
        if (this.props.question.includes('expect at the traditional')) {
            evenLonger = {
                display: 'none'
            }
        }

        var longerHeightVerticalLine = {}
        if (this.props.question.includes('to do around the area')) {
            longerHeightVerticalLine = {
                height: '450px'
            }
        }

        return (
            <div className="Faq-question-answer-parent-div">
                <div className="Faq-question-div">
                    <h1>QUESTION</h1>
                    <p>{this.props.question}</p>
                </div>
                <div style={longerHeightVerticalLine} className="Faq-vertical-line-enclosing-div" >
                    <div className="Faq-vertical-line-div" ></div>
                </div>
                {/* This is different from the normal space div*/}
                <div className="Faq-question-answer-space" ></div>
                <div className="Faq-answer-div">
                    <h1>ANSWER</h1>
                    { this.props.question.includes('wedding schedule?') && !this.props.question.includes('expect at the traditional') ? 
                        <p>You can view the schedule <a href="https://boriandmallory.com/schedule">here</a>.</p> :
                        <p style={evenLonger}>{this.props.answer}</p>
                    }
                    {
                        this.props.question.includes('expect at the traditional') ? 
                        <p style={{'marginTop': '0', 'marginBottom': '0'}}>The Nigerian traditional ceremony is unique. We want to point your attention to one thing
                            that may seem strange. Spraying Money. Yes, you read that right. The bride and groom(and anyone who dances well)
                            gets sprayed money. You can read about it <a href="https://www.quora.com/Why-do-Nigerians-like-spraying-money-in-weddings-and-other-occasions"> here</a>. Also,
                            <a href="https://www.youtube.com/watch?v=C1NJDdw7nP8"> here's a video</a> showing how it typically goes.
                        </p> :
                        <p style={{'display': 'none'}}>{this.props.answer}</p>
                    }
                    { this.props.question.includes('to do around the area') ? 
                        <p style={evenLonger}>Close to Banquet Hall:<br/>
                            <a href="http://www.savagemill.com/">Historic Savage Mill</a><br/>
                            <a href="https://jailbreakbrewing.com/">Jailbreak Brewing Company</a><br/><br/>
                            Close to Chapel:<br/>
                            <a href="https://www.umd.edu/">University of Maryland</a> - you can go to the Visitor Center (7757 Baltimore Ave, College Park, MD 20740) for a self-guided tour map<br/>
                            <a href="http://www.collegeparkaviationmuseum.com/1593/College-Park-Aviation-Museum">College Park Aviation Museum</a><br/><br/>
                            Washington DC is less than 10 miles south of College Park!<br/>
                            We recommend the Smithsonian museums and checking out the memorials. More info <a href="https://washington.org/things-do-washington-dc">here</a>. 
                        </p> :
                        <p style={{'display': 'none'}}>{this.props.answer}</p>
                    }
                </div>
            </div>
        );
    }
}