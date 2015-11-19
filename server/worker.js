import express from 'express';
import serveStatic from 'serve-static';

export function run(worker) {
    console.log(`   >> SC Worker PID: ${process.pid}`);

    const http = worker.httpServer;
    const sc = worker.scServer;
    const app = express();

    app.use(serveStatic(`${process.cwd()}/public}`));

    http.on('request', app);

    sc.on('connection', (socket) => {
        console.log(socket);
    });
}
