'use strict';

import {EventEmitter} from 'events';
import Tumblr         from 'tumblr.js';
import RouteConstants from '../constants/RouteConstants';

class AuthorsStore extends EventEmitter {

  constructor() {
    super();
    this.posts = [];
    this.client = Tumblr.createClient({
      consumer_key: 'M5o8MnMmq8jAwmmj82HhkyPNkiI6mq9VccTZzYZZLZPgfl08Hi' // eslint-disable-line
    });
  }

  getAll() {
    return this.posts;
  }

  onReceviceUpdateAuthors() {
    this.loadAuthorData();
  }

  loadAuthorData() {
    this.client.posts('exploreafrica-tw.tumblr.com', {tag: 'exploreafrica-tw-author', filter: 'text'}, (err, data) => {
      if (err) {
        console.log(err.stack);
      }
      this.posts = data.posts;
      this.emitChange();
    });
  }

  emitChange() {
    this.emit(RouteConstants.AUTHORS_EVENT);
  }

  addChangeListener(listener) {
    this.on(RouteConstants.AUTHORS_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(RouteConstants.AUTHORS_EVENT, listener);
  }
}

let authorsStore = new AuthorsStore();

export default authorsStore;
