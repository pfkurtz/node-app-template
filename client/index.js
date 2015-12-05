/* @flow */

import settings from '../common/settings';
console.log("SETTINGS", settings);

// Websockets connection

const socket = socketCluster.connect();

socket.on('error', (err) => {
    throw 'Socket error - !' + err;
});

socket.on('connect', () => {
    console.log("CONNECTED", socket);
});


// State (redux store)

import { createStore } from 'redux';
import { todosApp } from './components/todos';

const store = createStore(todosApp);
