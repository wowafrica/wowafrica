import Tumblr       from 'tumblr.js';
import React        from 'react';
import TumblrConfig from '../src/configures/TumblrConfig';
import PostStore    from '../src/stores/PostStore';
import AuthorsStore from '../src/stores/AuthorsStore';
import ViewPostPage from '../src/pages/ViewPostPage';
import fs           from 'fs';

let client = Tumblr.createClient({
  consumer_key: TumblrConfig.consumerKey // eslint-disable-line
});

fs.stat('./_public/view_post_list', (err, stats) => {
  if (err || !stats.isDirectory()) {
    fs.mkdirSync('./_public/view_post_list');
    fs.mkdirSync('./_public/view_post_list/posts');
  }
});

let generatePage = function() {
  let html = React.renderToString(<ViewPostPage/>);
  let post = PostStore.getPost();
  let {id, title, brief, image} = post;
  let template = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${brief}" />
    <meta property="og:image" content="${image}" />
    <title>Explore Africa</title>
    <link href="/styles/main.css" type="text/css" rel="stylesheet"></link>
  </head>
  <body>
    <div id="content">${html}</div>
    <div id="nation_modal" class="ui dimmer modals page"></div>
    <div id="fb-root"></div>
    <script type="text/javascript" src="/scripts/vendor.js"></script>
    <script type="text/javascript" src="/scripts/vendor.bundle.js"></script>
    <script type="text/javascript" src="/scripts/bundle.js"></script>
    <script type="text/javascript">
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-61509591-1', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>`;
  fs.writeFile(`./_public/view_post_list/posts/${id}.html`, template, 'utf8', (error) => {
    if (error) {
      throw error;
    }
    console.log(`${id} done`);
  });
};

PostStore.addChangeListener(generatePage);

let getPostList = function() {
  client.blogInfo(TumblrConfig.blogName, (err, data) => {
    if (err) {
      console.log(err.stack);
    } else {
      client.posts(TumblrConfig.blogName, {limit: data.blog.posts, type: 'text'}, (err, data) => {
        if (err) {
          console.log(err.stack);
        } else {
          // console.log(data);
          data.posts.forEach((post) => {
            PostStore.onReceviceUpdatePosts(post.id);
          });
        }
      });
    }
  });
};

AuthorsStore.addChangeListener(getPostList);
AuthorsStore.onReceviceUpdateAuthors();
