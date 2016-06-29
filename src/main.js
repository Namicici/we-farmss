"use strict";
var React = require("react");
var ReactDOM = require("react-dom");

window.React = React;

var Logo = React.createClass({
    render: function(){
        return(
            <div className="logo">
                <img src="./logo.png"/>
            </div>
        )
    }
})

var TopBar = React.createClass({
    render: function(){
        return(
            <div className="topBar">
                Hello world! sissy li
                <logo/>
            </div>
        )
    }
})

ReactDOM.render(
    <TopBar/>,
    document.getElementById('content')
);

if(module.hot) {
    module.hot.accept();
}
