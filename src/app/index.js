import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, DefaultRoute, HashLocation, run} from 'react-router';
import asyncLoader from './async-loader';
import App from './app';
import Home from './home';
import About from 'bundle?lazy!./about';
import Inbox from 'bundle?lazy!./inbox';
import Message from 'bundle?lazy!./inbox/message';
import AchiveMessage from 'bundle?lazy!./achive/message';

let routes = (
    <Route path="/" handler={App}>
        <DefaultRoute name="home" handler={Home}/>
        <Route name="about" path="about" handler={asyncLoader(About)}/>
        <Route name="inbox" path="inbox" handler={asyncLoader(Inbox)}>
            <Route name="message" path="message/:id" handler={asyncLoader(Message)}/>
        </Route>
        <Route name="achive" path="/message/:id" handler={asyncLoader(AchiveMessage)}/>
    </Route>
);
/*
ReactDOM.render(
    <Router>
        <Route path="/" handler={App}>
            <DefaultRoute name="home" handler={Home}/>
            <Route name="about" path="about" handler={asyncLoader(About)}/>
            <Route name="inbox" path="inbox" handler={asyncLoader(Inbox)}>
                <Route name="message" path="message/:id" handler={asyncLoader(Message)}/>
            </Route>
            <Route name="achive" path="/message/:id" handler={asyncLoader(AchiveMessage)}/>
        </Route>
    </Router>
, document.getElementById('content'));
*/

run(routes, HashLocation, function(Root){
    React.render(<Root/>, document.getElementById('content'));
});

//ReactDOM.render(<App/>, document.getElementById('content'));
