import express    from 'express';
import path       from 'path';
import React      from 'react';
import RouteStore from '../src/stores/RouteStore';

let app = express();

app.use(express.static(path.resolve('_public')));

app.all('*', (req, res) => {
  RouteStore.onReceiveUpdatePath(req.url);
  let {config} = RouteStore.getCurrentRoute();
  let CurrentPage = config['page'];
  let html = React.renderToString(<CurrentPage/>);
  res.write(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <title>WOW! AFRICA</title>
    <link href="/styles/main.css" type="text/css" rel="stylesheet"></link>
  </head>
  <body>
    <div id="content">${html}</div>
    <div id="nation_modal" class="ui dimmer modals page"></div>
    <script type="text/javascript" src="/scripts/vendor.js"></script>
    <script type="text/javascript" src="/scripts/vendor.bundle.js"></script>
    <script type="text/javascript" src="/scripts/bundle.js"></script>
  </body>
</html>`);
  res.end();
});

app.listen(3000, () => {
  console.log('Server start on port 3000');
});
