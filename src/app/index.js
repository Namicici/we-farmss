"use strict";

var React = require("react");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var hashHistory = require("react-router").hashHistory;
var ReactDOM = require("react-dom");

var Home = require("./home/home.js");
var TopBar = require("./main/main.js");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}></Route>
		<Route path="/main" component={TopBar}></Route>
	</Router>, document.getElementById("content"));


if(module.hot) {
    module.hot.accept();
}
