// connect to socket io
const io = require("socket.io")(3000, {
	cors: {
		origin: true,
	},
});

// send hello world message on connection
io.on("connection", (socket) => {
	socket.emit("chat-message", "hello world");
});
