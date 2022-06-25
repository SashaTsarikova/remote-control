import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import { WebSocketServer } from 'ws';
import { handleMessage } from './handleMessage';

const PORT = 8080;

export const httpServer = http.createServer(function (req, res) {
    const __dirname = path.resolve(path.dirname(''));
    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
    fs.readFile(file_path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

const wsServer: WebSocketServer = new WebSocketServer({
    port: PORT,
  });

wsServer.on('connection', (ws) => {
    console.log(`\x1b[33mWs server is running on port ${PORT}\x1b[33m`);
    ws.on('message', (message: Buffer) => {
        handleMessage(message.toString(), ws)
    });
    ws.on('close', () => {
        console.log('connection is closed');
    });
});
wsServer.on('close', () => {
    console.log('exit server');
});