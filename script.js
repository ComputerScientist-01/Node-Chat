const socket = io("http://localhost:3000");
// get the message form from the send container
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const messageContainer = document.getElementById("message-container");
// Listening for a message from the server.
// and logging it to console
socket.on("chat-message", (data) => {
	appendMessage(data);
});

// When the user clicks the submit button, the message is sent to the server.
messageForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const message = messageInput.value;
	socket.emit("send-chat-message", message);
	messageInput.value = "";
});

function appendMessage(message) {
	const messageElement = document.createElement("div");
	messageElement.innerText = message;
	messageContainer.append(messageElement);
}
