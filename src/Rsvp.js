import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Rsvp.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';

export default class Rsvp extends Component {
    constructor (props) {
        super(props)
        this.state = { height: '1250px', fontSize : '20px' }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        if(window.matchMedia("(max-width: 350px)").matches) {
            this.setState({
                height: '1200px',
                fontSize : '13px'
            })
        } else if(window.matchMedia("(max-width: 400px)").matches) {
            this.setState({
                height: '1200px',
                fontSize : '13px'
            })
        } else if(window.matchMedia("(max-width: 500px)").matches) {
            this.setState({
                height: '1250px'
            })
        } else if(window.matchMedia("(max-width: 700px)").matches) {
            this.setState({
                height: '1400px'
            })
        } 
        else {
            this.setState({
                height: '1250px'
            })
        }
      }

    render(){
        return(
            <div className="MidSection-parent-div">
                <TopicHeader title="RSVP" detail="Please RSVP because we need to know if you can join us. Danke!" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div style={{'height': this.state.height}} className="MidSection-inner-div" >
                        <div className="Rsvp-paragraph-div" >
                            <p>
                                Because we are passionate about technology (Bori) and saving trees (Mallory), we will NOT be sending out paper invitations but rather will send them via email.
                            </p>
                            <br/> 
                            <p>
                                To RSVP, type in your first name and surname below. This will only work for those who received an invitation in their inbox. If you are a “plus” invitee, the RSVP will not work for you.
                            </p>
                            <iframe title="anrsvp" style={{'display':'block', 'width': '100%', 'height': '575px', 'border': 'none', 'overflow': 'hidden'}}
                                src="https://boriandmallory.anrsvp.com/?embed=true">
                            </iframe>
                            {/* <br/>  */}
                            <p style={{'marginTop':'0px'}} >
                                We encourage you to RSVP as soon as you can so we can plan adequately for you, our guests.
                            </p>
                            <br/> 
                            <p>
                                Please RSVP by July 22, 2018 at the latest.
                            </p>
                            <br/> 
                            <p>
                                We are honored and ecstatic to have you celebrate our love.
                            </p>
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