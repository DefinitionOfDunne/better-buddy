var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String
    //friends_list: Array,
    //family_list: Array
});


var User = mongoose.model('User', userSchema);

module.exports = User;