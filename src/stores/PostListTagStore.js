import {EventEmitter}     from 'events';
import Tumblr             from 'tumblr.js';
import TumblrConfig       from '../configures/TumblrConfig';
import PostConfig         from '../configures/PostConfig';
import PostListConfig     from '../configures/PostListConfig';
import PostListConstants  from '../constants/PostListConstants';
import RouteConstants     from '../constants/RouteConstants';
import AppDispatcher      from '../dispatcher/AppDispatcher';
import TumblrPostUtil     from '../utility/tumblrPost';

class PostListTagStore extends EventEmitter {

  constructor() {
    super();
    this.client = Tumblr.createClient({
      consumer_key: TumblrConfig.consumerKey // eslint-disable-line
    });

    this.postList = {
      name: '',
      posts: [PostListConfig.postContainer],
      parsedPostNum: 0,
      totalPostNum: 0
    };
  }

  getListContainer() {
    return this.postList;
  }

  getPostList() {
    return this.postList.posts;
  }

  loadMorePosts(tag, amount) {
    if (this.postList.parsedPostNum < this.postList.totalPostNum) {
      this.client.posts(TumblrConfig.blogName, {
        offset: this.postList.parsedPostNum,
        tag: tag,
        limit: amount
      }, this.loadMorePostsTag.bind(this));
    }
  }

  loadMorePostsTag(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = TumblrPostUtil.parsePosts(data);
      if (updatedList.length > 0) {
        this.postList.parsedPostNum += data.posts.length;
        this.postList.totalPostNum = data.total_posts; // eslint-disable-line
        updatedList.forEach((post) => {
          this.postList.posts.push(post);
        });
        this.emitChange();
        //console.log('postlist tage load more with '+updatedList.length+' posts');
      };
    }
  }

  onReceviceUpdatePostList(tag, amount) {
    this.postList.totalPostNum = 0;
    this.client.posts(TumblrConfig.blogName, {limit: amount, tag: tag}, this.updateList.bind(this));
  }

  updateList(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = TumblrPostUtil.parsePosts(data);
      if (updatedList.length > 0) {
        this.postList.parsedPostNum = data.posts.length;
        this.postList.totalPostNum = data.total_posts; // eslint-disable-line
        this.postList.posts = updatedList;
        this.emitChange();
        //console.log('postlist new updated with '+updatedList.length+' posts');
      };
    }
  }

  emitChange() {
    this.emit(PostListConstants.POST_LIST_TAG_EVENT);
  }

  addChangeListener(listener) {
    this.on(PostListConstants.POST_LIST_TAG_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(PostListConstants.POST_LIST_TAG_EVENT, listener);
  }
}

let postListTagStore = new PostListTagStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case PostListConstants.POST_LIST_TAG_UPDATE:
      break;
    case RouteConstants.ROUTE_POST_LIST_TAG_PAGE:
      postListTagStore.onReceviceUpdatePostList(action.tag, TumblrConfig.postList.loadAmount);
      break;
    default:
      break;
  }
});

export default postListTagStore;
