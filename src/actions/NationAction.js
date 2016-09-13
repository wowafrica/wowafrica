import AppDispatcher   from '../dispatcher/AppDispatcher';
import NationConstants from '../constants/NationConstants';

import request   from 'superagent';

class NationAction {

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

export const REQUEST_NATION = 'REQUEST_NATION';
function requestNation() {
  return {
    type: REQUEST_NATION
  };
}

export const RECEIVE_NATION = 'RECEIVE_NATION';
function receiveNation(data) {
  return {
    type: RECEIVE_NATION,
    nations: data
  };
}

export const UPDATE_NATION = 'UPDATE_NATION';
export function updateNation(name) {
  return {
    type: UPDATE_NATION,
    nation: name
  };
}

export const SHOW_NATION = 'SHOW_NATION';
export function showNation() {
  return {
    type: SHOW_NATION
  };
}

export const HIDE_NATION = 'HIDE_NATION';
export function hideNation() {
  return {
    type: HIDE_NATION
  };
}

function _fetchNation() {
  return new Promise((resolve, reject) => {
    request.get(NationConstants.NATION_URL).end((err, res) => {
      if (err) {
        console.log('Cannot get Nation json');
        reject(err);
      } else {
        // this.nations = res.body;
        resolve(res.body);
      }
    });
  });
}

export function fetchNation() {
  return (dispatch) => {
    dispatch(requestNation());

    return _fetchNation().then(data => {
      dispatch(receiveNation(data));
    });
  };
}

export default new NationAction();
