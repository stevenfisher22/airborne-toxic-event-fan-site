var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/chat', (req, res) => {
    res.render('chat');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
})

http.listen(3000, () => {
    console.log('Server Port 3000 is Working!')
});
