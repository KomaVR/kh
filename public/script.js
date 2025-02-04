const socket = new WebSocket('ws://localhost:3000'); // Change to your deployed WebSocket URL

const sendButton = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        socket.send(message);
        messageInput.value = '';
    }
});

socket.addEventListener('message', (event) => {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = event.data;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
});

messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
