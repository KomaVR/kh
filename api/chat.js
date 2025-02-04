import { Server } from 'ws';

const handler = (req, res) => {
    if (req.method === 'GET') {
        // WebSocket server initialization
        const wss = new Server({ noServer: true });

        wss.on('connection', (ws) => {
            console.log('A user connected');
            
            // Broadcast message to all connected clients
            ws.on('message', (message) => {
                console.log('received: %s', message);
                wss.clients.forEach(client => {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(message);
                    }
                });
            });

            ws.on('close', () => {
                console.log('A user disconnected');
            });
        });

        res.socket.server.on('upgrade', (request, socket, head) => {
            wss.handleUpgrade(request, socket, head, (ws) => {
                wss.emit('connection', ws, request);
            });
        });
    }
    res.end();
};

export default handler;
