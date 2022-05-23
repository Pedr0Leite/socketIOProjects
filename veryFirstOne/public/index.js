var socket = io();

var input = document.getElementById('input');
var roomInput = document.getElementById('room-input');
var joinRoomButton = document.getElementById('room-button');
var messages = document.getElementById('messages');
var form = document.getElementById('form');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

joinRoomButton.addEventListener('click', ()=>{
    const room = roomInput.value;
});

function displayMessage(message){
    const div = document.createElement('div');
    div.textContent = message;
    messages.append(div);
}

socket.on('chat message', function(msg){
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});