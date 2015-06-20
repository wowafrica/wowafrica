'use strict';

import {EventEmitter}  from 'events';
import Tumblr          from 'tumblr.js';
import request         from 'superagent';
import TumblrConfig    from '../configures/TumblrConfig';
import AppDispatcher   from '../dispatcher/AppDispatcher';
import NationConstants from '../constants/NationConstants';

class NationsStore extends EventEmitter {

  constructor() {
    super();
    this.nations = [];
    this.currentNation = {};
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
    return this.currentNation;
  }

  onReceviceUpdateNations(nationName) {
    this.currentNation = {iso: nationName};
    this.nations.forEach((nation) => {
      if (nation.iso === nationName) {
        this.currentNation = nation;
      }
    });
    this.emitShow();
  }

  onReceviceLoadNationData() {
    // let {tag} = TumblrConfig.nation;
    // this.client.posts(TumblrConfig.blogName, {tag: tag, filter: 'text'}, (err, data) => {
    //   if (err) {
    //     console.log(err.stack);
    //   }
    //   this.nations = data.posts;
    // });
    request.get(NationConstants.NATION_URL).end((err, res) => {
      if (err) {
        console.log('Cannot get Nation json');
      } else {
        console.log('Get!!!');
        this.nations = res.body;
      }
    });
  }

  emitShow() {
    this.emit(NationConstants.NATION_SHOW_EVENT);
  }

  addShowListener(listener) {
    this.on(NationConstants.NATION_SHOW_EVENT, listener);
  }

  removeShowListener(listener) {
    this.removeListener(NationConstants.NATION_SHOW_EVENT, listener);
  }
}

let nationsStore = new NationsStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case NationConstants.NATION_UPDATE:
      nationsStore.onReceviceUpdateNations(action.nationName);
      break;
    case NationConstants.NATION_LOAD_DATA:
      nationsStore.onReceviceLoadNationData();
      break;
    default:
      break;
  }
});

export default nationsStore;
