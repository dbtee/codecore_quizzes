const express = require('express');
const router = express.Router();
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

router.get('/', function (req, res) {
    res.cookie('appCookies', 'cookie value here', {
        maxAge: COOKIE_MAX_AGE
    });
    res.render('index');
});

router.get('/clucks', function (req, res) {
    res.cookie('appCookies', 'cookie value here', {
        maxAge: COOKIE_MAX_AGE
    });
    res.render('index');
});

router.get('/sign_in', function (req, res) {
    res.cookie('appCookies', 'cookie value here', {
        maxAge: COOKIE_MAX_AGE
    });
    res.render('welcome');
});

router.post('/sign_in', function (req, res) {
    const params = req.body;
   
    console.log('sign in and set cookies');
    res.cookie('username', params.username, {
        maxAge: COOKIE_MAX_AGE
    });
    res.redirect('/');
});

router.post('/sign_out', function (req, res) {
    console.log('clearing cookies');
    res.clearCookie('username');
    res.redirect('/');
});



module.exports = router;