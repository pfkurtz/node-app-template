export default function setupSocketHandlers(scServer) {
  const sc = scServer;

  sc.on('connection', (socket) => {
    const head = socket.request.headers;

      console.log("got a connection:", head.connection, head['user-agent'], head['sec-websocket-key'], "\n   authToken:", socket.request.authToken);
  });

}
