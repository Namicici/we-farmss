"use strict";
var React = require("react");
var ReactDOM = require("react-dom");

window.React = React;

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
);
