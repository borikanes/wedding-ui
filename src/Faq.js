import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Faq.css';
import TopicHeader from './TopicHeader.js';
import './HomePage.css';
import './MidSection.css';
import Footer from './Footer.js';

export default class Faq extends Component {
    constructor (props) {
        super(props)
        this.state = { height: '100px', longerHeight: '200px', evenLonger: '300px' }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        if(window.matchMedia("(max-width: 400px)").matches) {
            this.setState({
                height: '250px',
                longerHeight: '300px',
                evenLonger: '450px'
            })
        } else if(window.matchMedia("(max-width: 720px)").matches) {
            this.setState({
                height: '200px',
                longerHeight: '250px',
                evenLonger: '400px'
            })
        } 
        else {
            this.setState({
                height: '100px',
                longerHeight: '200px',
                evenLonger: '300px'
            })
        }
      }

    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader height="90%" title="FAQs" detail="Common questions you may have about our wedding. Feel free to message us if you have more questions!"/>
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div style={{'alignItems': 'center'}} className="MidSection-inner-div" >
                        <QuestionAndAnswer height={this.state.longerHeight} question="Can I bring guests to the wedding?" answer="The number of guests that you may bring is noted in your invitation. You may not bring more than the number indicated. The wedding is strictly by invitation."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>
                        <div className="Faq-question-answer-space-div" ></div>
                        <QuestionAndAnswer height={this.state.height} question="What hotel can I stay at the night before the wedding?" answer="You can stay at any hotel in College Park or in Laurel."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.height} question="Where can I find parking?" answer="Parking at the chapel is limited. You'll receive more information as we get closer to the wedding day."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.height} question="What places can I visit around the area?" answer="You can stay at any hotel in College park or in Laurel."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.height} question="What is the dress code?" answer="Semi-formal OR traditional Nigerian clothing."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>
                        
                        <QuestionAndAnswer height={this.state.height} question="What is the color of the wedding?" answer="Teal and Champagne."/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.height} question="What is the wedding schedule?" answer={"You can view the schedule "}/>                        
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.evenLonger} question="What should I expect at the traditional Nigerian ceremony?" answer=""/>
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
                </div>
            </div>
        );
    }
}