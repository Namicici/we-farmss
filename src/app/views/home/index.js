import React, {Component} from 'react';
import {Link} from 'react-router';
import BottomTab from '../../common/bottom-tab.js';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <ul>
                    <img src={require("../../../images/logo.png")}/>
                </ul>
                <BottomTab/>
            </div>
        );
    }
};
if(module.hot) {
     module.hot.accept();
 }
