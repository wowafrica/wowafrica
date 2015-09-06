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
    this.postList = PostListConfig.listContainer;
    this.client = Tumblr.createClient({
      consumer_key: TumblrConfig.consumerKey // eslint-disable-line
    });

    PostListConfig.categories.forEach((item) => {
      this.postList[item] = {
        name: item,
        totalPost: -1,
        loadedPost: 0,
        posts: []
      };
    });
  }

  getPostList(category) {
    return this.postList[category].posts;
  }

  onReceviceUpdatePostList(category, amount) {
    if (this.postList[category].totalPost < 0 ||
       (this.postList[category].loadedPost < this.postList[category].totalPost && this.postList[category].loadedPost < amount)
    ) {
      this.client.posts(TumblrConfig.blogName, {tag: 'category-'+category, offset: this.postList[category].loadedPost}, this.parsePostListData.bind(this));
    }
  }

  parsePostListData(err, data) {
    let dbgTmp = '';
    if (err) {
      console.log(err.stack);
    } else {
      data.posts.forEach((post) => {
        let result = this.parsePostData(post);
        if (result.valid == true) {
          this.postList[result.category].posts.push(result);
          this.postList[result.category].loadedPost++;
          this.postList[result.category].totalPost = data.total_posts;
          dbgTmp = result.category;
        }
      });
      this.emitChange();
    }
    console.log(this.postList[dbgTmp]);
  }

  parsePostData(post) {
    let id = post.id;
    let title = post.title;
    let image = this.parsePostImage(post.body);
    let setting = this.parsePostBody(post.body);
    let {category, valid} = this.parsePostCategory(post.tags);

    return {id, title, image, category, ...setting, valid};
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

  parsePostCategory(tagArray) {
    let tags = tagArray.join(',');
    let matchedTag = tags.match(/category-[^,]*/g);
    if (matchedTag && matchedTag.length == 1) {
      return {category: matchedTag[0].substring(9), valid: true};
    } else {
      return {category: '', valid: false};
    }
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
      postListStore.onReceviceUpdatePostList(action.category, action.amount);
      break;
    default:
      break;
  }
});

export default postListStore;
