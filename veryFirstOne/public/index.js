var socket = io();

var input = document.getElementById('input');
var roomInput = document.getElementById('room-input');
var joinRoomButton = document.getElementById('room-button');
var messages = document.getElementById('messages');
var form = document.getElementById("form");

try{
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input) {
      socket.emit('chat message', input.value);
      displayMessage(input.value);
      input.value = '';
    }
  });
  
  joinRoomButton.addEventListener('click', ()=>{
    const room = roomInput.value;
  });
  
  function displayMessage(message){
    const div = document.createElement('div');
    div.textContent = message;
    div.className = 'div-chat' + randomNumber();
    messages.append(div);
    
    function randomNumber(){
      return Math.floor(Math.random() * 3);
    }
  }
  
  socket.on('chat message', function(msg){
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

}catch(e){
  console.log('e: ' + e);
} 