const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(4000, () => {
	console.log("서버연결...");
});

io.on('connection', function(socket){
	console.log('!!!!1');
});

function sendData(command){
	console.log('sendData');
    io.on("connection", (socket) => {
        console.log('SocketID: ' + socket.id)
        if(command == 'startTimer'){
            io.emit('aciton', {
                message: "startTimer"
            });
            console.log("타이머 시작");
        }
        else if(command == 'recordTime'){
            io.emit('aciton', {
                message: "recordTime"
            });
            console.log("타이머 저장");
        }
        else if(command == 'remainTime'){
            io.emit('aciton', {
                message: "remainTime"
            });
            console.log("!!!!");
        }

    });
}

module.exports = sendData;