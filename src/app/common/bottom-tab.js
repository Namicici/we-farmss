import React, {Component} from 'react';
import {Link} from 'react-router';

export default class BottomTab extends Component {
    render() {
        return (
            <div class="tab">
                <Link to="home">主页</Link>
                <Link to="book">预约</Link>
                <Link to="mine">我的</Link>
            </div>
        );
    }
};

if(module.hot) {
     module.hot.accept();
 }
