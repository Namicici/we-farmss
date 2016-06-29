"use strict";
var React = require("react");

var Logo = React.createClass({
    render: function(){
        return(
            <div className="logo">
                <img src={require("../../images/logo.png")}/>
            </div>
        )
    }
})

var TopBar = React.createClass({
    render: function(){
        return(
            <div className="topBar">
                Hello world!
                <Logo/>
            </div>
        )
    }
})

if(module.hot) {
    module.hot.accept();
}

module.exports = TopBar;
