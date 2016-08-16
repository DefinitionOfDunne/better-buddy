module.exports = function(app, passport) {

    app.get('/login', function(req, res, next) {
        res.render('login', { message: req.flash('loginMessage') });
    });


    app.post('/login', passport.authenticate('signup', {
        successRedirect: '/profile',
        failureRedirect: '/',
        failureFlash: true
    }));

    app.get('/signup', function(req, res) {
        res.render('signup', { message: req.flash('signupMessage') });
    });


    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', {
            user: req.user
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
