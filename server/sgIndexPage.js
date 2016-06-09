import React          from 'react';
import Tumblr         from 'tumblr.js';
import ReactDOMServer from 'react-dom/server';
import TumblrConfig   from '../src/configures/TumblrConfig';
import PostListConfig from '../src/configures/PostListConfig';
import PostListStore  from '../src/stores/PostListStore';
import IndexPage      from '../src/pages/IndexPage';
import fs             from 'fs';

export default function() {

  let client = Tumblr.createClient({
    consumer_key: TumblrConfig.consumerKey // eslint-disable-line
  });

  let setIndexPage = function() {
    let html = ReactDOMServer.renderToString(<IndexPage/>);
    let template = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="chrome=1">
      <meta property="og:title" content="WOW! AFRICA" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:description" content="wowAfrica阿非卡為台灣最完整的非洲資訊平台，最新資訊及活動通知我們的願景是搭起台灣與非洲的橋樑，藉由資訊、新聞、整合各方資源及實體活動等推廣方式，豐富我們對於非洲的認識及想像，達成進一步的交流與發展。" />
      <meta property="og:image" content="http://wowafrica.tw/images/landing.png" />
      <title>WOW! AFRICA</title>
      <link href="/styles/main.css" type="text/css" rel="stylesheet"></link>
    </head>
    <body>
      <div id="side_bar"></div>
      <div id="content">${html}</div>
      <div id="nation_modal" class="ui dimmer modals page"></div>
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
      console.log('index.html done');
    });
    fs.writeFile('./_public/404.html', template, 'utf8', (error) => {
      if (error) {
        throw error;
      }
      console.log('404.html done');
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
}
