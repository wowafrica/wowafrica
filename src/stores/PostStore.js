import {EventEmitter} from 'events';
import Tumblr         from 'tumblr.js';
import TumblrConfig   from '../configures/TumblrConfig';
import PostConfig     from '../configures/PostConfig';
import PostListConfig from '../configures/PostListConfig';
import PostConstants  from '../constants/PostConstants';
import RouteConstants from '../constants/RouteConstants';
import AppDispatcher  from '../dispatcher/AppDispatcher';

class PostStore extends EventEmitter {

  constructor() {
    super();
    this.post = {};
    this.client = Tumblr.createClient({
      consumer_key: TumblrConfig.consumerKey // eslint-disable-line
    });
  }

  getPost() {
    return this.post;
  }

  onReceviceUpdatePosts(postID) {
    this.client.posts(TumblrConfig.blogName, {id: postID}, this.parsePostData.bind(this));
  }

  parsePostData(err, data) {
    if (err) {
      console.log(err.stack);
    } else {
      // console.log(JSON.stringify(data, null, 2));

      let image = this.parsePostImage(data.posts[0].body);
      let {settingResult, body} = this.parsePostSetting(data.posts[0].body);
      this.removeTopTag(data.posts[0].tags);
      this.post = {...data.posts[0], body, image, ...settingResult};

      this.emitChange();
    }
  }

  removeTopTag(tags) {
    let idx = tags.indexOf(PostListConfig.tagMap['top']);
    if (idx != -1) {
      tags.splice(idx, 1);
    }
  }

  parsePostSetting(body) {
    let [setting, ...bodyArray] = body.split('<hr>');
    let settingResult = PostConfig.settingContainer;

    if (bodyArray.length > 0) {
      body = bodyArray.join('<hr>');
      // <p>作者: Lee</p>
      setting.match(/[^>]*[：:][^<]*/g).forEach((entry) => {
        // 作者: Lee
        let [key, ...value] = entry.split(/[：:]/);
        if (key in PostConfig.settingAlias) {
          settingResult[PostConfig.settingAlias[key]] = value.join(':').trim();
        }
      });
    }
    // console.log(settingResult);
    return {settingResult, body};
  }

  parsePostImage(body) {
    let imageSrc = body.match(/<img [^>]*\/>/g);

    if (imageSrc) {
      imageSrc = imageSrc[0].match(/http[^\"\'\s]*/)[0];
    } else {
      imageSrc = 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg';
    }
    return imageSrc;
  }

  emitChange() {
    this.emit(PostConstants.POST_EVENT);
  }

  addChangeListener(listener) {
    this.on(PostConstants.POST_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(PostConstants.POST_EVENT, listener);
  }
}

let postStore = new PostStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case RouteConstants.ROUTE_POST_PAGE:
      console.log('Get Post Action');
      console.log(action.postID);
      postStore.onReceviceUpdatePosts(action.postID);
      break;
    default:
      break;
  }
});

export default postStore;
