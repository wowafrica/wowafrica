import {EventEmitter}  from 'events';
import Tumblr          from 'tumblr.js';
import TumblrConfig    from '../configures/TumblrConfig';
import AuthorConstants from '../constants/AuthorConstants';
import RouteConstants  from '../constants/RouteConstants';
import AppDispatcher   from '../dispatcher/AppDispatcher';

class AuthorsStore extends EventEmitter {

  constructor() {
    super();
    this.authors = [];
    this.client = Tumblr.createClient({
      consumer_key: TumblrConfig.consumerKey // eslint-disable-line
    });
  }

  getAll() {
    return this.authors;
  }

  onReceviceUpdateAuthors() {
    this.loadAuthorData();
  }

  loadAuthorData() {
    let {tag} = TumblrConfig.author;
    this.client.posts(TumblrConfig.blogName, {tag, filter: 'text'}, this.parseAuthorData.bind(this));
  }

  parseAuthorData(err, data) {
    if (err) {
      console.log(err.stack);
    }
    let {picWidth} = TumblrConfig.author;

    this.authors = data.posts.map((post) => {
      let contents = post.caption.split('\n\n');
      let target = post.photos[0].alt_sizes.filter(photo => photo.width < picWidth);

      return {
        id: post.id,
        name: contents[0],
        from: contents[1],
        description: contents[2],
        photoUrl: target.length ? target[0].url : ''
      };
    });
    this.emitChange();
  }

  emitChange() {
    this.emit(AuthorConstants.AUTHORS_EVENT);
  }

  addChangeListener(listener) {
    this.on(AuthorConstants.AUTHORS_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(AuthorConstants.AUTHORS_EVENT, listener);
  }
}

let authorsStore = new AuthorsStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case RouteConstants.ROUTE_AUTH_PAGE:
      authorsStore.onReceviceUpdateAuthors();
      break;
    default:
      break;
  }
});

export default authorsStore;
