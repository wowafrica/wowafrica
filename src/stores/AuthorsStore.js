'use strict';

import {EventEmitter}  from 'events';
import Tumblr          from 'tumblr.js';
import TumblrConfig    from '../configures/TumblrConfig';
import AuthorConstants from '../constants/AuthorConstants';

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
    let {tag, picWidth} = TumblrConfig.author;

    this.client.posts(TumblrConfig.blogName, {tag: tag, filter: 'text'}, (err, data) => {
      if (err) {
        console.log(err.stack);
      }

      let tmpAuthors = [];
      data.posts.map((post) => {
        let contents = post.caption.split('\n\n');
        let targetUrl = '';
        for ( let i = 0; i < post.photos[0].alt_sizes.length; i++ ) {
          if ( post.photos[0].alt_sizes[i].width < picWidth ) {
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

export default authorsStore;
