var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var morgan = require('morgan'); //for logging
var bodyParser = require('body-parser'); //pull info from html post
var methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/pfa');

var router = express.Router();

app.get('/bank', function (req, res) {
    router.get('/controllers/banks', require('./controllers'));
    router.post('/controllers/banks', require('./controllers'));
    router.delete('/controllers/banks/:bank_id', require('./controllers'));
    app.use('/', router);
    res.render('bank');
});

app.get('/doctype', function (req, res) {
    router.get('/controllers/doctypes', require('./controllers'));
    router.post('/controllers/doctypes', require('./controllers'));
    router.delete('/controllers/doctypes/:doctype_id', require('./controllers'));
    app.use('/', router);
    res.render('doctype');
});

app.get('/paymenttype', function (req, res) {
    router.get('/controllers/paymenttypes', require('./controllers'));
    router.post('/controllers/paymenttypes', require('./controllers'));
    router.delete('/controllers/paymenttypes/:paymenttype_id', require('./controllers'));
    app.use('/', router);
    res.render('paymenttype');
});

app.get('/checkingaccount', function (req, res) {
    router.get('/controllers/checkingaccounts', require('./controllers'));
    router.post('/controllers/checkingaccounts', require('./controllers'));
    router.delete('/controllers/checkingaccounts/:checkingaccount_id', require('./controllers'));
    app.use('/', router);
    res.render('checkingaccount');
});

//app.set('port', process.env.PORT || 3000);
//http.createServer(app).listen(app.get('port'), function () {
//    console.log('App listening on port ' + app.get('port'));
//});
app.listen(3000);
console.log("App listening on port 3000");
module.exports = app;