import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './WeddingParty.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';
import Avatar from 'react-avatar';
import Chris_Profile from './images/chris_profile.png';

export default class WeddingParty extends Component {
    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader title="Wedding Party" detail="Meet the people who will be standing next to us on our wedding day!" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="TUMI OLUDEMI" rightName="RACHEL POISALL"
                        leftDescription="He's my brother. Automatically becomes one of my groomsmen. We often have fights about who's funnier. FYI I am funnier." 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="MIKE FERRACO" rightName="ALLISON SEELEY"
                        leftDescription="Could've been roommates with this but I thought he would be annoying just based on his Facebook pictures but now we're very good friends. Don't judge a book by its cover" 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc="http://gravatar.com/avatar/a97d67d08221ce54272481f69c000a6a?s=200" 
                        rightSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="JOSHUA ODUMOSU" rightName="JENNY EVENSEEN"
                        leftDescription="He's my cousin. Basically known him since I was born. All the way from Nigeria to America....we can't seem to get away from each other" 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="CHRIS LONGE" rightName="RACHEL ABREMSKI"
                        leftDescription="Can you believe I have to work with this guy? He's half Mexican and Argentine, can you tell?" 
                        rightDescription="I'm the most awesome person ever but not really this is just a placeholder for text to test"
                        leftSrc={Chris_Profile} rightSrc={Chris_Profile} />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="OPE OSUNKOYA" rightName="RACHEL PURFIELD"
                        leftDescription="Ope is also my cousin. He basically knows everything. He was my google search engine when we were younger." 
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

class WeddingPartyAvatar extends Component {
    render() {
        return (
            <div className="Wedding-avatar-parent-div">
                <img style={{'borderRadius': '50%'}} src={this.props.src} alt={Chris_Profile} height="120px" width="120px" />
            </div>
        );
    }
}