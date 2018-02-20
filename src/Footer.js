import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer-parent-div" >
                <div className="Footer-base-div">
                    <p className="Footer-made-with-love-style" >Made with love by yours truly, Bori</p>
                    <p className="Footer-other-info-style">Check out the website's github repo <a href="https://github.com/borikanes/wedding-ui">here</a></p>
                    <p className="Footer-other-info-style">This site's design was heavily influenced by the love of my life, Mallory and <a href="https://www.zola.com/">zola</a></p>
                </div>
            </div>
        );
    }
}