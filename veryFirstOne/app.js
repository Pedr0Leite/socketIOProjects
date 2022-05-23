const express = require('express');
const app = express ();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static("public")); //Use this so express generats the html + css without using the below code


// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// })

//SocketIO part
//On Disconnet
// io.on('connection', (socket)=>{
//     console.log('A user connected.');
//     socket.on('disconnect', () =>{
//         console.log('User Disconnected!.')
//     })
// })

//On Chat message
io.on('connection', (socket)=>{
    socket.on('chat message', (msg) =>{
        console.log(`This is the msg: ${msg}`)
    })
})

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });

  io.emit("hello", "world");

// io.emit('some event', {
//      someProperty: 'some value', 
//      otherProperty: 'other value' 
//     }); // This will emit the event to all connected sockets

// carry on on:
// https://socket.io/get-started/chat

//Run sercer
server.listen(3000, ()=>{
console.log('Listening on port: ' + port);
});