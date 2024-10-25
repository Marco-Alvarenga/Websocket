const WebSocket = require('ws');

const server = new WebSocket.Server({ port: process.env.PORT || 8080 });

server.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('message', (message) => {
        // Converte a mensagem de Buffer para string
        const messageString = message.toString(); 
        console.log('Mensagem recebida:', messageString);

        // Envia a mensagem de volta como um JSON
        socket.send(JSON.stringify({ type: 'echo', message: messageString }));
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (error) => {
        console.error('Erro no WebSocket:', error);
    });
});

console.log('Servidor WebSocket está rodando...');
