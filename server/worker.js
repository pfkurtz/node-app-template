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

  http.on('request', app);

  setupSocketHandlers(sc);
}
