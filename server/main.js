import {SocketCluster} from 'socketcluster';

import settings from './settings';
//global.SETTINGS = settings;

console.log("\n*** STARTING ***");
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
