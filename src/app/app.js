import React, {Component} from 'react';
import {Link} from 'react-router';
import {RouteHandler} from 'react-router';


export default class Main extends Component{
    constructor(props) {
        super(props);
        //console.log('App');
        //Set your state here using this.state = {};
        //or leave blank if you don't want anything set in state
    }
    render() {
        return (
            <div>
                <RouteHandler/>
            </div>
        );
    }
};

if(module.hot) {
     module.hot.accept();
 }
