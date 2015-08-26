import {EventEmitter} from 'events';
import RouteHandler   from 'routr';
import AppDispatcher  from '../dispatcher/AppDispatcher';
import RouteConstants from '../constants/RouteConstants';
import RouteConfig    from '../configures/RouteConfig';
import MenuStore      from './MenuStore';

class RouteStore extends EventEmitter {

  constructor(routeConfig) {
    super();
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
    this.currentHash = '';
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

  getAll() {
    return this.routeConfig;
  }

  onReceiveUpdatePath(pathName, hash) {
    this.currentRoute = this.routeHandler.getRoute(pathName);
    this.currentHash = (typeof hash !== 'undefined') ? hash.substring(1) : '';
    console.log('currentRoute');
    console.log(this.currentRoute.params);
    this.emitChange();
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

let routeStore = new RouteStore(RouteConfig);

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case RouteConstants.ROUTE_UPDATE_PATH:
      routeStore.onReceiveUpdatePath(action.pathName, action.hash);
      MenuStore.onReceiveUpdatePath(action.pathName);
      break;
    default:
      break;
  }
});

export default routeStore;
