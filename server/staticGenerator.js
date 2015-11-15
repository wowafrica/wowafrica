import Tumblr         from 'tumblr.js';
import React          from 'react';
import TumblrConfig   from '../src/configures/TumblrConfig';
import PostListConfig from '../src/configures/PostListConfig';
import PostStore      from '../src/stores/PostStore';
import AuthorsStore   from '../src/stores/AuthorsStore';
import PostListStore  from '../src/stores/PostListStore';
import ViewPostPage   from '../src/pages/ViewPostPage';
import IndexPage      from '../src/pages/IndexPage';
import fs             from 'fs';

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
    <title>WOW! AFRICA</title>
    <link href="/styles/main.css" type="text/css" rel="stylesheet"></link>
  </head>
  <body>
    <div id="content">${html}</div>
    <div id="nation_modal" class="ui dimmer modals page"></div>
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
            // For Old WebView, because it would not running js.
            PostStore.setLoader(false);
            PostStore.onReceviceUpdatePosts(post.id);
          });
        }
      });
    }
  });
};

AuthorsStore.addChangeListener(getPostList);
AuthorsStore.onReceviceUpdateAuthors();

let setIndexPage = function() {
  let html = React.renderToString(<IndexPage/>);
  let template = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta property="og:title" content="WOW! AFRICA" />
    <meta property="og:description" content=""wowAfrica 阿非卡為台灣最完整的非洲資訊平台 最新資訊及活動通知我們的願景是搭起台灣與非洲的橋樑，藉由資訊、新聞、整合各方資源及實體活動等推廣方式，豐富我們對於非洲的認識及想像，達成進一步的交流與發展。" />
    <meta property="og:image" content="http://wowafrica.tw/images/landing.png" />
    <title>WOW! AFRICA</title>
    <link href="/styles/main.css" type="text/css" rel="stylesheet"></link>
  </head>
  <body>
    <div id="content">${html}</div>
    <div id="nation_modal" class="ui dimmer modals page"></div>
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
  fs.writeFile('./_public/index.html', template, 'utf8', (error) => {
    if (error) {
      throw error;
    }
    console.log(`index.html done`);
  });
  fs.writeFile('./_public/404.html', template, 'utf8', (error) => {
    if (error) {
      throw error;
    }
    console.log(`404.html done`);
  });
};

PostListStore.addChangeListener('category', setIndexPage);
PostListStore.addChangeListener('new', setIndexPage);
PostListStore.addChangeListener('top', setIndexPage);

PostListStore.onReceviceUpdatePostList('new', 2);
PostListStore.onReceviceUpdatePostList('top', 2);
PostListConfig.categories.forEach((category) => {
  PostListStore.onReceviceUpdatePostList(category, 1);
});
