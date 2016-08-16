var LocalStrategy = require('passport-local').Strategy;
var User = require('../server/models/user_model.js');
var passport = require('passport');

module.exports = function() {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            firstnameField: 'firstname',
            lastnameField: 'lastname',
            emailFiend: 'email',
            passReqToCallback: true
        },

        function(req, username, password, firstname, lastname, email, done) {

            process.nextTick(function() {

                User.findOne({ 'username': username }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That username is already taken.'));

                    } else {

                        var newUser = new User();

                        // set the user's local credentials
                        newUser.firstname = firstname;
                        newUser.lastname = lastname;
                        newUser.username = username;
                        newUser.email = email;
                        newUser.password = newUser.generateHash(password);

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });

            });

        }));

};
