var express = require('express');
var app = express();
var router = express.Router();

var path = require('path');
var bodyParser = require('body-parser');

var port = 3000;

var index = require('./routes/index');
var tasks = require('./routes/tasks');

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port '+port);
});