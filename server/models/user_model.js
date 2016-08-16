var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
        firstname: String,
        lastname: String,
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            index: true
        },
        password: String
});

userSchema.methods.generateHash = function(password, next) {
    bcrypt.hash(password, bcrypt.genSaltSync(8), null, next);
};


userSchema.methods.validPassword = function(password, next) {
    return bcrypt.compare(password, this.password, next);
};

module.exports = mongoose.model('User', userSchema);
