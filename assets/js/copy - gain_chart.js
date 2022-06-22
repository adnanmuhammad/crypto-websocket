// Make connection
var socket = io.connect('http://localhost:1337');


update_gain_chart_data();
function update_gain_chart_data() {
    // get username
    var name = $("#user_name").val();
    // send it to server
    socket.emit("update_gain_chart_data", name);
}

socket.on('fetch_gain_chart_data', function(data){
    //console.log(data.first_name +' - ' + data.last_name +' - '+data.address);
    //$('#tbl-gain-chart > tbody').append('<tr><td scope="row">4</td><td> '+ data.first_name +' </td><td> '+ data.last_name +' </td><td> '+ data.address +' </td></tr>');

    $('#tbl-gain-chart > tbody').html('');
    var html = "";
    //console.log(data);

    for (var i = 0; i < data.length; i++) {
        if(data[i].time_interval == 1) {
            html += '<tr><td scope="row" style="font-size: 15px; font-weight: bold; text-align: center; background-color: #00DFDF;">'+ data[i].time_interval +'</td><td> '+ data[i].counter1_1 +' </td><td> '+ data[i].counter1_2 +' </td><td> '+ data[i].counter1_3 +' </td><td> '+ data[i].counter1_4 +' </td><td> '+ data[i].counter1_5 +' </td><td> '+ data[i].counter1_6 +' </td><td> '+ data[i].counter1_7 +' </td><td> '+ data[i].counter1_8 +' </td><td> '+ data[i].counter1_9 +' </td><td> '+ data[i].counter1_10 +' </td><td> '+ data[i].counter1_11 +' </td><td> '+ data[i].counter1_12 +' </td><td> '+ data[i].counter1_13 +' </td><td> '+ data[i].counter1_14 +' </td><td> '+ data[i].counter1_15 +' </td><td> '+ data[i].counter1_16 +' </td><td> '+ data[i].counter1_17 +' </td><td> '+ data[i].counter1_18 +' </td><td> '+ data[i].counter1_19 +' </td><td> '+ data[i].counter1_20 +' </td></tr>';
        } else if(data[i].time_interval == 3) {
            html += '<tr><td scope="row" style="font-size: 15px; font-weight: bold; text-align: center; background-color: #00DFDF;">'+ data[i].time_interval +'</td><td> '+ data[i].counter3_1 +' </td><td> '+ data[i].counter3_2 +' </td><td> '+ data[i].counter3_3 +' </td><td> '+ data[i].counter3_4 +' </td><td> '+ data[i].counter3_5 +' </td><td> '+ data[i].counter3_6 +' </td><td> '+ data[i].counter3_7 +' </td><td> '+ data[i].counter3_8 +' </td><td> '+ data[i].counter3_9 +' </td><td> '+ data[i].counter3_10 +' </td><td> '+ data[i].counter3_11 +' </td><td> '+ data[i].counter3_12 +' </td><td> '+ data[i].counter3_13 +' </td><td> '+ data[i].counter3_14 +' </td><td> '+ data[i].counter3_15 +' </td><td> '+ data[i].counter3_16 +' </td><td> '+ data[i].counter3_17 +' </td><td> '+ data[i].counter3_18 +' </td><td> '+ data[i].counter3_19 +' </td><td> '+ data[i].counter3_20 +' </td></tr>';
        } else if(data[i].time_interval == 5) {
            html += '<tr><td scope="row" style="font-size: 15px; font-weight: bold; text-align: center; background-color: #00DFDF;">'+ data[i].time_interval +'</td><td> '+ data[i].counter5_1 +' </td><td> '+ data[i].counter5_2 +' </td><td> '+ data[i].counter5_3 +' </td><td> '+ data[i].counter5_4 +' </td><td> '+ data[i].counter5_5 +' </td><td> '+ data[i].counter5_6 +' </td><td> '+ data[i].counter5_7 +' </td><td> '+ data[i].counter5_8 +' </td><td> '+ data[i].counter5_9 +' </td><td> '+ data[i].counter5_10 +' </td><td> '+ data[i].counter5_11 +' </td><td> '+ data[i].counter5_12 +' </td><td> '+ data[i].counter5_13 +' </td><td> '+ data[i].counter5_14 +' </td><td> '+ data[i].counter5_15 +' </td><td> '+ data[i].counter5_16 +' </td><td> '+ data[i].counter5_17 +' </td><td> '+ data[i].counter5_18 +' </td><td> '+ data[i].counter5_19 +' </td><td> '+ data[i].counter5_20 +' </td></tr>';
        } else if(data[i].time_interval == 7) {
            html += '<tr><td scope="row" style="font-size: 15px; font-weight: bold; text-align: center; background-color: #00DFDF;">'+ data[i].time_interval +'</td><td> '+ data[i].counter7_1 +' </td><td> '+ data[i].counter7_2 +' </td><td> '+ data[i].counter7_3 +' </td><td> '+ data[i].counter7_4 +' </td><td> '+ data[i].counter7_5 +' </td><td> '+ data[i].counter7_6 +' </td><td> '+ data[i].counter7_7 +' </td><td> '+ data[i].counter7_8 +' </td><td> '+ data[i].counter7_9 +' </td><td> '+ data[i].counter7_10 +' </td><td> '+ data[i].counter7_11 +' </td><td> '+ data[i].counter7_12 +' </td><td> '+ data[i].counter7_13 +' </td><td> '+ data[i].counter7_14 +' </td><td> '+ data[i].counter7_15 +' </td><td> '+ data[i].counter7_16 +' </td><td> '+ data[i].counter7_17 +' </td><td> '+ data[i].counter7_18 +' </td><td> '+ data[i].counter7_19 +' </td><td> '+ data[i].counter7_20 +' </td></tr>';
        } else if(data[i].time_interval == 10) {
            html += '<tr><td scope="row" style="font-size: 15px; font-weight: bold; text-align: center; background-color: #00DFDF;">'+ data[i].time_interval +'</td><td> '+ data[i].counter10_1 +' </td><td> '+ data[i].counter10_2 +' </td><td> '+ data[i].counter10_3 +' </td><td> '+ data[i].counter10_4 +' </td><td> '+ data[i].counter10_5 +' </td><td> '+ data[i].counter10_6 +' </td><td> '+ data[i].counter10_7 +' </td><td> '+ data[i].counter10_8 +' </td><td> '+ data[i].counter10_9 +' </td><td> '+ data[i].counter10_10 +' </td><td> '+ data[i].counter10_11 +' </td><td> '+ data[i].counter10_12 +' </td><td> '+ data[i].counter10_13 +' </td><td> '+ data[i].counter10_14 +' </td><td> '+ data[i].counter10_15 +' </td><td> '+ data[i].counter10_16 +' </td><td> '+ data[i].counter10_17 +' </td><td> '+ data[i].counter10_18 +' </td><td> '+ data[i].counter10_19 +' </td><td> '+ data[i].counter10_20 +' </td></tr>';
        }
    }

    $('#tbl-gain-chart > tbody').append(html);

});




// connect current logged in user from server to make him available for chat
connect_current_logged_in_user();
function connect_current_logged_in_user() {
    // get username
    var name = $("#user_name").val();

    // send it to server
    socket.emit("jjm_user_connected", name);

    // save my name in global variable
    sender = name;
}

// get all chat users from database and populate users
populate_messenger_users();

$("#comment").keypress(function (e) {
    if(e.which == 13) {
        jjm_send_message();
        e.preventDefault();
    }
});

$('.reply-send').on('click',function(){
    jjm_send_message();
});

function  jjm_send_message() {
    // get message
    var message = $("#comment").val();
    var sender_id  = $("#userid").val();
    var sender  = $("#user_name").val();
    var receiver = $("#receiver_user_name").val();
    var receiver_id = $("#receiver_id").val();
    var phone_no = $("#phone_no").val();
    var chat_type = $("#chat_type").val();

    if(chat_type == 'individual') {
        //*** send individual message to server ***//
        socket.emit("jjm_send_message", {
            sender_id: sender_id,
            sender: sender,
            receiver_id: receiver_id,
            receiver: receiver,
            message: message,
            phone_no: phone_no
        });
    } else if(chat_type == 'group_chat') {
        //alert('group_chat');
        //alert(' Message:' + message +', Sender: ' + sender +', Receiver: ' + receiver +', Phone: ' + phone_no +', Chat type: ' + chat_type);

        // send message to server
        socket.emit("jjm_send_message_room", {
            sender_id: sender_id,
            message: message,
            receiver_id: receiver_id,
            room_name: receiver,
            phone_no: phone_no
        });
    }

    var d = new Date();
    var message_time = moment(d).format('h:mm a');

    var msg = "<div class='msg'> " +
        "                        <div class='bubble altfollow'> " +
        "                            <div class='txt'> " +
        "                                <i class='fa fa-angle-down fa-2x  pull-right' aria-hidden='true' id='flip4' style='color: #b9b9b9;'></i>" +
        "                                <span class='timestamp'> "+ message_time +" </span> " +
        "                                <p class='message follow'>" + message + "</p>" +
        "                            </div>" +
        "                            <div class='bubble-arrow alt'></div>" +
        "                        </div>" +
        "                    </div>";

    $(".message-main").append(msg);
    $("#comment").val('');
    $("#comment").focus();
}


// listen from server
socket.on("jjm_new_message", function (data) {
    //$("#output").append('<p><strong>' + data.sender + ' says: </strong>' + data.message + '</p>');
    //$(".message-main").append('<p><strong>' + data.sender + ' says: </strong>' + data.message + '</p>');

    var msg = "<div class='msg'>" +
        "                        <div class='bubble'>" +
        "                            <div class='txt'>" +
        "                                <span class='name'> "+ data.phone_no +" <span> ~ " + data.sender + " </span></span>" +
        "                                <span class='timestamp'> "+ data.time +" </span>" +
        "                                <p class='message'> " + data.message + " </p>" +
        "                            </div>" +
        "                            <div class='bubble-arrow'>" +
        "                                <i class='fa fa-angle-down fa-2x  pull-right' aria-hidden='true' id='flip4' style='color: #b9b9b9;'></i>" +
        "                            </div>" +
        "                        </div>" +
        "                    </div>";

    $(".message-main").append(msg);
});

// listen from server
socket.on("jjm_message_from_room", function (data) {
    var logged_in_user_name = $("#user_name").val();
    var room_name = $("#receiver_user_name").val();

    //console.log(data.username + '_____,' +  data.message);
    //$("#output").append('<p><strong>' + data.username + ' says: </strong>' + data.message + ' @ '+ data.time + '</p>');

    if( (logged_in_user_name != data.username) && (data.room_name == room_name) ) {
        var msg = "<div class='msg'>" +
            "                        <div class='bubble'>" +
            "                            <div class='txt'>" +
            "                                <span class='name'> "+ data.phone_no +" <span> ~ " + data.username + " </span></span>" +
            "                                <span class='timestamp'> "+ data.time +" </span>" +
            "                                <p class='message'> " + data.message + " </p>" +
            "                            </div>" +
            "                            <div class='bubble-arrow'>" +
            "                                <i class='fa fa-angle-down fa-2x  pull-right' aria-hidden='true' id='flip4' style='color: #b9b9b9;'></i>" +
            "                            </div>" +
            "                        </div>" +
            "                    </div>";

        $(".message-main").append(msg);
    }

});


function populate_messenger_users() {
    var userid = $("#userid").val();

    $.ajax({
        url: "http://localhost:1337/get_all_users",
        method: "POST",
        data: { },
        success: function (response) {
            //console.log(response);

            var html_users = "";
            var db_users = JSON.parse(response);

            for (var i = 0; i < db_users.length; i++) {


                if(db_users[i].chat_type == 'individual') {
                    if(userid != db_users[i].user_id) {
                        var full_name = db_users[i].first_name + ' ' + db_users[i].last_name;
                        html_users += "  <div class='row sideBar-body'>" +
                            "                        <div class='col-sm-3 col-xs-3 sideBar-avatar'>" +
                            "                            <div class='avatar-icon'>" +
                            "                                <img src='https://www.livechatinc.com/wp-content/themes/livechat2.0/media/img/devices/mac/livechat-macosx-application.png'> " +
                            "                            </div>" +
                            "                        </div>" +
                            "                        <div  class='col-sm-9 col-xs-9 sideBar-main'>" +
                            "                            <div class='row'>" +
                            "                                <div onclick='javascript:show_user_details("+db_users[i].user_id+", \""+ db_users[i].user_name + "\", \""+ full_name + "\", \""+ db_users[i].phone_no + "\", \""+ db_users[i].chat_type + "\")' class='col-sm-8 col-xs-8 sideBar-name'>" +
                            "                                    <span class='name-meta'></span>" +
                            "                                    <span class='name-meta'> "+ db_users[i].first_name + " " + db_users[i].last_name + " </span>" +
                            "                                    <span class='number-meta'> "+ db_users[i].phone_no + " </span>" +
                            "                                </div>" +
                            "                                <span class='badge badge-light'>1</span>" +
                            "                            </div>" +
                            "                        </div>" +
                            "                    </div>  ";
                    }
                } else if(db_users[i].chat_type == 'group_chat') {
                    var full_name = db_users[i].group_display_name;
                    html_users += "  <div class='row sideBar-body'>" +
                        "                        <div class='col-sm-3 col-xs-3 sideBar-avatar'>" +
                        "                            <div class='avatar-icon'>" +
                        "                                <img src='https://www.livechatinc.com/wp-content/themes/livechat2.0/media/img/devices/mac/livechat-macosx-application.png'> " +
                        "                            </div>" +
                        "                        </div>" +
                        "                        <div  class='col-sm-9 col-xs-9 sideBar-main'>" +
                        "                            <div class='row'>" +
                        "                                <div onclick='javascript:show_user_details("+db_users[i].group_id+", \""+ db_users[i].group_name + "\", \""+ full_name + "\", \""+ db_users[i].phone_no + "\", \""+ db_users[i].chat_type + "\")' class='col-sm-8 col-xs-8 sideBar-name'>" +
                        "                                    <span class='name-meta'></span>" +
                        "                                    <span class='name-meta'> "+ db_users[i].group_display_name + " </span>" +
                        "                                    <span class='number-meta'> "+ db_users[i].group_name + " </span>" +
                        "                                </div>" +
                        "                                <span class='badge badge-light'>1</span>" +
                        "                            </div>" +
                        "                        </div>" +
                        "                    </div>  ";
                }

            }
            $("#users_list").html(html_users);
        }
    });
}

function show_user_details(user_id, user_name, full_name, phone_no, chat_type) {
    $(".message-main").html('');
    $("#receiver_id").val(user_id);
    $("#receiver_user_name").val(user_name);
    $("#chat_type").val(chat_type);

    // Hide the default display of home page
    $(".default_display").hide();
    $(".heading-name-meta").text(full_name);
    //$("#conversation").html('');

    // show the main conversation div
    $(".conversation").show();
    $("#comment").focus();


    // when click on group send join request in group for socket communication
    if(chat_type == 'group_chat') {
        var login_name = $("#user_name").val();
        room_name = user_name;
        socket.emit("jjm_joinRoom", {username: login_name, room_name: room_name} );
    }

    // Load Previous Chat From ajax
    load_previous_chat(chat_type);
    // Load Previous Chat From ajax

}

function load_previous_chat(chat_type) {
    $(".message-main").html('');
    var sender_id  = $("#userid").val();
    var receiver_id = $("#receiver_id").val();

    $.ajax({
        url: "http://localhost:1337/get_previous_chat",
        method: "POST",
        data: { sender_id: sender_id, receiver_id: receiver_id, chat_type: chat_type },
        success: function (response) {
            //console.log(response);

            var html_users = "";
            var db_chat = JSON.parse(response);

            for (var i = 0; i < db_chat.length; i++) {
                    if(sender_id == db_chat[i].message_from) {  // if the sender is me or this current user
                        var msg = "<div class='msg'> " +
                            "                        <div class='bubble altfollow'> " +
                            "                            <div class='txt'> " +
                            "                                <i class='fa fa-angle-down fa-2x  pull-right' aria-hidden='true' id='flip4' style='color: #b9b9b9;'></i>" +
                            "                                <span class='timestamp'> "+ db_chat[i].message_time +" </span> " +
                            "                                <p class='message follow'>" + db_chat[i].message + "</p>" +
                            "                            </div>" +
                            "                            <div class='bubble-arrow alt'></div>" +
                            "                        </div>" +
                            "                    </div>";

                        $(".message-main").append(msg);
                    } else {    // else if the sender is other than me/current user
                            var msg = "<div class='msg'>" +
                                "                        <div class='bubble'>" +
                                "                            <div class='txt'>" +
                                "                                <span class='name'> "+ db_chat[i].from_phone_no +" <span> ~ " + db_chat[i].from_user_name + " </span></span>" +
                                "                                <span class='timestamp'> "+ db_chat[i].message_time +" </span>" +
                                "                                <p class='message'> " + db_chat[i].message + " </p>" +
                                "                            </div>" +
                                "                            <div class='bubble-arrow'>" +
                                "                                <i class='fa fa-angle-down fa-2x  pull-right' aria-hidden='true' id='flip4' style='color: #b9b9b9;'></i>" +
                                "                            </div>" +
                                "                        </div>" +
                                "                    </div>";

                            $(".message-main").append(msg);
                    }
            }

        }
    });
}



// Register user

$('#register-user').on('click',function(){
    var user_name = $("#user_name").val();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var user_password = $("#user_password").val();
    var phone_no = $("#phone_no").val();
    var user_email = $("#user_email").val();

    alert(user_name);
    alert(first_name);
    alert(last_name);
    alert(user_password);
    alert(phone_no);
    alert(user_email);





});



//================================================== E N D =============================================================

// Emit events
$('#send').on('click',function(){
    var message = $("#message").val();
    var handle = $("#handle").val();

    socket.emit('chat', {
        message: message,
        handle: handle
    });
    $("#message").val('');
});

$('#message').on('keypress',function(){
    var handle = $("#handle").val();
    socket.emit('typing', handle);
});

// Listen for events
socket.on('chat', function(data){
    //console.log(data.handle +'____'+data.message);
    $("#feedback").html('');
    $("#output").append('<p><strong>' + data.handle + ': </strong>' + data.message + '</p>');
});

socket.on('typing', function(data){
    $("#feedback").html('<p><em>' + data + ' is typing a message...</em></p>');
});


// =========================== PRIVATE CHAT =======================================

$('#btn_login').on('click',function(){
    // get username
    var name = $("#user_name").val();

    // send it to server
    socket.emit("user_connected", name);

    // save my name in global variable
    sender = name;
});

socket.on("user_connected", function (username) {
    var html = "";
    html += "<p class='cls_login_ids'><a onclick='onUserSelected(this.innerHTML);'>" + username + "</a></p>";
    document.getElementById("users").innerHTML += html;
});

function onUserSelected(username) {
    // save selected user in global variable
    receiver = username;
}

$('#btn_send_message').on('click',function(){
    // get message
    var message = $("#private_message").val();

    // send message to server
    socket.emit("send_message", {
        sender: sender,
        receiver: receiver,
        message: message
    });

    // append your own message
    /*var html = "";
    html += "<li>You said: " + message + "</li>";
    $("#output").append(html);*/

    $("#output").append('<p><strong>You said: </strong>' + message + '</p>');
    $("#private_message").val('');

});

// listen from server
socket.on("new_message", function (data) {
    /*var html = "";
    html += "<li>" + data.sender + " says: " + data.message + "</li>";
    $("#output").append(html);*/

    $("#output").append('<p><strong>' + data.sender + ' says: </strong>' + data.message + '</p>');
});

 // ================ Group Chat ===================

$('#btn_login_room').on('click',function(){
    // get username
    var name = $("#user_name").val();

    // send it to server
    socket.emit("user_connected_room", name);

    // save my name in global variable
    sender_room = name;
});

socket.on("user_connected_room", function (username) {
    var html = "";
    html += "<p class='cls_login_ids'><a onclick='join_jj_chat_room(this.innerHTML);'>" + username + "</a></p>";
    document.getElementById("users").innerHTML += html;
});

function join_jj_chat_room(username) {
    var room_name = 'jj_chat';
    //console.log(username);
    socket.emit("joinRoom", {username: username, room_name: room_name} );
}

$('#btn_send_message_room').on('click',function(){
    // get message
    var message = $("#private_message").val();
    var room_name = 'jj_chat';

    // send message to server
    socket.emit("send_message_room", {
        message: message,
        room_name: room_name
    });

    // append your own message
    /*var html = "";
    html += "<li>You said: " + message + "</li>";
    $("#output").append(html);*/

    $("#output").append('<p><strong>You said: </strong>' + message + '</p>');
    $("#private_message").val('');

});

// listen from server
socket.on("message_from_room", function (data) {
    /*var html = "";
    html += "<li>" + data.sender + " says: " + data.message + "</li>";
    $("#output").append(html);*/
    //$("#output").append('<p><strong>' + data.sender + ' says: </strong>' + data.message + '</p>');
    console.log(data.username + '_____,' +  data.message);
    $("#output").append('<p><strong>' + data.username + ' says: </strong>' + data.message + ' @ '+ data.time + '</p>');
});

// listen from server
socket.on("joinMessage", function (data) {
    $("#output").append('<p style="font-size: 12px;"><i>' + data.message + ' </i></p>');
});


// listen from server
socket.on("leftGroupMessage", function (data) {
    $("#output").append('<p style="font-size: 12px;"><i>' + data.message + ' </i></p>');
});