// connect to socket io
const io = require("socket.io")(3000, {
	cors: {
		origin: true,
	},
});

// send hello world message on connection
io.on("connection", (socket) => {
	socket.on("send-chat-message", (message) => {
		socket.broadcast.emit("chat-message", message);
	});
});
