import React          from 'react';
import Tumblr         from 'tumblr.js';
import ReactDOMServer from 'react-dom/server';
import fs             from 'fs';
import TumblrConfig   from '../src/configures/TumblrConfig';
import PostStore      from '../src/stores/PostStore';
import AuthorsStore   from '../src/stores/AuthorsStore';
import ViewPostPage   from '../src/pages/ViewPostPage';
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

  let allPostNum = 0;
  let processdPostNum = 0;

  let allPostList = [];

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
    'Amon Bazongo': [],
    'wowafrica阿非卡編輯部': [],
    'Maggie Yun': [],
    '中東研究通訊': []
  };

  fs.stat('./_public/view_post_list', (err, stats) => {
    if (err || !stats.isDirectory()) {
      fs.mkdirSync('./_public/view_post_list');
      fs.mkdirSync('./_public/view_post_list/posts');
    }
  });

  let updateAllPostListFile = function(id) {
    allPostList.push(id);
    fs.writeFile('./_public/view_post_list/allPostList.json', JSON.stringify(allPostList), 'utf8', (error) => {
      if (error) {
        throw error;
      }
    });
  };

  let updateAuthorPostListFile = function(author, id) {
    if (typeof authorPostList[author] !== 'undefined') {
      authorPostList[author].push(id);
    }
    fs.writeFile('./_public/view_post_list/authorPostList.json', JSON.stringify(authorPostList), 'utf8', (error) => {
      if (error) {
        throw error;
      }
      //console.log(`authorPostList.json update`);
    });
  };

  let generatePage = function() {
    let post = PostStore.getPost();
    let {id, title, brief, image, author, tags} = post;
    let html = ReactDOMServer.renderToString(<ViewPostPage pageUrl={'/view_post_list/posts/'+id}/>);
    let template = genTemplate({
      title: `${title} - wowAfrica阿非卡 - 華人圈最全方位的非洲資訊平台`,
      ogTitle: title,
      description: brief,
      image: image,
      url: `https://wowafrica.tw/view_post_list/posts/${id}`,
      keywords: tags.toString(),
      html: html
    });
    fs.writeFile(`./_public/view_post_list/posts/${id}.html`, template, 'utf8', (error) => {
      if (error) {
        throw error;
      }
      processdPostNum++;
      console.log(`post ${id} done, (${processdPostNum}/${allPostNum})`);
    });
    updateAllPostListFile(id);
    updateAuthorPostListFile(author, id);
  };

  PostStore.addChangeListener(generatePage);

  let getPostList = function() {
    client.posts(TumblrConfig.blogName, {limit: 1, type: 'text'}, (err, data) => {
      allPostNum = data.total_posts;
      if (err) {
        console.log(err.stack);
      } else {
        for (let offset = 0; offset < data.total_posts; offset += 20) {
          setTimeout(() => {
            console.log(`send request to tumblr, offset: ${offset}`);
            client.posts(TumblrConfig.blogName, {limit: data.blog.posts, offset: offset, type: 'text'}, (err, data) => {
              if (err) {
                console.log(err.stack);
              } else {
                data.posts.forEach((post) => {
                  // For Old WebView, because it would not running js.
                  PostStore.setLoader(false);
                  PostStore.onReceviceUpdatePosts(post.id);
                });
              }
            });
          }, 1000*offset/20);
        }
      }
    });
  };

  AuthorsStore.addChangeListener(getPostList);
  AuthorsStore.onReceviceUpdateAuthors();
};
