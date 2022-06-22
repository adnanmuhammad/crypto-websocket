var express = require('express');
var router = express.Router();

router.post('/get_all_users', function (req, res, next) {
    req.getConnection(function (err, connection) {
        //var query = "SELECT * FROM user";

        var query = "SELECT user_id, user_name, first_name, last_name, phone_no, NULL AS group_id, NULL AS group_display_name, NULL AS group_name, 'individual' AS chat_type " +
                    "FROM user " +
                    "WHERE deleted_at IS NULL " +

                    " UNION ALL " +

                    "SELECT NULL AS user_id, NULL AS user_name, NULL AS first_name, NULL AS last_name, NULL AS phone_no, group_id, group_display_name, group_name, 'group_chat' AS chat_type " +
                    "FROM chat_groups " +
                    "WHERE deleted_at IS NULL " +
                    " AND group_id IN ( SELECT DISTINCT group_id FROM chat_group_users WHERE user_id = "+ req.session.userid +" AND deleted_at IS NULL ) ";

        connection.query(query, function (err, rows) {
            if (rows.length) {
                //console.log('here comes the db users');
                //console.log(rows);

                // response will be in JSON
                res.end(JSON.stringify(rows));
            }
        });
    });
});

router.post('/get_previous_chat', function (req, res, next) {
    req.getConnection(function (err, connection) {
        //var query = "SELECT * FROM user";

        console.log(req.body.sender_id +'___________'+ req.body.receiver_id);

        if(req.body.chat_type == 'individual') {
            var query = "SELECT m.id, ufr.user_name AS from_user_name, ufr.first_name AS from_first_name, ufr.last_name AS from_last_name, m.message, " +
                " uto.user_name AS to_user_name, uto.first_name AS to_first_name, uto.last_name AS to_last_name, " +
                " DATE_FORMAT(m.message_datetime,'%d-%m-%Y %h:%m %p') AS message_datetime, " +
                " DATE_FORMAT(m.message_datetime,'%h:%m %p') AS message_time, m.message_from, ufr.phone_no AS from_phone_no " +
                " FROM messages m " +
                " LEFT JOIN user ufr ON ufr.user_id = m.message_from " +
                " LEFT JOIN user uto ON uto.user_id = m.message_to " +
                " WHERE m.delete_state = 0 " +
                " AND (m.message_from = '"+ req.body.sender_id +"' OR m.message_to = '"+ req.body.sender_id +"' ) " +
                " AND (m.message_from = '"+ req.body.receiver_id +"' OR m.message_to = '"+ req.body.receiver_id +"') " +
                " AND m.message_type = 0 " +
                " ORDER BY m.message_datetime ASC ";
        } else if(req.body.chat_type == 'group_chat') {
            var query = "SELECT m.id, ufr.user_name AS from_user_name, ufr.first_name AS from_first_name, ufr.last_name AS from_last_name, m.message, " +
                " cgr.group_display_name, cgr.group_name, " +
                " DATE_FORMAT(m.message_datetime,'%d-%m-%Y %h:%m %p') AS message_datetime, " +
                " DATE_FORMAT(m.message_datetime,'%h:%m %p') AS message_time, m.message_from, ufr.phone_no AS from_phone_no " +
                " FROM messages m " +
                " LEFT JOIN user ufr ON ufr.user_id = m.message_from " +
                " LEFT JOIN chat_groups cgr ON cgr.group_id = m.group_id " +
                " WHERE m.delete_state = 0 " +
                " AND (m.group_id = '"+ req.body.receiver_id +"') " +
                " AND m.message_type = 1 " +
                " ORDER BY m.message_datetime ASC ";
        }

        connection.query(query, function (err, rows) {
            if (rows.length) {
                //console.log('here comes the previous chat');
                //console.log(rows);

                // response will be in JSON
                res.end(JSON.stringify(rows));
            }
        });
    });
});

/* GET home page. */
router.get('/home', function (req, res, next)
{
    if(req.session && req.session.username) {
        var data = new Object();
        if(req.session.username)
        {
            data.username = req.session.username;
            data.userid = req.session.userid;
            data.phone_no = req.session.phone_no;
        }

        res.render('home', data );
    } else {
        res.redirect('/login');
    }
});

router.get('/gain_chart', function (req, res, next)
{
    if(req.session && req.session.username) {
        var data = new Object();
        if(req.session.username)
        {
            data.username = req.session.username;
            data.userid = req.session.userid;
            data.phone_no = req.session.phone_no;
        }

        res.render('gain_chart', data );
    } else {
        res.redirect('/login');
    }
});


router.get('/messenger', function (req, res, next)
{
    if(req.session && req.session.username) {
        var data = new Object();
        //console.log(req.session.username);
        if(req.session.username)
        {
            data.username = req.session.username;
        }
        res.render('messenger', data );
    } else {
        res.redirect('/login');
    }
});

router.get('/private_chat', function (req, res, next)
{
    if(req.session && req.session.username) {
        var data = new Object();
        if(req.session.username)
        {
            data.username = req.session.username;
        }
        res.render('private_chat', data);
    } else {
        res.redirect('/login');
    }
});

router.get('/group_chat', function (req, res, next)
{
    if(req.session && req.session.username) {
        var data = new Object();
        if(req.session.username)
        {
            data.username = req.session.username;
        }
        res.render('group_chat', data);
    } else {
        res.redirect('/login');
    }
});


module.exports = router;
