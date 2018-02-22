import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Registry.css';
import TopicHeader from './TopicHeader.js';
import Footer from './Footer.js';
import { Button } from 'semantic-ui-react'

export default class Registry extends Component {
    render(){
        var heightValue;
        if (window.matchMedia("(max-width: 700px)").matches) {
            heightValue = '170'
        } else if(window.matchMedia("(max-width: 600px)").matches){
            heightValue = '150'
        } else {
            heightValue = '180'
        }
        return(
            <div className="MidSection-parent-div">
                <TopicHeader title="Registry" detail="Check out our registry!" />
                <div className="MidSection-body-content-div" >
                    <div className="MidSection-mid-top-left-arc-div"></div>
                    <div className="MidSection-mid-top-right-arc-div"></div>
                    <div className="MidSection-inner-div" >
                        <div className="Registry-parent-div" >
                            <div className="Registry-left-div" >
                                <TextInCircle height={heightValue} width={heightValue}/>
                            </div>
                            <div className="Registry-vertical-line-enclosing-div" >
                                <div className="Registry-vertical-line-div" ></div>
                            </div>
                            <div className="Registry-information-div" >
                                <div className="Registry-rectangular-div">
                                    <p>Checkout our Zola Registry</p>
                                    <button type="button">Zola Registry</button>
                                </div>
                            </div>
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

class TextInCircle extends Component {
    render(){
        // var 
        var circleStyle = {
            height: this.props.height + 'px',
            width: this.props.width + 'px',
            borderRadius: '50%',
            alignItems: 'center',
            backgroundColor: '#FFD700',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column'
        };
        return(
            <div style={circleStyle}>
                <p>For</p>
                <p style={{marginTop: '0'}}>Mallory and Bori</p>
            </div>
        );
    }
}