var port = process.env.PORT || 1943;
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + "/public"));

app.listen(port);