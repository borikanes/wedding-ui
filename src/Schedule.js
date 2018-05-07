import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Schedule.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';
import {Timeline, TimelineEvent} from 'react-event-timeline';

export default class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSmallerScreen: false,
            fontSize: '20px'
        }
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
        if (window.matchMedia("(max-width: 400px)").matches) {
            this.setState({
                fontSize: '15px'
            })
        } else {
            this.setState({
                fontSize: '20px'
            })
        }
    }

    render() {
        
       return(<div className="MidSection-parent-div">
                <TopicHeader title="SCHEDULE" detail="This is the schedule on the day of our wedding." />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        <div className="Schedule-parent-div" >
                            <Timeline>
                                <TimelineEvent 
                                    title=""
                                    createdAt="11:00 AM"
                                    bubbleStyle={{backgroundColor: 'teal'}}
                                    contentStyle={{fontSize: this.state.fontSize}}
                                >
                                    Church wedding ceremony starts
                                </TimelineEvent>
                                <TimelineEvent
                                    title=""
                                    createdAt="12:30 PM"
                                    bubbleStyle={{backgroundColor: 'teal'}}
                                    contentStyle={{fontSize: this.state.fontSize, width: '99%'}}
                                >
                                    O'dourves/snacks and drinks available at banquet hall
                                </TimelineEvent>
                                <TimelineEvent
                                    title=""
                                    createdAt="02:00 PM"
                                    bubbleStyle={{backgroundColor: 'teal'}}
                                    contentStyle={{fontSize: this.state.fontSize}}
                                >
                                    Nigerian traditional ceremony starts
                                </TimelineEvent>
                                <TimelineEvent
                                    title=""
                                    createdAt="04:00 PM"
                                    bubbleStyle={{backgroundColor: 'teal'}}
                                    contentStyle={{fontSize: this.state.fontSize}}
                                >
                                    Dinner followed by reception
                                </TimelineEvent>
                            </Timeline>
                        </div>
                        <div className="Schedule-initials-div">
                            <p>M</p>
                            <div className="Schedule-initials-vertical-line-div" ></div>
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