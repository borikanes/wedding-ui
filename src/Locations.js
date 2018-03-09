import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';
import './Locations.css';

export default class Locations extends Component {
    constructor(props) {
        super(props);
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
        this.state = {
            isAllowedToSeeContent: false,
            passwd: '',
            isCodeWrong: false,
            shouldBeDisabled: true
        };
    }

    handlePinButtonClick() {
        this.setState({
            isAllowedToSeeContent: true
        });
    }

    handlePasswordTextChange = (event) => {
        this.setState({
            passwd: event.target.value,
            isCodeWrong: false
        });
        if (event.target.value.length === 0) {
            this.setState({
                shouldBeDisabled: true
            });
        } else {
            this.setState({
                shouldBeDisabled: false
            });
        }
    };

    handlePasswordSubmit() {
        if (!process.env.REACT_APP_LOCATION_CODE) {
            alert("Tell bori he broke his website by not setting the Location code....smh")
        }
        if (this.state.passwd.toLowerCase() === process.env.REACT_APP_LOCATION_CODE) {
            this.setState({
                isAllowedToSeeContent: true
            });
        } else {
            this.setState({
                isCodeWrong: true
            });
        }
    }

    render() {
        var errorParagraph;
        var inputErrorState = {};
        if (this.state.isCodeWrong) {
            errorParagraph = <p style={{'color': 'red', 'fontSize': '15px'}} >Sorry, the code you entered is wrong. Reach out to bori or mallory if you don't know the code</p>
            inputErrorState = {
                'border': '1px solid red'
            }
        }

        if (this.state.isAllowedToSeeContent) {
            return (
                <div className="MidSection-parent-div">
                    <TopicHeader title="Locations" detail="These are the venues the wedding will be taking place" />
                    <div className="MidSection-body-content-div" >
                        <div className="MidSection-mid-top-left-arc-div"></div>
                        <div className="MidSection-mid-top-right-arc-div"></div>
                        <div className="MidSection-inner-div" >
                            <div className="Locations-parent-div" >
                                <div className="Locations-church-div" >
                                    <h1>Church</h1>
                                    <p>Some church</p>
                                    <p>Church ceremony starts at 11am</p>
                                    <p>1600 Pennsylvania Ave, Some City, MD 22222</p>
                                    <button onClick={()=> window.open('https://goo.gl/maps/jGxfRMpbvpS2')} className="Locations-direction-button" >D i r e c t i o n</button>
                                </div>
                                <div className="Locations-vertical-line-enclosing-div" >
                                    <div className="Locations-vertical-line-div" ></div>
                                </div>
                                <div className="Locations-reception-div" >
                                    <h1 style={{'marginTop': 0, 'marginBottom': 0}}>Reception</h1>
                                    <h2 style={{'marginTop': 0, 'marginBottom': 0}} >&</h2>
                                    <h2 style={{'marginTop': 0}}>Nigerian ceremony</h2>
                                    <p>Some Hall's Placeholder</p>
                                    <p>Reception starts at 2pm. You're welcome to arrive early</p>
                                    <p>1600 Pennsylvania Avenue, Some City, MD 22222</p>
                                    <button onClick={()=> window.open('https://goo.gl/maps/jGxfRMpbvpS2')} className="Locations-direction-button" >D i r e c t i o n</button>
                                </div>
                            </div>
                            <div className="Locations-initials-div">
                                    <p>M</p>
                                    <div className="Locations-initials-vertical-line-div" ></div>
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
        } else {
            return (
                <div className="MidSection-parent-div">
                    <TopicHeader title="Locations" detail="These are the venues the wedding will be taking place" />
                    <div className="MidSection-body-content-div" >
                        <div className="MidSection-mid-top-left-arc-div"></div>
                        <div className="MidSection-mid-top-right-arc-div"></div>
                        <div className="MidSection-inner-div" >
                            <div className="Locations-passwd-parent-div" >
                                <p>To view the wedding locations, please enter the code we sent you. It's in your wedding invite email. Reach out to Bori or Mallory if you can't find it</p>
                                {errorParagraph}
                                <div>
                                    <input style={inputErrorState} className="Locations-input" type="text" placeholder="Enter code here..." value={this.state.passwd} onChange={this.handlePasswordTextChange} />
                                    <button disabled={this.state.shouldBeDisabled} onClick={this.handlePasswordSubmit} className="Locations-input-button">S u b m i t</button>
                                </div>
                            </div>
                            <div className="Locations-initials-div">
                                <p>M</p>
                                <div className="Locations-initials-vertical-line-div" ></div>
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
}