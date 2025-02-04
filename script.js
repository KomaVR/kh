document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');
    
    if (messageInput.value.trim() !== "") {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = messageInput.value;
        chatBox.appendChild(newMessage);
        
        // Scroll to the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Clear the input field
        messageInput.value = '';
    }
});

document.getElementById('message-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});
