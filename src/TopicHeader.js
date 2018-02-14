import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './TopicHeader.css';

export default class TopicHeader extends Component {

    render(){
        return(
            <div className="TopicHeader-parent-div">
                <div className="TopicHeader-header-parent-div">
                    <div className="TopicHeader-header-content-div">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.detail}</p>
                    </div>
                </div>
            </div>
        );
    }
}