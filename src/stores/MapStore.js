'use strict';

import {EventEmitter} from 'events';
import request        from 'superagent';
import MapConstants   from '../constants/MapConstants';
import RouteConstants  from '../constants/RouteConstants';
import AppDispatcher   from '../dispatcher/AppDispatcher';

class MapStore extends EventEmitter {

  constructor() {
    super();
    this.geoJson = {features: []};
  }

  getAll() {
    return this.geoJson;
  }

  onReceviceUpdateMaps() {
    this.loadMapData();
  }

  loadMapData() {
    request.get(MapConstants.MAP_URL).end((err, res) => {
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
    this.emit(MapConstants.MAP_EVENT);
  }

  addChangeListener(listener) {
    this.on(MapConstants.MAP_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(MapConstants.MAP_EVENT, listener);
  }
}

let mapStore = new MapStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case RouteConstants.ROUTE_MAP_PAGE:
      mapStore.onReceviceUpdateMaps();
      break;
    default:
      break;
  }
});


export default mapStore;
