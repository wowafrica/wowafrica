import {EventEmitter}     from 'events';
import Tumblr             from 'tumblr.js';
import TumblrConfig       from '../configures/TumblrConfig';
import PostConfig         from '../configures/PostConfig';
import PostListConfig     from '../configures/PostListConfig';
import PostConstants      from '../constants/PostConstants';
import PostListConstants  from '../constants/PostListConstants';
import AppDispatcher      from '../dispatcher/AppDispatcher';

class PostListStore extends EventEmitter {

  constructor() {
    super();
    this.postList = PostListConfig.categoryAlias;
    this.client = Tumblr.createClient({
      consumer_key: TumblrConfig.consumerKey // eslint-disable-line
    });
    this.currentCategory = '';

    PostListConfig.categories.forEach((item) => {
      this.postList[item] = {
        totalPost: -1,
        loadedPost: 0,
        posts: []
      };
    });
  }

  getPostList(category) {
    return this.postList[category];
  }

  onReceviceUpdatePostList(category, amount) {
    if (this.postList[category].totalPost < 0 ||
       (this.postList[category].loadedPost < this.postList[category].totalPost && this.postList[category].loadedPost < amount)
    ) {
      this.currentCategory = category;
      this.client.posts(TumblrConfig.blogName, {tag: 'category-'+category, offset: this.postList[category].loadedPost}, this.parsePostListData.bind(this));
    }
  }

  parsePostListData(err, data) {
    if (err) {
      console.log(err.stack);
    } else {
      this.postList[this.currentCategory].totalPost = data.total_posts;
      data.posts.forEach((post) => {
        let result = this.parsePostData(post);
        this.postList[this.currentCategory].posts.push(result);
        this.postList[this.currentCategory].loadedPost++;
      });
      this.emitChange();
    }
    console.log(this.postList[this.currentCategory]);
  }

  parsePostData(post) {
    let id = post.id;
    let title = post.title;
    let image = this.parsePostImage(post.body);
    let grocery = this.parsePostBody(post.body);

    return {id, title, image, ...grocery};
  }

  parsePostBody(body) {
    let [setting, ...bodyArray] = body.split('<hr>');
    let settingResult = PostConfig.settingContainer;

    if (bodyArray.length > 0) {
      body = bodyArray.join('<hr>');
      // <p>作者: Lee</p>
      setting.match(/[^>]*:[^<]*/g).forEach((entry) => {
        // 作者: Lee
        let [key, value] = entry.split(':');
        settingResult[PostConfig.settingAlias[key]] = value.trim();
      });
    }
    return settingResult;
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
    this.emit(PostListConstants.POST_LIST_EVENT);
  }

  addChangeListener(listener) {
    this.on(PostListConstants.POST_LIST_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(PostListConstants.POST_LIST_EVENT, listener);
  }
}

let postListStore = new PostListStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case PostListConstants.POST_LIST_UPDATE:
      console.log('Update post list ' + action.category + ' ' + action.amount);
      postListStore.onReceviceUpdatePostList(action.category, action.amount);
      break;
    default:
      break;
  }
});

export default postListStore;
