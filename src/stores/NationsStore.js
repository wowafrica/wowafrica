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
    this.defaultNation = {
      'iso': '',
      'country': '',
      'introduction': '',
      'symbol': '',
      'currency': '',
      'language': '',
      'flag': '',
      'emblem': '',
      'headOfState': '',
      'politics': '',
      'atmosphere': '',
      'geography': '',
      'capital': '',
      'population': '',
      'faith': [],
      'economy': []
    };
    this.currentNation = this.defaultNation;
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
    this.currentNation = null;
    this.nations.forEach((nation) => {
      if (nation.iso === nationName) {
        this.currentNation = nation;
      }
    });
    if (this.currentNation === null) {
      this.currentNation = this.defaultNation;
      this.currentNation.iso = nationName;
      this.currentNation.country = nationName;
    }
    this.emitShow();
  }

  onReceviceLoadNationData() {
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
