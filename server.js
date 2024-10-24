const WebSocket = require('ws');

const server = new WebSocket.Server({ port: process.env.PORT || 8080 });

server.on('connection', (socket) => {
  console.log('Client connected');
  
  socket.on('message', (message) => {
    console.log('Received:', message);
    socket.send(`Echo: ${message}`);
  });
  
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running...');
