
import {REQUEST_MAP, RECEIVE_MAP} from '../actions/MapAction';

function isFetching(state = false, action) {
  if (action.type === REQUEST_MAP) {
    return true;
  }

  return state;
}

function map(state = {
  features: [],
  area: {
    CentralAfrica: {},
    EastAfrica: {},
    NorthAfrica: {},
    SouthernAfrica: {},
    WestAfrica: {}
  }
}, action) {
  if (action.type === RECEIVE_MAP) {
    console.log(action.map.area);
    return action.map;
  }

  return state;
}

export default (state = {}, action) => {
  return {
    isFetching: isFetching(state.isFetching, action),
    map: map(state.map, action)
  };
};
