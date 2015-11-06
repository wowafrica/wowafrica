import express     from 'express';
import path        from 'path';
import React       from 'react';
import connectLive from 'connect-livereload';
import RouteStore  from '../src/stores/RouteStore';

let app = express();

let BUILD_PATH = '_public';

app.use(connectLive());
app.use(express.static(path.resolve(BUILD_PATH)));

app.all('*', (req, res) => {
  console.log('URL:' + req.url);

  if (req.url.startsWith('/view_post_list/posts/')) {
    let postId = req.url.split('/')[3];
    res.sendFile(
      path.resolve(`${BUILD_PATH}/view_post_list/posts/${postId}.html`));
  } else {
    res.sendFile(path.resolve(`${BUILD_PATH}/index.html`));
  }
});

app.listen(3000, () => {
  console.log('Server start on port 3000');
});
