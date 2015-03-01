"use strict";

import AppDispatcher  from '../dispatcher/AppDispatcher';
import RouteConstants from '../constants/RouteConstants';

class RouteActions {

  updatePath(pathName) {
    AppDispatcher.dispatcher({
      actionType: RouteConstants.ROUTE_UPDATE_PATH,
      pathName
    });
  }
};

export default new RouteActions();
