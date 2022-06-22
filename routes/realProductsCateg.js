/**
 * Created by Muhammad on 11/30/2016.
 */

/**
 * Created by Muhammad on 11/25/2016.
 */

var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
//----------------------------------------------
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));


/* GET home page. */

router.get('/realProductsCateg', function (req, res) {

    res.redirect('/childCateg/1');
    //res.send('<script>window.history.back();</script>');
});
router.get('/realProductsCateg/:id', function (req, res) {
    if (req.session && req.session.username) {
        res.locals.currentURL = req.url;
        var myString = req.params.id;
        console.log(myString);
        console.log("Yoops");

        var result = myString.split(",");
        var categ_name = result[0];
        var categ_type = result[1];

        console.log(categ_name);
        console.log(categ_type);

        req.getConnection(function (err, connection) {
            var myMainId = 0;

            var query = "SELECT * FROM child_catagories where c_cat_name = '" + categ_name + "' and c_cat_type = '" + categ_type + "'";
            connection.query(query, function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                if (rows.length) {

                    myMainId = rows[0].c_cat_id;
                } else {
                    console.log("ERROR");
                    res.send('Not Found');

                }


                query = "SELECT * FROM products where products_catagory = '" + myMainId + "'";
                connection.query(query, function (err, rows) {
                    if (err)
                        console.log("Error Selecting : %s ", err);
                    if (rows.length) {
                        var data = new Object();
                        data = req.session.username;

                        res.render('realProductsCateg', {username: data, myData: rows, pageNumber: 1});
                    }
                    else {
                        console.log("ERROR");
                        res.send('Not Found');

                    }
                });

            });

        });

    }
    else {
        res.redirect('/login');

    }


});
router.post('/realProductsCateg', function (req, res, next) {

    console.log(req.body.pageNumber);
    var myString = req.body.pageNumber;

    var result = myString.split(",");
    var page_number = result[0];
    var categ_type = result[1];

    req.getConnection(function (err, connection) {

        query = "SELECT * FROM products where products_catagory = '" + categ_type + "'";
        connection.query(query, function (err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);

            if (rows.length) {
                res.render('realProductsCateg', {myData: rows, pageNumber: page_number});
            }
            else {// res.render('mycateg', {title: "Really Sorry"});
            }
        });
    });


});


module.exports = router;

