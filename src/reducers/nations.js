
import {
  REQUEST_NATION,
  RECEIVE_NATION,
  UPDATE_NATION,
  SHOW_NATION,
  HIDE_NATION
} from '../actions/NationAction';

const defaultNation = {
  'iso': '',
  'country': '',
  'introduction': '',
  'symbol': '',
  'currency': '',
  'language': '',
  'flag': '',
  'emblem': '',
  'headOfState': '',
  'politics': '',
  'atmosphere': '',
  'geography': '',
  'capital': '',
  'population': '',
  'faith': [],
  'economy': []
};

function updateNation(state, action) {
  let currentNation = null;
  state.nations.forEach((nation) => {
    if (nation.iso === action.nation) {
      currentNation = nation;
    }
  });

  if (currentNation === null) {
    currentNation = defaultNation;
    currentNation.iso = action.nation;
    currentNation.country = action.nation;
  }
  return Object.assign({}, state, {
    currentNation
  });
}

export default (state = {
  nations: [],
  currentNation: defaultNation,
  isFetching: false,
  isShow: false
}, action) => {
  switch (action.type) {
    case REQUEST_NATION:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_NATION:
      return Object.assign({}, state, {
        isFetching: false,
        nations: action.nations
      });
    case UPDATE_NATION:
      return updateNation(state, action);
    case SHOW_NATION:
      return Object.assign({}, state, {
        isShow: true
      });
    case HIDE_NATION:
      return Object.assign({}, state, {
        isShow: false
      });
    default:
      return state;
  }
};
