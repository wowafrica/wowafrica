import {EventEmitter}     from 'events';
import Tumblr             from 'tumblr.js';
import TumblrConfig       from '../configures/TumblrConfig';
import PostConfig         from '../configures/PostConfig';
import PostListConfig     from '../configures/PostListConfig';
import PostConstants      from '../constants/PostConstants';
import PostListConstants  from '../constants/PostListConstants';
import RouteConstants     from '../constants/RouteConstants';
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
        posts: [],
        parsedPostNum: 0,
        totalPostNum: 0
      };
    });
    this.postList['new'] = {
      name: 'new',
      posts: [PostListConfig.postContainer],
      parsedPostNum: 0,
      totalPostNum: 0
    };
    this.postList['top'] = {
      name: 'top',
      posts: [PostListConfig.postContainer]
    };
  }

  getListContainer(item) {
    return this.postList[item];
  }

  getPostList(item) {
    return this.postList[item].posts;
  }

  loadMorePosts(category, amount) {
    if (category in PostListConfig.categoryMap) {
      if (this.postList[category].parsedPostNum < this.postList[category].totalPostNum) {
        this.client.posts(TumblrConfig.blogName, {
          offset: this.postList[category].parsedPostNum,
          tag: PostListConfig.categoryMap[category]
        }, this.loadMorePostsCategory.bind(this));
      }
    }
    else if (category == 'new') {
      if (this.postList['new'].parsedPostNum < this.postList['new'].totalPostNum) {
        this.client.posts(TumblrConfig.blogName, {
          offset: this.postList[category].parsedPostNum,
          limit: amount,
          type: 'text'
        }, this.loadMorePostsNew.bind(this));
      }
    }
  }

  loadMorePostsCategory(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = this.parsePostsNew(data);
      if (updatedList.length > 0) {
        this.postList[pdatedList[0].category].parsedPostNum += data.posts.length;
        this.postList[pdatedList[0].category].totalPostNum = data.total_posts; // eslint-disable-line
        updatedList.forEach((post) => {
          this.postList[pdatedList[0].category].posts.push(post);
        });
        this.emitChange('category');
        //console.log('postlist new load more with '+updatedList.length+' posts');
      };
    }
  }

  loadMorePostsNew(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = this.parsePostsNew(data);
      if (updatedList.length > 0) {
        this.postList['new'].parsedPostNum += data.posts.length;
        this.postList['new'].totalPostNum = data.total_posts; // eslint-disable-line
        updatedList.forEach((post) => {
          this.postList['new'].posts.push(post);
        });
        this.emitChange('new');
        //console.log('postlist new load more with '+updatedList.length+' posts');
      };
    }
  }

  onReceviceUpdatePostList(category, amount) {
    if (category in PostListConfig.categoryMap) {
      this.postList[category].totalPostNum = 0;
      this.client.posts(TumblrConfig.blogName, {tag: PostListConfig.categoryMap[category]}, this.updateListCategory.bind(this));
    }
    else if (category == 'new') {
      this.postList['new'].totalPostNum = 0;
      this.client.posts(TumblrConfig.blogName, {limit: amount, type: 'text'}, this.updateListNew.bind(this));
    }
    else if (category == 'top') {
      this.client.posts(TumblrConfig.blogName, {tag: PostListConfig.tagMap['top']}, this.updateListTop.bind(this));
    }
  }

  updateListTop(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = this.parsePostsTop(data);
      if (updatedList.length > 0) {
        this.postList['top'].posts = updatedList;
        this.emitChange('top');
        //console.log('postlist top updated with '+updatedList.length+' posts');
      };
    }
  }

  updateListNew(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = this.parsePostsNew(data);
      if (updatedList.length > 0) {
        this.postList['new'].parsedPostNum = data.posts.length;
        this.postList['new'].totalPostNum = data.total_posts; // eslint-disable-line
        this.postList['new'].posts = updatedList;
        this.emitChange('new');
        //console.log('postlist new updated with '+updatedList.length+' posts');
      };
    }
  }

  updateListCategory(err, data) {
    if (err) {
      console.log(err.stack);
    }
    else {
      let updatedList = this.parsePostsCategory(data);
      if (updatedList.length > 0) {
        this.postList[updatedList[0].category].parsedPostNum = data.posts.length;
        this.postList[updatedList[0].category].totalPostNum = data.total_posts; // eslint-disable-line
        this.postList[updatedList[0].category].posts = updatedList;
        this.emitChange('category');
        //console.log('postlist '+updatedList[0].category+' updated with '+updatedList.length+' posts');
      };
    }
  }

  parsePostsTop(data) {
    let updatedList = [];
    data.posts.forEach((post) => {
      let result = this.parsePostData(post);
      /*if (result.valid == true) {
        updatedList.push(result);
      }*/
      updatedList.push(result);
    });
    return updatedList;
  }

  parsePostsNew(data) {
    let updatedList = [];
    data.posts.forEach((post) => {
      let result = this.parsePostData(post);
      if (result.valid == true) {
        updatedList.push(result);
      }
    });
    return updatedList;
  }

  parsePostsCategory(data) {
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
    case RouteConstants.ROUTE_POST_LIST_PAGE:
      postListStore.onReceviceUpdatePostList(action.category, action.amount);
      break;
    default:
      break;
  }
});

export default postListStore;
