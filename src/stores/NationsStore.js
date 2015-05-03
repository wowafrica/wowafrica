'use strict';

import {EventEmitter} from 'events';
import Tumblr         from 'tumblr.js';
import TumblrConfig   from './TumblrConfig';
import RouteConstants from '../constants/RouteConstants';

class AuthorsStore extends EventEmitter {

  constructor() {
    super();
    this.nations = [];
    this.client = Tumblr.createClient({
      consumer_key: TumblrConfig.consumerKey // eslint-disable-line
    });
  }

  getAll() {
    return this.nations;
  }

  getNationByName(nationName) {
    return this.nations;
  }

  getCurrentNation() {
    return this.nations[0];
  }

  onReceviceUpdateNations() {
    this.loadNationData();
  }

  loadNationData() {
    let {tag} = TumblrConfig.nation;
    this.client.posts(TumblrConfig.blogName, {tag: tag, filter: 'text'}, (err, data) => {
      if (err) {
        console.log(err.stack);
      }
      this.nations = data.posts;
      this.emitChange();
    });
  }

  emitChange() {
    this.emit(RouteConstants.NATIONS_EVENT);
  }

  addChangeListener(listener) {
    this.on(RouteConstants.NATIONS_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(RouteConstants.NATIONS_EVENT, listener);
  }
}

let authorsStore = new AuthorsStore();

export default authorsStore;
