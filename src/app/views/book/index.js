import React, {Component} from 'react';
import {Link} from 'react-router';
import BottomTab from '../../common/bottom-tab.js';

export default class Book extends Component {
  render() {
    return (
      <div>
        <h3>react-async-router demo</h3>
        <p>
          webpack + bundle-loader + react-router
        </p>
        <Link to="home">back to home</Link>
        <BottomTab/>
      </div>
    );
  }
};
if(module.hot) {
     module.hot.accept();
 }
