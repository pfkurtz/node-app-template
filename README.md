# This is a template for building Node apps

### Installation
`git clone git@bitbucket.org:patkirts/app-template.git`
`cd app-template`
`npm run init`

If you want to, change the info in `package.json`. *NB: Installs several global Node modules* &mdash; cf. `init.sh` and `scripts` in `package.json`.

### Test
`npm test`

### Run
`npm start`

### Browser
Go to [http://localhost:3000](http://localhost:3000 "Visit in browser") once it's running, or whatever other `$PORT` environment variable you've specified.

`<ctrl> + 'h'` toggles the state log sidebar.

#### Persistent dev data
Add `?debug_session=` and any string like `persist` (eg, `?debug_session=persist`, `?debug_session=foo`), and the debug state of the app at those URLs will be persisted in `localstorage` for later.
