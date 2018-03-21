import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import TopicHeader from './TopicHeader.js';
import './MidSection.css';
import Footer from './Footer.js';
import './Locations.css';
import axios from 'axios';

export default class Locations extends Component {
    constructor(props) {
        super(props);
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
        this.state = {
            isAllowedToSeeContent: false,
            passwd: '',
            isCodeWrong: false,
            shouldBeDisabled: true,
            churchName: '',
            churchAddress: '',
            churchTime: '',
            churchDirection: '',
            receptionName: '',
            receptionAddress: '',
            receptionDirection: '',
            receptionTime: '',
            didRequestFail: false
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
        if (this.state.passwd.toLowerCase().length > 12) { // Shouldn't send networks request if the length is more than 12 chars
            this.setState({
                isCodeWrong: true
            });
            return;
        }
        var axiosInstance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: {'LocationCode': this.state.passwd.toLowerCase()}
        });
        let self = this;
        axiosInstance.get()
            .then( response => {
                if (response.status === 200) {
                    let responseJson = JSON.parse(response.data)
                    self.setState({
                        isAllowedToSeeContent: true,
                        churchName: responseJson.church.Name,
                        churchAddress: responseJson.church.Address,
                        churchDirection: responseJson.church.Direction,
                        churchTime: responseJson.church.Time,
                        receptionName: responseJson.reception.Name,
                        receptionAddress: responseJson.reception.Address,
                        receptionDirection: responseJson.reception.Direction,
                        receptionTime: responseJson.reception.Time
                    });
                } else {
                    self.setState({
                        didRequestFail: true
                    })
                }
            }).catch(error => {
                if (error.response && error.response.status === 403) { // Lambda/APIGW will return 403 for wrong code entered
                    self.setState({
                        isCodeWrong: true
                    });
                } else {
                    if (error) {
                        self.setState({
                            didRequestFail: true
                        })
                    }
                }
        });
    }

    render() {
        var errorParagraph;
        var inputErrorState = {};
        var disabledButtonStyle = {};
        if (this.state.isCodeWrong) {
            errorParagraph = <p style={{'color': 'red', 'fontSize': '15px'}} >Sorry, the code you entered is wrong. Reach out to bori or mallory if you don't know the code</p>
            inputErrorState = {
                'border': '1px solid red'
            }
        }

        // Makes button disabled
        if (this.state.shouldBeDisabled) {
            disabledButtonStyle = {
                'opacity': '0.5'
            };
        }

        // If there's any kind of network error when reaching the APIGW/Lambda, show this paragraph
        if (this.state.didRequestFail) {
            return(
                <div className="MidSection-parent-div">
                    <p style={{'fontSize': '30px', 'color': 'white'}}>Couldn't reach the server to pull the location information. Please inform bori, sorry</p>
                </div>
            );
        }

        if (this.state.isAllowedToSeeContent) {
            if (!this.state.churchAddress) { // If response from server doesn't come back or it's still loading
                return(
                    <div className="MidSection-parent-div">
                        <p style={{'fontSize': '50px', 'color': 'white'}}>Loading.....</p>
                    </div>
                );
            } else if(this.state.didRequestFail) { // If the request fails throw informational error
                return(
                    <div className="MidSection-parent-div">
                        <p style={{'fontSize': '30px', 'color': 'white'}}>Couldn't reach the server to pull the location information. Please inform bori, sorry</p>
                    </div>
                );
            } else {
                var churchDirection = ''
                churchDirection = this.state.churchDirection
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
                                        <p>{this.state.churchName}</p>
                                        <p>{this.state.churchTime}</p>
                                        <p>{this.state.churchAddress}</p>
                                        <button onClick={()=> window.open(churchDirection)} className="Locations-direction-button">Get Directions</button>
                                    </div>
                                    <div className="Locations-vertical-line-enclosing-div" >
                                        <div className="Locations-vertical-line-div" ></div>
                                    </div>
                                    <div className="Locations-reception-div" >
                                        <h1 style={{'marginTop': 0, 'marginBottom': 0}}>Reception</h1>
                                        <h2 style={{'marginTop': 0, 'marginBottom': 0}} >&</h2>
                                        <h2 style={{'marginTop': 0}}>Nigerian ceremony</h2>
                                        <p>{this.state.receptionName}</p>
                                        <p>{this.state.receptionTime}</p>
                                        <p>{this.state.receptionAddress}</p>
                                        <button onClick={()=> window.open('https://goo.gl/maps/jGxfRMpbvpS2')} className="Locations-direction-button">Get Directions</button>
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
        } else { //If not authenticated don't show location
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
                                    <button style={disabledButtonStyle} disabled={this.state.shouldBeDisabled} onClick={this.handlePasswordSubmit} className="Locations-input-button">S u b m i t</button>
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