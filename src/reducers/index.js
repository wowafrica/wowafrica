
import {combineReducers} from 'redux';

import activities from './activities';
import authors    from './authors';

export default combineReducers({
  activities,
  authors
});
