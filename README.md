# This is a template for building Node apps

### Installation
`npm install`  
`npm run install-globals-dev`

If you want to, change the info in `package.json`. *NB: Installs several global Node modules* &mdash; cf. `scripts` in `package.json`.

### Test
`npm test`

### Run
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
