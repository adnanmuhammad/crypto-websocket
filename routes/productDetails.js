/**
 * Created by Muhammad on 11/25/2016.
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app     = express();
app.use(bodyParser.urlencoded({ extended: true }));


var myProducts = [];

var myProData = [];
var myColorData = [];
var mySizeData = [];
var myCommentsData = [];

var myProImagesData = [];

/* GET home page. */
router.get('/productDetails/:id', function (req, res)
{

    if(req.session && req.session.username) {

        var productId = req.params.id;
        req.getConnection(function (err, connection) {
            query = "SELECT * FROM products where products_id = '" + productId + "'";
            connection.query(query, function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                if (rows.length) {
                    console.log("-------------We Found the Data 4669-----------");
                    console.log(rows[0].products_name);
                    setValue(rows);
                }
                else {
                }
            });

            query = "SELECT p1.* FROM products p1 INNER JOIN products p2 ON p1.products_catagory = p2.products_catagory and p2.products_id = '" + productId + "'";
            connection.query(query, function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                if (rows.length) {
                    console.log("Just Look: ************************************************");
                    setMyProductsValue(rows);
                    console.log(myProducts.length);
                }
                else {
                }
            });

            //*******************************************************************************************
            query = "SELECT product_images.image_link FROM product_images INNER JOIN products ON product_images.image_id=products.pro_images and products.products_id = '" + productId + "'";
            connection.query(query, function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                if (rows.length)
                {
                    setMyImagesValue(rows);
                }
                else {
                }
            });

            //*******************************************************************************************




            query = "SELECT color.main_color_name FROM color INNER JOIN colorhandler  ON colorhandler.main_color_id=color.main_color_id INNER JOIN products ON products.products_colour=colorhandler.color_id and products.products_id = '" + productId + "'";
            connection.query(query, function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                if (rows.length) {
                    console.log("-------------We Found the Data 4776 -----------");
                    setColorValue(rows);
                }
                else {
                }
            });


            query = "SELECT size.main_size_name FROM size INNER JOIN sizehandler ON sizehandler.main_size_id=size.main_size_id INNER JOIN products ON sizehandler.size_id=products.products_size and products.products_id = '" + productId + "'";
            connection.query(query, function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                if (rows.length)
                {
                    console.log("Size data:");
                    console.log(rows[0]);
                    setSizeValue(rows);
                }
                else {
                }
            });


            query = "SELECT comment.comment_text, user.user_name FROM comment LEFT JOIN user ON comment.comment_by=user.user_id and comment.comment_on = '" + productId + "'";
            connection.query(query, function (err, rows) {
                if (err)
                    console.log("Error Selecting : %s ", err);
                if (rows.length) {
                    setCommentsValue(rows);

                    var data = new Object();
                    data = req.session.username;

                    res.render('ProductDetails', {
                        username: data,
                        productData: myProData,
                        productImages: myProImagesData,
                        productColors: myColorData,
                        productSizes: mySizeData,
                        productComments: myCommentsData,
                        allProducts: myProducts,
                        myProductId: productId
                    });
                }
                else {
                }
            });
        });
    }
    else
    {
        res.redirect('/login');

    }

});


router.post('/productDetails', function (req, res, next)
{


    var myProductId = req.body.productIdd;
    var myComment = req.body.commentText;
    var userId = req.session.userid;

    console.log("8989898000000000000000000 666666666666666666666");
    console.log(myProductId);
    console.log(myComment);
    console.log(userId);


    req.getConnection(function (err, connection)
    {
        var query = "INSERT into comment (comment_text, comment_by, comment_on, comment_createdon) values ('" + myComment + "','" + userId + "','" + myProductId + "', NOW())";
        connection.query(query, function (err, rows)
        {
            if (err)
                console.log("Error Selecting : %s ", err);
            else
            {
                //res.render('productDetails/1');
                //header('Location: /productDetails/1');
                res.redirect('/productDetails/myProductId');

            }

        });
    });


});

function setMyProductsValue(value)
{
    myProducts = value;
}

function setMyImagesValue(value)
{
    myProImagesData = value;
}


function setValue(value)
{
    myProData = value;
    console.log("----- Get Ready ----------------");
    console.log(myProData[0].products_name);
}

function setColorValue(value)
{
    myColorData = value;
    console.log("----- Get Ready ----------------");
    console.log(myColorData[0].colour_name);
}

function setSizeValue(value)
{
    mySizeData = value;
    console.log("----- Get Ready ----------------");
    console.log(mySizeData[0].size_name);
}

function setCommentsValue(value)
{
    myCommentsData = value;
    console.log("----- Get Ready ----------------");
    console.log(myCommentsData[0].comment_text);
}




module.exports = router;

