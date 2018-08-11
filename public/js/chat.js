// Make connection
var socket = io.connect();

// Query DOM
var message = document.getElementById('message'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');
      user= document.getElementById('username').textContent;

// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: user
       
    });

    // console.log(message.value);
    message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', user);
})

// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    chatwindow.scrollTop = chatwindow.scrollHeight;
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
    chatwindow.scrollTop = chatwindow.scrollHeight;
});


