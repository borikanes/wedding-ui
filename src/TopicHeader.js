import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './TopicHeader.css';
import Footer from './Footer.js';

export default class TopicHeader extends Component {
// style={{height: '140.5%'}}
    render(){
        var midStyle = {
            height: this.props.height
        };

        return(
            <div /*style={midStyle}*/ className="TopicHeader-parent-div">
                <div className="TopicHeader-header-parent-div">
                    <div style={midStyle} className="TopicHeader-header-content-div">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.detail}</p>
                    </div>
                </div>
            </div>
        );
    }
}