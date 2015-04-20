'use strict';

import {EventEmitter} from 'events';
import Tumblr         from 'tumblr.js';
import RouteConstants from '../constants/RouteConstants';

class AuthorsStore extends EventEmitter {

  constructor() {
    super();
    this.authors = [];
    this.client = Tumblr.createClient({
      consumer_key: 'M5o8MnMmq8jAwmmj82HhkyPNkiI6mq9VccTZzYZZLZPgfl08Hi' // eslint-disable-line
    });
  }

  getAll() {
    return this.authors;
  }

  onReceviceUpdateAuthors() {
    this.loadAuthorData();
  }

  loadAuthorData() {
    this.client.posts('exploreafrica-tw.tumblr.com', {tag: 'exploreafrica-tw-author', filter: 'text'}, (err, data) => {
      if (err) {
        console.log(err.stack);
      }

      let tmpAuthors = [];
      data.posts.map(function(post) {
        let contents = post.caption.split('\n\n');
        let targetUrl = '';
        for ( let i = 0; i < post.photos[0].alt_sizes.length; i++ ) {
          if ( post.photos[0].alt_sizes[i].width < 512 ) {
            targetUrl = post.photos[0].alt_sizes[i].url;
            break;
          }
        }

        let newAuthor = {
          id: post.id,
          name: contents[0],
          from: contents[1],
          description: contents[2],
          photoUrl: targetUrl
        };

        tmpAuthors[tmpAuthors.length] = newAuthor;
      });
      this.authors = tmpAuthors;
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
