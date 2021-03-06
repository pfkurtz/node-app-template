# This is a template for building Node apps

### Installation
`npm install`

### Testing
`npm test` to run the Mocha unit test suite.

`npm run test-cover` to generate Istanbul coverage reports in `coverage/`.

### Run (dev)
`npm start`

### Build
`npm run build`

Creates a `build/` directory where client files are uglified and server files are compiled with Babel, ready to be installed on your server.

### Browser
Go to [http://localhost:3000](http://localhost:3000 "Visit in browser") once it's running, or whatever other `$PORT` environment variable you've specified.

`<ctrl> + 'h'` toggles the state log sidebar.

Any username and password "letmein" will log you into the server right now.

#### Persistent dev data
Add `?debug_session=` and any string like `persist` (eg, `?debug_session=persist`, `?debug_session=foo`), and the debug state of the app at those URLs will be persisted in `localstorage` for later.
