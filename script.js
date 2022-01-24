const socket = io("http://localhost:3000");

// Listening for a message from the server.
// and logging it to console
socket.on("chat-message", (data) => {
	console.log(data);
});
