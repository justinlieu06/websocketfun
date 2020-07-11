var express = require('express');
var socket = require('socket.io');

//App setup//
var app = express();
//run with node index or nodemon
var server = app.listen(5000, function(){
  console.log('Listening to requests on port 5000');
});
////

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('Made socket connection!', socket.id);

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });
});