'use strict';

import AppDispatcher  from '../dispatcher/AppDispatcher';
import RouteConstants from '../constants/RouteConstants';

class NationActions {

  updateNation(nationName) {
    AppDispatcher.dispatch({
      actionType: RouteConstants.NATION_UPDATE,
      nationName
    });
  }

  loadNationData() {
    AppDispatcher.dispatch({
      actionType: RouteConstants.NATION_LOAD_DATA
    });
  }
}

export default new NationActions();
