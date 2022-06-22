var express = require('express');
var router = express.Router();


router.post('/signup', function (req, res, next) {

    req.getConnection(function (err, connection) {
        var query = "INSERT into user (user_name, first_name, last_name, user_password, user_email, phone_no, user_createdon) values ('" + req.body.user_name + "' , '" + req.body.first_name + "', '" + req.body.last_name + "', '" + req.body.user_password + "', '" + req.body.user_email + "' , '" + req.body.phone_no + "', NOW() )";
        connection.query(query, function (err, rows) {
            if (err){
                console.log("Error Selecting : %s ", err);
            }else{
                console.log("setting up user session");
            }
            //res.render('customers', {page_title: "Customers - Node.js", data: rows});
        });

    });
    res.redirect('/');
});

module.exports = router;
