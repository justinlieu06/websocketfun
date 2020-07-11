//Make Connection

var socket = io.connect('http://localhost:5000');

//Query DOM
var message = document.getElementById('message'),
  handle = document.getElementById('handle'),
  btn = document.getElementById('send'),
  output = document.getElementById('output');

// Emit events

btn.addEventListener('click', function(){
  socket.emit('chat', {
    message: message.nodeValue,
    handle: handle.value
  })
});