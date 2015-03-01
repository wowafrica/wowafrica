"use strict";

import express     from 'express';
import path        from 'path';
import React       from 'react';
import App         from '../src/App';
import RouteAction from '../src/actions/RouteAction';
import livereload  from 'connect-livereload';

let app = express();

app.use(express.static(path.resolve('_public')));

app.use(livereload());

app.all('*', (req, res) => {
  RouteAction.updatePath(req.url);
  let html = React.renderToString(<App/>);
  res.write(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <title>Explore Africa</title>
  </head>
  <body>
    ${html}
    <script type="text/javascript" src="scripts/bundle.js"></script>
  </body>
</html>`);
  res.end();
});

app.listen(3000, () => {
  console.log('Server start on port 3000');
});
