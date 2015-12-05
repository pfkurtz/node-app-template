/* @flow */

import settings from '../common/settings';
console.log("SETTINGS", settings);

// websockets connection

const socket = socketCluster.connect();

socket.on('error', (err) => {
    throw 'Socket error - !' + err;
});

socket.on('connect', () => {
    console.log("CONNECTED", socket);
});


// State (redux store)

import { createStore } from 'redux';

function todos (state = []: array, action: Object): array {
    let newState;

    // return new state (no mutations) using action
    // or return current state

    switch (action.type) {
        case 'ADD_TODO':
            return [...state].push({ text: '' });
        default:
            return state;
    }


};

const store = createStore(todos);
