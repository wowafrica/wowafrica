import {EventEmitter}     from 'events';
import Tumblr             from 'tumblr.js';
import TumblrConfig       from '../configures/TumblrConfig';
import PostConfig         from '../configures/PostConfig';
import PostListConfig     from '../configures/PostListConfig';
import PostListConstants  from '../constants/PostListConstants';
import RouteConstants     from '../constants/RouteConstants';
import AppDispatcher      from '../dispatcher/AppDispatcher';
import TumblrPostUtil     from '../utility/tumblrPost';
import request            from 'superagent';

class PostListAuthorStore extends EventEmitter {

  constructor() {
    super();
    this.client = Tumblr.createClient({
      consumer_key: TumblrConfig.consumerKey // eslint-disable-line
    });
    this.postList = {};
    this.postList['default'] = {
      name: 'default',
      posts: [PostListConfig.postContainer],
      parsedPostNum: 0,
      totalPostNum: 0
    };
  }

  getListContainer(author) {
    return typeof this.postList[author] !== 'undefined' ? this.postList[author] : this.postList['default'];
  }

  getPostList(author) {
    return typeof this.postList[author] !== 'undefined' ? this.postList[author].posts : this.postList['default'].posts;
  }

  onReceviceUpdatePostList(author, amount) {
    request.get(PostListConstants.POST_LIST_AUTHOR_URL).end((err, res) => {
      if (err) {
        console.log('Cannot get author json');
      }
      else {
        if (!this.postList[author]) {
          this.postList[author] = {};
        }
        this.postList[author].posts = [];
        this.postList[author].totalPostNum = 0;
        this.postList[author].parsedPostNum = 0;
        res.body[author].forEach((id) => {
          if (id > 600000000000000000) {
            // tumblr api cannot get post by id with new post id length(longer value),
            // workaround to get it in api response without requesting id
            this.client.posts(TumblrConfig.blogName, this.searchPostById.bind(this, id));
          } else {
            this.client.posts(TumblrConfig.blogName, {id: id}, this.updateList.bind(this));
          }
        });
      }
    });
  }

  searchPostById(id, err, data) {
    if (err) {
      console.log(err.stack);
    } else {
      let post = data.posts.filter(post => post.id == id);
      this.updateList(null, {posts: post});
    }
  }

  updateList(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = TumblrPostUtil.parsePosts(data);
      if (updatedList.length > 0) {
        updatedList.forEach((post) => {
          this.postList[post.author].posts.push(post);
        });
        this.postList[updatedList[0].author].totalPostNum += data.posts.length;
        this.postList[updatedList[0].author].parsedPostNum += data.posts.length;
        this.emitChange();
        //console.log('postlist new updated with '+updatedList.length+' posts');
      };
    }
  }

  emitChange() {
    this.emit(PostListConstants.POST_LIST_AUTHOR_EVENT);
  }

  addChangeListener(listener) {
    this.on(PostListConstants.POST_LIST_AUTHOR_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(PostListConstants.POST_LIST_AUTHOR_EVENT, listener);
  }
}

let postListAuthorStore = new PostListAuthorStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case PostListConstants.POST_LIST_AUTHOR_UPDATE:
      break;
    case RouteConstants.ROUTE_POST_LIST_AUTHOR_PAGE:
      postListAuthorStore.onReceviceUpdatePostList(action.author, TumblrConfig.postList.loadAmount);
      break;
    default:
      break;
  }
});

export default postListAuthorStore;
