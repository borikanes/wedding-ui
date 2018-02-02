import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './Topheader.css'

class DropDown extends Component {

    handleClickOutside = evt => {
      // ..handling code goes here...
      console.log('OUTSIDE CLICK');
      
      var dropdownRootDiv = document.getElementById('dropdown-root');
      if (dropdownRootDiv) {
        this.setState({isDown: false});
      } 
      return;
    };
  
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
          <div id="dropdown-root">
            <div className="Header-hamburger-div">
                <a onClick={this.toggleDropDownBool}><i className="fa fa-close fa-2x nav-bar-a"></i></a>
            </div>
            <div></div>
            <div className="Header-dropdown-div">
              <a className="Header-dropdown-each-button">HOME</a>
              <a className="Header-dropdown-each-button">WEDDING PARTY</a>
              <a className="Header-dropdown-each-button">REGISTRY</a>
              <a className="Header-dropdown-each-button">RSVP</a>
              <a className="Header-dropdown-each-button">FAQs</a>
            </div>
          </div>
        );
      }
    }
}

  export default onClickOutside(DropDown);