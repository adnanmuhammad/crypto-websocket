var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

router.get('/cart/add-to-cart/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart.items : {});

    req.getConnection(function (err, connection) {
        query = "SELECT * FROM products where products_id = '" + productId + "'";
        connection.query(query, function (err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);
            if (rows.length) {
                console.log("Product Details");
                console.log(rows[0]);
                cart.add(rows[0], productId);
                console.log("Here is the Cart");
                console.log(cart);
                req.session.cart = cart;
                console.log(req.originalUrl);
                res.redirect('back');
            }
            else {
            }
        });
    });
});


router.get('/cart/shop', function (req, res, next) {
    if (!req.session.cart) {
        return res.render('cart', {products: null});
    }
    var cart = new Cart(req.session.cart.items);
    res.render('cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});



router.get('/cart/checkout', function (req, res, next) {
    //TODO:save session cart in db if required

    //reset cart
    req.session.cart = null;

    res.render('cart_checkout');
});



module.exports = router;
