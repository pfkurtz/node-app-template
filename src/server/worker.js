import app from './app';
import socket from './socket';

/**
 * SocketCluster worker.
 * @TODO unit tests with mocks.
 * @param  {obect} worker - passed by SocketCluster
 * @return {undefined} NA
 */
export function run(worker) {
  console.log(`   >> SC Worker PID: ${process.pid}`);
  
  worker.httpServer.on('request', app());
  worker.scServer.on('connection', socket);
}
