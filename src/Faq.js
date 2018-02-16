import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Faq.css';
import TopicHeader from './TopicHeader.js';

export default class Faq extends Component {
    render(){
        return(
            <TopicHeader height="180px" title="FAQs" detail="Common questions you may have about our wedding. Feel free to message us if you have more questions!"/>
        );
    }
}