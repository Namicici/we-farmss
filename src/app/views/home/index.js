import React, {Component} from 'react';
import {Link} from 'react-router';
import BottomTab from '../../common/bottom-tab.js';
import Slides from '../../common/slides.js';

export default class Home extends Component {
    render() {
        var headerStyle={
            'position':'fixed',
            'width':'100%',
            'height':'32px',
            'background':'mediumaquamarine',
            'top':0,
            'left':0,
            'textAlign':'center',
            'color':'white',
            'paddingTop':'8px'
        };
        var contentStyle={
            'position':'absolute',
            'top':'40px',
            'width':'100%',
            'bottom':'40px',
            'left':0,
            'margin':0,
            'padding':0
        }
        return (
            <div>
                <div style={headerStyle}>Home</div>
                <div style={contentStyle}>
                    <Slides/>
                </div>
                <BottomTab/>
            </div>
        );
    }
};
if(module.hot) {
     module.hot.accept();
 }
