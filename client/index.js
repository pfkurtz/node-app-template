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
import { todosApp } from './state/todosApp/todosApp';

const store = createStore(todosApp);

// UI (react)

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AddTodo from './components/todos/AddTodo';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    render(<AddTodo />, main);
});
