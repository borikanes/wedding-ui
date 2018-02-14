import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Registry.css';
import TopicHeader from './TopicHeader.js';

export default class Registry extends Component {
    render(){
        return(
            <TopicHeader title="Registry" detail="Check out our registry!" />
        );
    }
}