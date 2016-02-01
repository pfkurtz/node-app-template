export default function setupSocketHandlers(scServer) {
  const sc = scServer;

  sc.on('connection', (socket) => {
    const head = socket.request.headers;
    const authToken = socket.getAuthToken();

    console.log("got a connection:", head.connection, head['user-agent'], head['sec-websocket-key'], "\n   authToken:", authToken);

    socket.on('login', (credentials, respond) => {
      //if (authToken) socket.deauthenticate();
      console.log("login event", credentials);

      if (credentials.password === 'letmein') {

        respond();

        socket.setAuthToken({
          username: credentials.username
        });

        console.log(socket.getAuthToken());

      } else {
        respond('Login failed.');
      }
    });
  });

}
