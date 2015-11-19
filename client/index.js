const socket = socketCluster.connect();

socket.on('error', (err) => {
    throw 'Socket error - !' + err;
});

socket.on('connect', () => {
    console.log("CONNECTED", socket);
});
