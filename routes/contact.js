var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

router.post('/contact', function (req, res, next) {
    //you need to enable https://www.google.com/settings/security/lesssecureapps
    //otherwise you must use oauth2 which is configurable with nodemailer
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mfahadbinashraf@gmail.com', // Your email id
            pass: 'thmpv77d6f' // Your password
        }
    });

    var text = 'Dear Admin \n\n A message was receive. \n\n Email: ' + req.body.email + '\n\nMessage: ' + req.body.message;

    var mailOptions = {
        from: req.body.email, // sender address
        to: 'mfahadbinashraf@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            //res.json({yo: 'error'});
        } else {
            console.log('Message sent: ' + info.response);
            //res.json({yo: info.response});
        }
        res.redirect('/contact');
    });
});

router.get('/contact', function (req, res, next) {
    var data = new Object();
    console.log(req.session.username);
    if (req.session.username) {
        data.username = req.session.username;
    }
    res.render('contact', data);

});

module.exports = router;
