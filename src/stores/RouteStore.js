"use strict";

import AppDispatcher  from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import RouteConstants from '../constants/RouteConstants';
import RouteHandler   from 'routr';
import RouteConfig    from './RouteConfig';

class RouteStore extends EventEmitter {

  constructor(routeConfig) {
    this.routeConfig = routeConfig;
    this.routeHandler = new RouteHandler(routeConfig);
    // this will get root page for default
    // route.name: 'index'
    // route.url: '/'
    // route.config: {
    //   showName: '首頁',
    //   path: '/',
    //   method: 'get',
    //   page: require('../pages/IndexPage'),
    //   subPage: ['view_afica'] }
    this.currentRoute = this.routeHandler.getRoute('/');
  }

  getAll() {
    return this.routeConfig;
  }

  getSubPageById(RouteId) {
    return this.routeConfig[RouteId].subPage;
  }

  getNameById(RouteId) {
    return this.routeConfig[RouteId].name;
  }

  getCurrentRoute() {
    return this.currentRoute;
  }

  onReceviceUpdatePath(pathName) {
    this.currentRoute = this.routeHandler.getRoute(pathName);
    this.emitChange()
  }

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

var routeStore = new RouteStore(RouteConfig);

AppDispatcher.register((action) => {

  switch(action.actionType) {
    case RouteConstants.ROUTE_UPDATE_PATH:
      routeStore.onReceviceUpdatePath(action.pathName);
      break;
    default:
      break;
  }
});

export default routeStore;
