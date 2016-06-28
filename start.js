var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = 9000;

app.use(bodyParser());
app.use("/", express.static(__dirname + "/dist/"));

//app.get("/", function(req, res){
//    return res.redirect("/dist/");
//});

app.listen(port);
console.log("server start at " + port);
