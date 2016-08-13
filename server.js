//==============================================================
//DEPENDANCIES
//==============================================================
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var connection = require('./config/connection.js').connection;

var app = express();
 //PROBLEM HERE
// require orm
var orm = require('./config/orm.js');
// check if insertOne works
// orm.insertOne('testBurger', false);
// test if updating "devoured" works
// orm.updateOne(6);
//================================================================
//MIDDLEWARE
//================================================================
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
// app.use(methodOverride('_method'))
app.set('view engine', 'handlebars');

//=================================================================
//ROUTES
//=================================================================
// app.get('/', function(req, res) {

//     orm.selectAll(res);
// });
// app.post('/devoured/:id', function(req, res) {
// 	orm.update(req.body.id);
// 	res.redirect('/')
// });

// app.post('/create', function(req, res) {
// 	orm.insert(req.body.burger_name);
// 	res.redirect('/');
// });

var routes = require('./controllers/burgers_controller.js')
app.use('/', routes);
var port = 3000;
app.listen(port, function () {
	console.log('Listening on PORT ' + port);
});

