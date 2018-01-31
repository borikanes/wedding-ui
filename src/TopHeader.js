import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './Topheader.css'

export default class TopHeader extends Component {
    render() {
      return(
        <div className="TopHeader">
          <div className="Top-row-div">
            <h5 className="Top-row-div-date-location">September 22, 2018</h5>
            <h5 className="Top-row-div-date-location">College Park, Maryland</h5>
            <h5 className="Top-row-div-hashtag">#MalloryAndBori</h5>
          </div>
          <div className="Header-title-dummy">
            <h1>Mallory & Bori</h1>
          </div>
          <div className="Header-title">
            <h1>Mallory & Bori</h1>
          </div>
          <div className="Header-nav-buttons-div">
          <a className="Header-nav-buttons-first">HOME</a>
          <a className="Header-nav-buttons">WEDDING PARTY</a>
          <a className="Header-nav-buttons">REGISTRY</a>
          <a className="Header-nav-buttons">RSVP</a>
          <a className="Header-nav-buttons">FAQs</a>
          </div>
          {/* <div className="Header-hamburger-div">
            <a><i className="fa fa-bars fa-2x nav-bar-a"></i></a>
          </div> */}
          <DropDown />
        </div>
      );
    }
}

class DropDown extends Component {
    constructor(props) {
      super(props);
      this.toggleDropDownBool = this.toggleDropDownBool.bind(this);
      // this.dismissDropDown = this.dismissDropDown.bind(this);
      this.state = {
        isDown: false
      };
    }
  
    toggleDropDownBool() {
      this.setState(prevState =>  ({ 
        isDown: !prevState.isDown 
      } ))
      
    }
  
    render() {
      if (!this.state.isDown) {
        return(
            <div className="Header-hamburger-div">
                <a onClick={this.toggleDropDownBool}><i className="fa fa-bars fa-2x nav-bar-a"></i></a>
            </div>
        );
      } else {
        return(
          <div>
          </div>
        );
      }
    }
}