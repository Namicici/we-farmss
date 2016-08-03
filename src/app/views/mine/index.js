import React, {Component} from 'react';
import BottomTab from '../../common/bottom-tab.js';

export default class Mine extends Component {
  render() {
    return (
      <div>
        <h3>achive message</h3>
        <p>mine</p>
        <BottomTab/>
      </div>
    );
  }
};
if(module.hot) {
     module.hot.accept();
 }
