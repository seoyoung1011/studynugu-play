const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(4000, () => {
	console.log("서버연결...");
});

function sendData(command){
    io.on("connection", (socket) => {
        console.log('SocketID: ' + socket.id)
        if(command == 'startTimer'){
            io.emit('aciton', {
                message: "startTimer"
            });
            console.log("타이머 시작");
        }
        else if(command == 'recordTime'){
            io.emit('action', 'recordTime');
        }
        else if(command == 'remainTime'){
            io.emit('aciton', 'remainTime');
        }

    });
}

module.exports = sendData;