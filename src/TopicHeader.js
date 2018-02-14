import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './TopicHeader.css';

export default class TopicHeader extends Component {

    render(){
        return(
            <div className="TopicHeader-parent-div">
                <div className="TopicHeader-header-parent-div">
                    <div className="TopicHeader-header-content-div">
                        <h1>FAQs</h1>
                        <p>Common questions you may have about our wedding. Feel free to message us if you have more questions!</p>
                    </div>
                </div>
            </div>
        );
    }
}