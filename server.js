//==============================================================
//DEPENDANCIES
//==============================================================
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var app = express();
var port = 3000;
var myConnection = require('./config/connection.js'); //PROBLEM HERE
// require ORM
var ORM = require('./config/orm.js');
ORM.selectAll();
// check if insertOne works
// ORM.insertOne('testBurger', false);
// test if updating "devoured" works
// ORM.updateOne(6);
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
app.get('/', function(req, res) {
    connection.query('SELECT * FROM burgers', function(err, results) {
        if (err) throw error
            //render the index.handlebars template and put in the data from the burgers table
        res.render('index', {
            burgers: data
        })

    })

});
