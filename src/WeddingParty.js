import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './WeddingParty.css';
import TopicHeader from './TopicHeader.js';

export default class WeddingParty extends Component {
    render(){
        return(
            <TopicHeader title="Wedding Party" detail="Meet our friends" />
        );
    }
}