
import PostData     from '../PostData';
import PostTestData from '../PostTestData';

import * as PostAction from '../../src/actions/PostAction';
import reducer           from '../../src/reducers/post';

describe('PostReducer', () => {
  it('should parse post data from tumblr into post', () => {

    let action = {
      type: PostAction.RECEIVE_POST,
      post: PostData
    };

    let state = reducer(undefined, action);

    let testState = {
      post: PostTestData,
      isFetching: false
    };

    expect(state).toEqual(testState);
  });

  it('should be isFetching when action type is REQUEST_POST', () => {

    let action = {
      type: PostAction.REQUEST_POST
    };

    let state = reducer(undefined, action);

    let testState = {
      post: {},
      isFetching: true
    };

    expect(state).toEqual(testState);
  });
});
