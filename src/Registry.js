import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Registry.css';
import TopicHeader from './TopicHeader.js';
import Footer from './Footer.js';
import './HomePage.css';

export default class Registry extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('GOT CLICKED');
        // window.open("https://www.zola.com/registry/dashboard")
    }

    render(){
        var heightValue;
        if (window.matchMedia("(max-width: 700px)").matches) {
            heightValue = '190'
        } else if(window.matchMedia("(max-width: 610px)").matches){
            heightValue = '150'
        } else if(window.matchMedia("(max-width: 510px)").matches){
            heightValue = '130'
        } 
        else {
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
                                    <p>Click below for our Registry</p>
                                    <button className="Registry-zola-button" onClick={this.handleClick} >Our Zola Registry</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <Initials />
                    <div className="MidSection-mid-bottom-left-arc-div"></div>
                    <div className="MidSection-mid-bottom-right-arc-div"></div>
                </div>
                <div className="MidSection-footer-divider-div" ></div>
                <Footer />
            </div>
        );
    }
}

class Initials extends Component {
    render() {
        return(<div className="Initials-div">
                <p>M</p>
                <div className="Initials-vertical-line-div" ></div>
                <p>B</p>
            </div>
        );
    }
}

class TextInCircle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topLabel: 'For',
            bottomLabel: 'Mallory and Bori',
            mouseLeft: true,
            mouseEntered: false
        }
    }
    render(){
        var circleStyle = {
            height: this.props.height + 'px',
            width: this.props.width + 'px',
        };

        if (window.matchMedia("(max-width: 500px)").matches) {
            circleStyle.marginTop = '15px'
        }
        return(
            <div onMouseEnter={() => {
                this.setState({
                    topLabel: 'For',
                    bottomLabel: 'Mallory and Bori',
                    mouseLeft: false,
                    mouseEntered: true
                })
            }} onMouseOver={() => {
                setTimeout( () => {
                    if (!this.state.mouseLeft) {
                        this.setState({
                            topLabel: 'Thank',
                            bottomLabel: 'You!'
                        }) 
                    }
                }, 500)
            }} onMouseLeave={() => {
                setTimeout( () => {
                    this.setState({
                        topLabel: 'For',
                        bottomLabel: 'Mallory and Bori',
                        mouseLeft: true
                        
                    })
                }, 550)
            }} style={circleStyle} className="TextInCircle">
                <p>{this.state.topLabel}</p>
                <p style={{marginTop: '0'}}>{this.state.bottomLabel}</p>
            </div>
        );
    }
}