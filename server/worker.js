import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

import { PROD } from '../common/constants/env';
import setupSocketHandlers from './sockets';

export function run(worker) {
  console.log(`   >> SC Worker PID: ${process.pid}`);

  const http = worker.httpServer;
  const sc = worker.scServer;

  const app = express();

  app.use(serveStatic(path.resolve(process.cwd(), 'public')));

  // Public/Universal JS routes will be like this
  app.get('/universal', (req, res) => {
    res.write("This will be rendered HTML from JS on the server.");
    res.end();
  });

  // Any SPA route is covered by this,
  // because the client has enough data for page's state
  app.all('*', (req, res) => {
    res.sendFile(process.cwd()+'/public/index.html');
  });

  http.on('request', app);

  setupSocketHandlers(sc);
}
