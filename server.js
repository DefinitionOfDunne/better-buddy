var mongoose = require('mongoose');
var express = require('express');
var app = express();
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


//Mongoose Connection
mongoose.connect('mongodb://localhost/better_buddy_db');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to mongoDB');
});

app.use(express.static('public/'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './server/views');
app.set('view engine', 'ejs');


app.use(session({ secret: 'grandvalley' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


require('./config/passport')(passport);
require('./server/routes/routes')(app, passport);


// Start server
app.listen(3005, function() {
    console.log('there is now an app listening on port 3005');
});



exports.app = app;
module.exports = router;
