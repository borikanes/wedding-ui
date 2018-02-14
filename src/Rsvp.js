import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Rsvp.css';
import TopicHeader from './TopicHeader.js';

export default class Rsvp extends Component {
    render(){
        return(
            <TopicHeader title="RSVP" detail="Please RSVP because we need to know if you can join us. Danke!" />
        );
    }
}