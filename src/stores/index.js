import {createStore, applyMiddleware} from 'redux';
import thunk                          from 'redux-thunk';

import reducers from '../reducers';

export default function configureStore(preState) {
  return createStore(reducers, preState, applyMiddleware(thunk));
}
