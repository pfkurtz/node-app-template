import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

export default function app() {
  const app = express();

  app.use(serveStatic(path.resolve(process.cwd(), 'src/public')));

  // Public/Universal JS routes will be like this
  app.get('/universal', (req, res) => {
    res.write("This will be rendered HTML from JS on the server.");
    res.end();
  });

  // Any SPA route is covered by this,
  // because the client has enough data for page's state
  app.all('*', (req, res) => {
    res.sendFile(process.cwd()+'/src/public/index.html');
  });

  return app;
}
