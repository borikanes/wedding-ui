import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Registry.css';
import TopicHeader from './TopicHeader.js';
import Footer from './Footer.js';

export default class Registry extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('GOT CLICKED');
        window.open("https://www.zola.com/registry/dashboard")
    }

    render(){
        var heightValue;
        if (window.matchMedia("(max-width: 700px)").matches) {
            heightValue = '170'
        } else if(window.matchMedia("(max-width: 600px)").matches){
            heightValue = '150'
        } else {
            heightValue = '180'
        }

        var zolaButtonStyle = {
            height: '30px',
            width: '100px',
            color: 'white',
            backgroundColor: 'teal'
        }

        // var button = document.getElementById('butt');
        // button.addEventListener('click', this.handleClickListener);

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
                                <div onClick={this.handleClick} className="Registry-rectangular-div">
                                    <p>Checkout our Zola Registry</p>
                                    {/* <a style={{zIndex: '1001'}} href="https://www.zola.com/registry/dashboard" target="_blank" className="Registry-zola-button">Our Zola Registry</a> */}
                                    <button id="butt" onClick={this.handleClick} >Our Zola Registry</button>
                                    {/* <input type="button" onClick={this.handleClick} value="Our Zola Registry!" /> */}
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