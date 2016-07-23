import parseActivities from '../utility/tumblrActivity';
import * as ActivityAction from '../actions/ActivityAction';

export default (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case ActivityAction.REQUEST_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActivityAction.RECEIVE_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: parseActivities(action.rawApi)
      });
    default:
      return state;
  }
};
