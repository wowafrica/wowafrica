import React          from 'react';
import Tumblr         from 'tumblr.js';
import ReactDOMServer from 'react-dom/server';
import fs             from 'fs';

import configureStore from '../src/stores';
import Provider       from '../src/utility/Provider';
import TumblrConfig   from '../src/configures/TumblrConfig';
import ViewPostPage   from '../src/pages/ViewPostPage';

import devTemplate    from './dev/html.template';
import prodTemplate   from './prod/html.template';

import {fetchAuthor} from '../src/actions/AuthorAction';
import {fetchPost}   from '../src/actions/PostAction';


let genTemplate = devTemplate;

if (process.env.NODE_ENV === 'production') {
  genTemplate = prodTemplate;
}

const client = Tumblr.createClient({
  consumer_key: TumblrConfig.consumerKey // eslint-disable-line
});

const updateAllPostListFile = (postList) => new Promise((resolve, reject) => {
  let postIdList = postList.map(({id}) => id);
  fs.writeFile('./_public/view_post_list/allPostList.json', JSON.stringify(postIdList), 'utf8', (error) => {
    if (error) {
      reject(error);
    }
    resolve();
  });
});

const updateAuthorPostListFile = (postList) => new Promise((resolve, reject) => {

  let authorPostList = {
    '何佩佳': [],
    '謝睿哲': [],
    '張堯任': [],
    '林詩閔': [],
    '葉菀菱': [],
    '程可安': [],
    '賴奕諭': [],
    '盧韋辰': [],
    '蔡祁珊': [],
    '何玉渟': [],
    '王文秀': [],
    '林俐辰': [],
    'Tracy Chen': [],
    'wowAfrica阿非卡編輯部': []
  };

  postList.forEach(({author, id}) => {
    if (typeof authorPostList[author] !== 'undefined') {
      authorPostList[author].push(id);
    }
  });

  fs.writeFile('./_public/view_post_list/authorPostList.json', JSON.stringify(authorPostList), 'utf8', (error) => {
    if (error) {
      reject(error);
    }
    //console.log(`authorPostList.json update`);
    resolve();
  });
});

const generatePage = (store, post) => new Promise((resolve, reject) => {

  let {id, title, brief, image, author, tags} = post;

  let html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ViewPostPage pageUrl={`/view_post_list/posts/${id}`}/>
    </Provider>
  );

  let template = genTemplate({
    title: `${title} - wowAfrica阿非卡 - 華人圈最全方位的非洲資訊平台`,
    ogTitle: title,
    description: brief,
    image: image,
    url: `https://wowafrica.tw/view_post_list/posts/${id}`,
    keywords: tags.toString(),
    html: html,
    state: JSON.stringify(store.getState())
  });

  fs.writeFile(`./_public/view_post_list/posts/${id}.html`, template, 'utf8', (error) => {
    if (error) {
      reject(error);
    }
    console.log(`post ${id} done`);
    resolve({author, id});
  });
});

const getTotalPostNum = () => new Promise((resolve, reject) => {
  client.posts(TumblrConfig.blogName, {limit: 1, type: 'text'}, (err, data) => {
    if (err) {
      console.log(err.stack);
      reject(err);
    } else {
      resolve(data.total_posts);
    }
  });
});

const getPostList = (totalPosts) => {
  let idList = [];
  for (let offset = 0; offset < totalPosts; offset += 20) {
    idList.push(new Promise((resolve, reject) => {
      client.posts(TumblrConfig.blogName, {limit: 20, offset: offset, type: 'text'}, (err, data) => {
        if (err) {
          console.log(err.stack);
          reject(err);
        } else {
          resolve(data.posts.map(post => post.id));
        }
      });
    }));
  }
  return idList;
};

const generateEachPage = (store, id) => (
  store.dispatch(
    fetchPost(id)
  ).then(() => {
    let {post} = store.getState();
    return generatePage(store, post.post);
  })
);

export default function() {

  const store = configureStore();

  fs.stat('./_public/view_post_list', (err, stats) => {
    if (err || !stats.isDirectory()) {
      fs.mkdirSync('./_public/view_post_list');
      fs.mkdirSync('./_public/view_post_list/posts');
    }
  });

  store.dispatch(
    fetchAuthor()
  ).then(
    () => getTotalPostNum()
  ).then(
    totalPosts => Promise.all(getPostList(totalPosts))
  ).then(
    idList => idList.reduce((prev, curr) => [...prev, ...curr], [])
  ).then(
    idList => Promise.all(idList.map(id => generateEachPage(store, id)))
  ).then(
    postList => Promise.all([
      updateAllPostListFile(postList),
      updateAuthorPostListFile(postList)
    ])
  ).then(
    () => console.log('All done')
  );
};
