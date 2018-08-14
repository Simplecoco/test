/**
 * Created by simplecoco on 2017/7/12.
 */

var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var path = require('path');
// console.log(http);
// var html = path.resolve(__dirname + "index.html");
// console.log(html);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname));

io.on('connection',function (socket) {
    console.log('a user connected');
    socket.broadcast.emit('hi');
    socket.on('chat message', function (msg) {
        console.log('message:' + msg);
        io.emit('chat message', msg);
    });
    socket.on('disconnect',function (){
        console.log('user disconnected');
    })
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});