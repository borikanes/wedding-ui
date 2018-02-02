import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import './Topheader.css';
import DropDown from './Dropdown.js';

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
                <DropDown />
            </div>
        );
    }
}