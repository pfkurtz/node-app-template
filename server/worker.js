import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

import { PROD } from '../common/constants/env';
import setupSocketHandlers from './sockets';

export function run(worker) {
  console.log(`   >> SC Worker PID: ${process.pid}`);

  const http = worker.httpServer;
  const sc = worker.scServer;
  const AuthEngine = worker.auth;
  const verifyToken = AuthEngine.verifyToken;
  // console.log("verifyToken:", !!AuthEngine.verifyToken);

  const app = express();

  app.use(serveStatic(path.resolve(process.cwd(), 'public')));

  // I don't know how we do this when start isomorphic stage,
  // but this allows the client app to handle all routes for now
  app.get('*', (req, res) => {
    res.sendFile(process.cwd()+'/public/index.html');
  });

  http.on('request', app);

  setupSocketHandlers(sc);
}
