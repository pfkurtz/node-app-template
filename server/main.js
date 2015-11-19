import {SocketCluster} from 'socketcluster';

import settings from './settings';
//global.SETTINGS = settings;

console.log("\n*** STARTING ***\n");
//console.dir(global.SETTINGS);

const socketCluster = new SocketCluster({
    workers: Number(settings.numberWorkers) || 1,
    brokers: Number(settings.numberBrokers) || 1,
    port: Number(settings.port) || 3000,
    appName: settings.name || null,
    workerController: `${__dirname}/worker.js`,
    brokerController: `${__dirname}/broker.js`,
    socketChannelLimit: settings.socketChannelLimit || 1000,
    rebootWorkerOnCrash: settings.rebootWorkerOnCrash || true
});

if (!settings.production) {
    // This allows socketCluster to restart with nodemon
    process.on('SIGUSR2', () => {
        socketCluster.killWorkers();
        socketCluster.killBrokers();
        // amazingly this step allows for a smooth restart
        // hacky, but fine for this purpose
        throw new Error("Error to restart socketcluster.");
    });
}
