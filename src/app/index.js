import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, HashLocation, run} from 'react-router';
import {RouteHandler} from 'react-router';

import asyncLoader from './async-loader';
import App from './app';
import Home from './views/home';
import Book from 'bundle?lazy!./views/book';
import Mine from 'bundle?lazy!./views/mine';

let routes = (
    <Route path="/" handler={App}>
        <DefaultRoute name="home" handler={Home}/>
        <Route name="book" path="book" handler={asyncLoader(Book)}/>
        <Route name="mine" path="mine" handler={asyncLoader(Mine)}/>
    </Route>
);

run(routes, HashLocation, function(Root){
    React.render(<Root/>, document.getElementById('content'));
});

if(module.hot) {
     module.hot.accept();
 }
