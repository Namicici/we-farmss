var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = 8000;

app.use("/", express.static(__dirname));

app.get("/", function(req, res){
    res.send("");
});

app.listen(port);
console.log("server start at 8000");