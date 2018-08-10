var socket = io();

socket.on('connect', () => {
    console.log('connected to server');

    // socket.emit('createEmail', {
    //     to: 'sunny@gmail.com',
    //     text: 'Hey. This is Sourish'
    // });

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Hey. This is Andrew'
    });

});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});

// socket.on('newEmail', (email) => {
//     console.log('new email', email);
// }); 

socket.on('newMessage', (message) => {
    console.log('new message', message);
}); 