import { SocketCluster } from 'socketcluster';

// RethinkDB is running, this call probably won't stay here
import '../rethink';

const cluster = new SocketCluster({
  workers: process.env.NUMBER_WORKERS || 1,
  brokers: process.env.NUMBER_BROKERS || 1,
  port: process.env.PORT || 3000,
  appName: process.env.APP_NAME || null,
  workerController: `${__dirname}/worker.js`,
  brokerController: `${__dirname}/broker.js`,
  socketChannelLimit: process.env.SOCKET_CHANNEL_LIMIT || 1000,
  rebootWorkerOnCrash: true
});

if (process.env.NODE_ENV = 'development') {
  // This allows cluster to restart with nodemon
  process.on('SIGUSR2', () => {
    cluster.killWorkers();
    cluster.killBrokers();
    // amazingly this step allows for a smooth restart
    // hacky, but fine for this purpose
    throw new Error("*** RESTARTING SOCKETCLUSTER (not a real Error) ***");
  });
}
