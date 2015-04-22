'use strict';

import {EventEmitter} from 'events';
import request        from 'superagent';
import RouteConstants from '../constants/RouteConstants';

class MapStore extends EventEmitter {

  constructor() {
    super();
    this.geoJson = {};
  }

  getAll() {
    return this.geoJson;
  }

  onReceviceUpdateMaps() {
    this.loadMapData();
  }

  loadMapData() {
    request.get('/data/africa.geo.json').end((err, res) => {
      if (err) {
        console.log('Cannot get Africa geoJson');
      } else {
        console.log('Get!!!');
        this.geoJson = res.body;

      }
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

let mapStore = new MapStore();

export default mapStore;
