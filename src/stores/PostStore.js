import {EventEmitter} from 'events';
import Tumblr         from 'tumblr.js';
import TumblrConfig   from '../configures/TumblrConfig';
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
    }

    console.log(data.posts[0]);

    this.post = data.posts[0];
  
    this.emitChange();
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
