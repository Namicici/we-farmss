import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

export default class App extends Component{
    constructor(props) {
      super(props);
      console.log('App');
      //Set your state here using this.state = {};
      //or leave blank if you don't want anything set in state
    }
    render() {
        return (
            <div>
                <h1>React-router is awesome!</h1>
                <RouteHandler/>
            </div>
        );
    }
};

if(module.hot) {
     module.hot.accept();
 }
