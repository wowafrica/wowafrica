import parseActivities from '../utility/tumblrActivity';
import * as ActivityAction from '../actions/ActivityAction';

export default (state = {
  isFetching: false,
  showOldItems: false,
  showOtherHost: false,
  items: [],
  oldItems: []
}, action) => {
  switch (action.type) {
    case ActivityAction.REQUEST_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ActivityAction.RECEIVE_ACTIVITIES:
      let {activities, oldActivities} = parseActivities(action.rawApi);
      return Object.assign({}, state, {
        isFetching: false,
        items: activities,
        oldItems: oldActivities
      });
    case ActivityAction.SHOW_OLD_ACTIVITIES:
      return Object.assign({}, state, {
        showOldItems: true
      });
    case ActivityAction.SHOW_NEW_ACTIVITIES:
      return Object.assign({}, state, {
        showOldItems: false
      });
    case ActivityAction.SHOW_OTHER_HOST:
      return Object.assign({}, state, {
        showOtherHost: true
      });
    case ActivityAction.SHOW_WA_HOST:
      return Object.assign({}, state, {
        showOtherHost: false
      });
    default:
      return state;
  }
};
