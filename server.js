var express = require('express');
var mongoose = require('mongoose');
var app = express();
var User = require('./server/models/user_model.js');



// MongoDB

mongoose.connect('mongodb://localhost/better_buddy_db');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});



//Routes
app.use(express.static('public/'));

// app.get('/users', function(req, res) {
//     User.find({}, function(err, users) {

//         if (err) {
//             console.log(err);
//         } else {
//             res.status(200).json(users);
//         }

//     });
// });




// Start server
app.listen(3005, function() {
    console.log('there is now an app listening on port 3005');
});
