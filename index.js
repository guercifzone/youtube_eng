var express = require("express");
var app = express();
var path = require("path");
var port= process.env.PORT || 3000;

app.get('/', function(req,res){
    res/sendFile(path.join(--dirname+'/index.html'));
    
});
app.lesten(port);
console.log('run at http://localhost:3000');