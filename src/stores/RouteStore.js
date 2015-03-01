"use strict";

import AppDispatcher  from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import RouteConstants from '../constants/RouteConstants';

class RouteStore extends EventEmitter {

  emitChange() {
    this.emit(RouteConstants.ROUTE_EVENT);
  }

  addChangeListener(listener) {
    this.on(RouteConstants.ROUTE_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(RouteConstants.ROUTE_EVENT, listener);
  }
}

var routeStore = new RouteStore();

AppDispatcher.register((action) => {

  switch(action.actionType) {
    case RouteConstants.ROUTE_UPDATE_PATH:
      break;
    default:
      break;
  }
});

export default routeStore;
