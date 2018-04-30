import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './WeddingParty.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';
import Avatar from 'react-avatar';
import Chris_Profile from './images/chris_profile.jpg';
import Rachel_profile from './images/rachel_profile.png';
import Natalie_profile from './images/natalie_profile.png';
import Rachel_p_profile from './images/rachel_p_profile.png';
import Allison_profile from './images/allison_profile.png';
import Jenny_profile from './images/jenny-profile.png';

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
                        leftDescription="He's bori's only brother. Automatically becomes one of Bori's groomsmen. They often have fights about who's funnier. FYI Bori's funnier." 
                        rightDescription="Rachel and Mallory have been close friends since first grade! They have shared about 20 years of laughs together, and way too many weird/embarrassing stories. Enough said. "
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc={Rachel_profile} />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="MIKE FERRACO" rightName="ALLISON SEELEY"
                        leftDescription="Bori could've been roommates with Mike but he thought Mike would be annoying just based on his Facebook pictures but now they're very good friends. Don't judge a book by its cover" 
                        rightDescription="Allison and Mallory have been friends ever since she thought Mallory accidentally invited her to her birthday party in high school, when in reality Mallory wanted to be friends with this gal and invited her on purpose. They have remained very close friends even through years of long distance."
                        leftSrc="http://gravatar.com/avatar/a97d67d08221ce54272481f69c000a6a?s=200" 
                        rightSrc={Allison_profile} />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="JOSHUA ODUMOSU" rightName="JENNY EVENSEEN"
                        leftDescription="He's bori's cousin. They basically have known each other from birth. All the way from Nigeria to America....they can't seem to get away from each other" 
                        rightDescription="Jenny and Mallory lived together for part of their time at UMD. These two bond over travel, tea, and talking for hours about life. Mallory feels so lucky to have Jenny in her life!"
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc={Jenny_profile} />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="CHRIS LONGE" rightName="RACHEL ABREMSKI"
                        leftDescription="Can you believe bori has to work with this guy? He's half Mexican and Argentine, can you tell?" 
                        rightDescription="Rachel and Mallory go way back - they met in elementary school and have been there for each other ever since. Mallory was recently a bridesmaid in Rachel’s wedding and now has two best friends named “Rachel P.” "
                        leftSrc={Chris_Profile} rightSrc={Rachel_p_profile} />
                        <div className="WeddingParty-question-answer-space-div"></div>
                        <WeddingPartyProfile /*height={parentDivHeight}*/ leftName="OPE OSUNKOYA" rightName="NATALIE DOHNER"
                        leftDescription="Ope is also Bori's cousin. He basically knows everything. He was Bori's Google search engine when they were younger, before Google was a thing." 
                        rightDescription="Mallory and Natalie met in high school through mission trips to New Orleans. Mallory cherishes all the letters that Natalie has written her over the years, and is honored to have Natalie by her side on her wedding day."
                        leftSrc="https://www.gravatar.com/avatar/7bcbb578177aaa9846709fb8d8732966?s=200" 
                        rightSrc={Natalie_profile} />
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
        var paragraphStyle = {};
        if (this.props.rightName === "ALLISON SEELEY") {
            paragraphStyle = {
                fontSize: '0.7em'
            }
        }

        var dividerLine = {};
        if (this.props.rightName === "NATALIE DOHNER") {
            dividerLine = {
                display: 'none'
            }
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
                    <p style={paragraphStyle} >{this.props.rightDescription}</p>
                </div>
                <div style={dividerLine} className="Wedding-vertical-line-small-enclosing-div" >
                    <div className="Wedding-vertical-line-small-div" ></div>
                </div>
            </div>
        );
    }
}