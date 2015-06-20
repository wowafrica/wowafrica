'use strict';

import AppDispatcher   from '../dispatcher/AppDispatcher';
import NationConstants from '../constants/NationConstants';

class NationActions {

  updateNation(nationName) {
    AppDispatcher.dispatch({
      actionType: NationConstants.NATION_UPDATE,
      nationName
    });
  }

  loadNationData() {
    AppDispatcher.dispatch({
      actionType: NationConstants.NATION_LOAD_DATA
    });
  }
}

export default new NationActions();
