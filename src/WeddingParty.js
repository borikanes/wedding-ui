import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './WeddingParty.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';
import Avatar from 'react-avatar';

export default class WeddingParty extends Component {
    render(){
        // let parentDivHeight
        // if (window.matchMedia("(max-width: 700px)").matches) {
        //     parentDivHeight = "600px"
        // } else {
        //     parentDivHeight = "200px"
        // }
        return(
            <div className="MidSection-parent-div">
                <TopicHeader title="Wedding Party" detail="Meet our friends" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="TUMI OLUDEMI" rightName="RACHEL POISALL"
                        leftDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test" 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="MIKE FERRACO" rightName="ALLISON SEELEY"
                        leftDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test" 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc="http://gravatar.com/avatar/a97d67d08221ce54272481f69c000a6a?s=200" 
                        rightSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="JOSHUA ODUMOSU" rightName="JENNY EVENSEEN"
                        leftDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test" 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="CHRIS LONGE" rightName="RACHEL ABREMSKI"
                        leftDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test" 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="OPE OSUNKOYA" rightName="RACHEL ABREMSKI"
                        leftDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test" 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc="https://secure.gravatar.com/userimage/135717332/c54a8abf76d3b3ab72f97a446853744f" />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <div className="Wedding-mid-initials-div">
                            <p>M</p>
                            <div className="Wedding-mid-initials-vertical-line-div" ></div>
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

class WeddingPartyProfile extends Component {
    render(){
        let leftAvatar 
        if (this.props.leftName === "TUMI OLUDEMI") {
            leftAvatar = <Avatar className="Wedding-avatar-style" facebookId="1527056551" size={100} round={true} />
        } else if(this.props.leftName === "JOSHUA ODUMOSU") {
            leftAvatar = <Avatar className="Wedding-avatar-style" facebookId="844108345" size={100} round={true} />
        } else {
            leftAvatar = <Avatar className="Wedding-avatar-style" size={100} round={true} src={this.props.leftSrc} />
        }
        
        return (
            <div /*style={{'height': this.props.height}}*/ className="Wedding-question-answer-parent-div">
                <div className="Wedding-left-profile-div">
                    <div className="Wedding-avatar-style" >
                        {leftAvatar}
                    </div>
                    <h1>{this.props.leftName}</h1>
                    <p>Groomsman</p>
                    <p>{this.props.leftDescription}</p>
                </div>
                <div className="Wedding-vertical-line-enclosing-div" >
                    <div className="Wedding-vertical-line-div" ></div>
                </div>
                <div className="Wedding-right-profile-div">
                    <div className="Wedding-avatar-style" >
                        <Avatar className="Wedding-avatar-style" size={100} round={true} src={this.props.rightSrc} />
                    </div>
                    <h1>{this.props.rightName}</h1>
                    <p>Bridesmaid</p>
                    <p>{this.props.rightDescription}</p>
                </div>
                <div className="Wedding-vertical-line-small-enclosing-div" >
                    <div className="Wedding-vertical-line-small-div" ></div>
                </div>
            </div>
        );
    }
}