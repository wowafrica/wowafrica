import {EventEmitter}     from 'events';
import Tumblr             from 'tumblr.js';
import TumblrConfig       from '../configures/TumblrConfig';
import PostListConstants  from '../constants/PostListConstants';
import AppDispatcher      from '../dispatcher/AppDispatcher';
import TumblrPostUtil     from '../utility/tumblrPost';
import request            from 'superagent';

class PostListReadMoreStore extends EventEmitter {

  constructor() {
    super();
    this.client = Tumblr.createClient({
      consumer_key: TumblrConfig.consumerKey // eslint-disable-line
    });
    this.allPostList = [];
    this.allPosts = {};
    this.randomPosts = [];
  }

  getRandomPosts() {
    return this.randomPosts;
  }

  onUpdateRandomPostList(amount, triggerId) {
    this.randomPostList = [];
    if (this.allPostList.length <= 0) {
      request.get(PostListConstants.POST_LIST_ALL_URL).end((err, res) => {
        if (err) {
          console.log('Cannot get all post json');
        }
        else {
          this.allPostList = res.body;
          this.chooseRandomPosts(amount, triggerId);
        }
      });
    }
    else {
      this.chooseRandomPosts(amount, triggerId);
    }
  }

  chooseRandomPosts(amount, triggerId) {
    if (this.allPostList.length < amount) {
      amount = this.allPostList.length;
    }

    let randomNums = [];
    while (randomNums.length < amount) {
      let num = Math.floor((Math.random() * this.allPostList.length) + 1);
      if (randomNums.indexOf(num) == -1 && this.allPostList[num-1] !== triggerId) {
        randomNums.push(num);
      }
    }
    randomNums.forEach((num) => {
      let id = this.allPostList[num-1];
      if (typeof this.allPosts[id] !== 'undefined') {
        this.updateRandomPost(id);
      }
      else {
        this.updateRandomPostFromServer(id);
      }
    });
  }

  updateRandomPost(id) {
    this.randomPosts.push(this.allPosts[id]);
    this.emitChange();
  }

  updateRandomPostFromServer(id) {
    this.client.posts(TumblrConfig.blogName, {id: id}, this.updateRandomPostFromTumblr.bind(this));
  }

  updateRandomPostFromTumblr(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = TumblrPostUtil.parsePosts(data);
      if (updatedList.length > 0) {
        updatedList.forEach((post) => {
          this.allPosts[post.id] = post;
          this.randomPosts.push(post);
        });
        this.emitChange();
        //console.log('randomPosts updated with '+updatedList.length+' posts');
      };
    }
  }

  emitChange() {
    this.emit(PostListConstants.POST_LIST_READMORE_EVENT);
  }

  addChangeListener(listener) {
    this.on(PostListConstants.POST_LIST_READMORE_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(PostListConstants.POST_LIST_READMORE_EVENT, listener);
  }
}

let postListReadMoreStore = new PostListReadMoreStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case PostListConstants.POST_LIST_READMORE_UPDATE:
      postListReadMoreStore.onUpdateRandomPostList(action.amount, action.postId);
      break;
    default:
      break;
  }
});

export default postListReadMoreStore;
