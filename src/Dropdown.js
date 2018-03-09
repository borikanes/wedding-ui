import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './Topheader.css'

class DropDown extends Component {

    // if you click outside the drop down menu it will set isDown to false thereby
    // dismissing it 
    handleClickOutside = evt => {
      let dropdownRootDiv = document.getElementById('dropdown-root');
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
      var dropdownRootDivStyle = {
        zIndex: '1000',
        position: 'relative'
    }
      if (!this.state.isDown) {
        return(
          <div className="Header-hamburger-div">
              <a onClick={this.toggleDropDownBool}><i className="fa fa-bars fa-2x nav-bar-a"></i></a>
          </div>
        );
      } else {
        return(
          <div id="dropdown-root" style={dropdownRootDivStyle}>
            <div className="Header-hamburger-div">
                <a onClick={this.toggleDropDownBool}><i className="fa fa-close fa-2x nav-bar-a"></i></a>
            </div>
            <div className="Header-dropdown-div">
              <a href="/" className="Header-dropdown-each-button">HOME</a>
              <a href="/weddingparty" className="Header-dropdown-each-button">WEDDING PARTY</a>
              <a href="/registry" className="Header-dropdown-each-button">REGISTRY</a>
              <a href="/rsvp" className="Header-dropdown-each-button">RSVP</a>
              <a href="/locations" className="Header-dropdown-each-button">LOCATIONS</a>
              <a href="/faq" className="Header-dropdown-each-button">FAQs</a>
            </div>
          </div>
        );
      }
    }
}

export default onClickOutside(DropDown);