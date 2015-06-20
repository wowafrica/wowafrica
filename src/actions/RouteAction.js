'use strict';

import AppDispatcher  from '../dispatcher/AppDispatcher';
import RouteConstants from '../constants/RouteConstants';

class RouteActions {

  updatePath(pathName) {
    AppDispatcher.dispatch({
      actionType: RouteConstants.ROUTE_UPDATE_PATH,
      pathName
    });

    switch (pathName) {
      case '/about_authors':
        AppDispatcher.dispatch({
          actionType: RouteConstants.ROUTE_AUTH_PAGE
        });
        break;
      case '/view_africa_nations':
        AppDispatcher.dispatch({
          actionType: RouteConstants.ROUTE_MAP_PAGE
        });
        break;
      default:
        break;
    }
  }
}

export default new RouteActions();
