import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

console.log("ENV", process.env.NODE_ENV);

export function run(worker) {
    console.log(`   >> SC Worker PID: ${process.pid}`);

    const http = worker.httpServer;
    const sc = worker.scServer;
    const app = express();

    app.use(serveStatic(path.resolve(process.cwd(), 'public')));

    http.on('request', app);

    sc.on('connection', (socket) => {
        console.log("got a connection");
    });

}
