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
        posts: []
      };
    });
    this.postList['new'] = {
      name: 'new',
      posts: [PostListConfig.postContainer]
    };
    this.postList['top'] = {
      name: 'top',
      posts: [PostListConfig.postContainer]
    };
  }

  getPostList(item) {
    return this.postList[item].posts;
  }

  onReceviceUpdatePostList(category, amount) {
    if (category in PostListConfig.categoryMap) {
      this.client.posts(TumblrConfig.blogName, {tag: PostListConfig.categoryMap[category]}, this.parsePostListCategory.bind(this));
    }
    else if (category == 'new') {
      this.client.posts(TumblrConfig.blogName, {limit: amount}, this.parsePostListNew.bind(this));
    }
    else if (category == 'top') {
      this.client.posts(TumblrConfig.blogName, {tag: PostListConfig.tagMap['top']}, this.parsePostListTop.bind(this));
    }
  }

  parsePostListTop(err, data) {
    let updatedList = [];
    if (err) {
      console.log(err.stack);
    } else {
      data.posts.forEach((post) => {
        let result = this.parsePostData(post);
        if (result.valid == true) {
          updatedList.push(result);
        }
      });
      if (updatedList.length > 0) {
        this.postList['top'].posts = updatedList;
        this.emitChange('top');
        console.log('postlist top updated with '+updatedList.length+' posts');
      };
    }
  }

  parsePostListNew(err, data) {
    let updatedList = [];
    if (err) {
      console.log(err.stack);
    } else {
      data.posts.forEach((post) => {
        let result = this.parsePostData(post);
        if (result.valid == true) {
          updatedList.push(result);
        }
      });
      if (updatedList.length > 0) {
        this.postList['new'].posts = updatedList;
        this.emitChange('new');
        console.log('postlist new updated with '+updatedList.length+' posts');
      };
    }
  }

  parsePostListCategory(err, data) {
    let updatedList = [];
    if (err) {
      console.log(err.stack);
    } else {
      data.posts.forEach((post) => {
        let result = this.parsePostData(post);
        if (result.valid == true) {
          updatedList.push(result);
        }
      });
      if (updatedList.length > 0) {
        this.postList[updatedList[0].category].posts = updatedList;
        this.emitChange('category');
        console.log('postlist '+updatedList[0].category+' updated with '+updatedList.length+' posts');
      };
    }
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
    for (let tag of tagArray) {
      if (tag in PostListConfig.categoryMapZh) {
        return {category: PostListConfig.categoryMapZh[tag], valid: true};
      }
    };
    return {category: '', valid: false};
  }

  emitChange(type) {
    switch (type) {
      case 'category':
        this.emit(PostListConstants.POST_LIST_CATEGORY_EVENT);
        break;
      case 'new':
        this.emit(PostListConstants.POST_LIST_NEW_EVENT);
        break;
      case 'top':
        this.emit(PostListConstants.POST_LIST_TOP_EVENT);
        break;
      default:
    }

  }

  addChangeListener(type, listener) {
    switch (type) {
      case 'category':
        this.on(PostListConstants.POST_LIST_CATEGORY_EVENT, listener);
        break;
      case 'new':
        this.on(PostListConstants.POST_LIST_NEW_EVENT, listener);
        break;
      case 'top':
        this.on(PostListConstants.POST_LIST_TOP_EVENT, listener);
        break;
      default:
    }
  }

  removeChangeListener(type, listener) {
    switch (type) {
      case 'category':
        this.removeListener(PostListConstants.POST_LIST_CATEGORY_EVENT, listener);
        break;
      case 'new':
        this.removeListener(PostListConstants.POST_LIST_NEW_EVENT, listener);
        break;
      case 'top':
        this.removeListener(PostListConstants.POST_LIST_TOP_EVENT, listener);
        break;
      default:
    }
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
