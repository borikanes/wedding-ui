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
        this.state = { height: '100px' }
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
                height: '250px'
            })
        } else if(window.matchMedia("(max-width: 720px)").matches) {
            this.setState({
                height: '200px'
            })
        } 
        else {
            this.setState({
                height: '100px'
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
                        <QuestionAndAnswer height={this.state.height} question="Which hotel can I stay at the night before the wedding blahh blahh blahh blahh blahh" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.height} question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.height} question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.height} question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>

                        <QuestionAndAnswer height={this.state.height} question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
                        <div className="Faq-question-answer-space-div" >
                            <div className="Faq-mid-initials-horizontal-line-div" ></div>
                        </div>
                        
                        <QuestionAndAnswer height="200px" question="Where can I find parking?" answer="You can stay at any hotel in College park or in Laurel"/>
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