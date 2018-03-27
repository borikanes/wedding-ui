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
            isSmallerScreen: false
        }
    }

    render() {
        var fontSizeValue;
        if (window.matchMedia("(max-width: 400px)").matches) {
            fontSizeValue = '15px';
        } else {
            fontSizeValue = '20px';
        }

        
       return(<div className="MidSection-parent-div">
                <TopicHeader title="SCHEDULE" detail="This is the schdule on the day of our wedding" />
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
                                contentStyle={{fontSize: fontSizeValue}}
                            >
                                Church wedding ceremony starts
                            </TimelineEvent>
                            <TimelineEvent
                                title=""
                                createdAt="02:00 PM"
                                bubbleStyle={{backgroundColor: 'teal'}}
                                contentStyle={{fontSize: fontSizeValue}}
                            >
                                Nigerian traditional ceremony starts
                            </TimelineEvent>
                            <TimelineEvent
                                title=""
                                createdAt="04:00 PM"
                                bubbleStyle={{backgroundColor: 'teal'}}
                                contentStyle={{fontSize: fontSizeValue}}
                            >
                                Reception starts
                            </TimelineEvent>
                        </Timeline>
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