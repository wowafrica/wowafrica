import React          from 'react';
import Tumblr         from 'tumblr.js';
import ReactDOMServer from 'react-dom/server';
import fs             from 'fs';
import TumblrConfig   from '../src/configures/TumblrConfig';
import PostListConfig from '../src/configures/PostListConfig';
import PostListStore  from '../src/stores/PostListStore';
import IndexPage      from '../src/pages/IndexPage';
import devTemplate    from './dev/html.template';
import prodTemplate   from './prod/html.template';

let genTemplate = devTemplate;

if (process.env.NODE_ENV === 'production') {
  genTemplate = prodTemplate;
}

export default function() {

  let client = Tumblr.createClient({
    consumer_key: TumblrConfig.consumerKey // eslint-disable-line
  });

  let setIndexPage = function() {
    let html = ReactDOMServer.renderToString(<IndexPage/>);
    let template = genTemplate({
      title: 'WOW! AFRICA',
      ogTitle: 'WOW! AFRICA',
      description: 'wowAfrica阿非卡為台灣最完整的非洲資訊平台，我們的願景是搭起台灣與非洲的橋樑，藉由資訊、新聞、整合各方資源及實體活動等推廣方式，豐富我們對於非洲的認識及想像，達成進一步的交流與發展。',
      image: 'https://wowafrica.tw/images/landing.png',
      url: 'https://wowafrica.tw',
      keywords: '台灣,非洲',
      html: html
    });
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
