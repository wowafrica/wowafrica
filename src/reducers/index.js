
import {combineReducers} from 'redux';

import activities from './activities';
import authors    from './authors';
import post       from './post';
import map        from './map';
import nations    from './nations';

export default combineReducers({
  activities,
  authors,
  post,
  map,
  nations
});
