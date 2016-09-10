
import {combineReducers} from 'redux';

import activities from './activities';
import authors    from './authors';
import post       from './post';
import map        from './map';

export default combineReducers({
  activities,
  authors,
  post,
  map
});
