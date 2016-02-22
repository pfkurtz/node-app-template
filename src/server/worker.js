import app from './app';
import setupSocketHandlers from './socket';

export function run(worker) {
  console.log(`   >> SC Worker PID: ${process.pid}`);

  worker.httpServer.on('request', app());
  setupSocketHandlers(worker.scServer);
}
