const WebSocket = require('ws');

const server = new WebSocket.Server({ port: process.env.PORT || 8080 });
const clients = new Set(); // Armazena todos os clientes conectados

server.on('connection', (socket) => {
    console.log('Cliente conectado');
    clients.add(socket); // Adiciona o cliente à lista de conexões

    // Trata mensagens recebidas de um cliente
    socket.on('message', (message) => {
        console.log('Mensagem recebida:', message.toString());

        // Reenvia a mensagem para todos os clientes, exceto o remetente
        clients.forEach(client => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Remove o cliente da lista ao desconectar
    socket.on('close', () => {
        console.log('Cliente desconectado');
        clients.delete(socket);
    });
});

console.log('Servidor WebSocket está rodando...');
