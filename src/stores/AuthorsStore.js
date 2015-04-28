'use strict';

import {EventEmitter} from 'events';
import Tumblr         from 'tumblr.js';
import TumblrConfig   from './TumblrConfig';
import RouteConstants from '../constants/RouteConstants';

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
    this.client.posts(TumblrConfig.blogName, {tag: TumblrConfig.tagAuthor, filter: 'text'}, (err, data) => {
      if (err) {
        console.log(err.stack);
      }

      let tmpAuthors = [];
      data.posts.map(function(post) {
        let contents = post.caption.split('\n\n');
        let targetUrl = '';
        for ( let i = 0; i < post.photos[0].alt_sizes.length; i++ ) {
          if ( post.photos[0].alt_sizes[i].width < TumblrConfig.picWidthAuthor ) {
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

        tmpAuthors.push(newAuthor);
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
