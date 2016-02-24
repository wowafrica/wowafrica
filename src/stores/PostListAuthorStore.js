import {EventEmitter}     from 'events';
import Tumblr             from 'tumblr.js';
import TumblrConfig       from '../configures/TumblrConfig';
import PostConfig         from '../configures/PostConfig';
import PostListConfig     from '../configures/PostListConfig';
import PostListConstants  from '../constants/PostListConstants';
import RouteConstants     from '../constants/RouteConstants';
import AppDispatcher      from '../dispatcher/AppDispatcher';
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
          this.client.posts(TumblrConfig.blogName, {id: id}, this.updateList.bind(this));
        });
      }
    });
  }

  updateList(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = this.parsePosts(data);
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

  parsePosts(data) {
    let updatedList = [];
    data.posts.forEach((post) => {
      let result = this.parsePostData(post);
      if (result.valid == true) {
        updatedList.push(result);
      }
    });
    return updatedList;
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
      setting.match(/[^>]*[:：][^<]*/g).forEach((entry) => {
        // 作者: Lee
        let [key, ...value] = entry.split(/[:：]/);
        if (key in PostConfig.settingAlias) {
          settingResult[PostConfig.settingAlias[key]] = value.join('：').trim();
        }
      });
    }
    return settingResult;
  }

  parsePostImage(body) {
    let imageSrc = body.match(/<img [^>]*\/>/g);
    if (imageSrc) {
      let imageSrcList = imageSrc[0].match(/http[^\"\'\s]*/);
      if (imageSrcList) {
        imageSrc = imageSrcList[0];
      } else {
        imageSrc = 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg';
      }
    } else {
      imageSrc = 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg';
    }
    return imageSrc;
  }

  parsePostCategory(tagArray) {
    for (let tag of tagArray) {
      if (tag in PostListConfig.categoryMapZh) {
        return {category: PostListConfig.categoryMapZh[tag], valid: true};
      }
    };
    return {category: '', valid: false};
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
