import React, {Component} from 'react';
import {Link} from 'react-router';

export default class BottomTab extends Component {
    render() {
        var footerStyle={
            tab:{
                'width':'100%',
                'position':'fixed',
                'bottom':0,
                'left':0,
                'height':'32px',
                'background':'mediumaquamarine',
                'paddingTop': '8px'
            },
            item:{
                'width':'33%',
                'display':'inline-block',
                'textAlign':'center',
                'textDecoration':'none',
                'color':'white'
            },
        }

        return (
            <div style={footerStyle.tab}>
                <Link to="home" style={footerStyle.item}>主页</Link>
                <Link to="book" style={footerStyle.item}>预约</Link>
                <Link to="mine" style={footerStyle.item}>我的</Link>
            </div>
        );
    }
};

if(module.hot) {
     module.hot.accept();
 }
