
import AuthorsData     from '../AuthorsData';
import AuthorsTestData from '../AuthorsTestData';

import * as AuthorAction from '../../src/actions/AuthorAction';
import reducer           from '../../src/reducers/authors';

describe('AuthorsReducer', () => {
  it('should parse Authors data from tumblr into authors', () => {

    let action = {
      type: AuthorAction.RECEIVE_AUTHOR,
      authors: AuthorsData
    };

    let state = reducer(undefined, action);

    let testState = {
      authors: AuthorsTestData,
      isFetching: false
    };

    expect(state).toEqual(testState);
  });

  it('should be isFetching when action type is REQUEST_AUTHOR', () => {

    let action = {
      type: AuthorAction.REQUEST_AUTHOR
    };

    let state = reducer(undefined, action);

    let testState = {
      authors: [],
      isFetching: true
    };

    expect(state).toEqual(testState);
  });
});
