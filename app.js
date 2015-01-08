var express = require('express'),
    path = require('path'),
    routes = require('./routes'),
    cons = require('consolidate');

var app = express();

// all environments
app.set('port', process.env.PORT);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index)




var server = require('http').createServer(app);


server.listen(process.env.PORT);
console.log("Express server started");
