import AppDispatcher   from '../dispatcher/AppDispatcher';
import AuthorConstants from '../constants/AuthorConstants';

import Tumblr       from 'tumblr.js';
import TumblrConfig from '../configures/TumblrConfig';

let client = Tumblr.createClient({
  consumer_key: TumblrConfig.consumerKey // eslint-disable-line
});

class AuthorAction {

  loadAuthorData() {
    AppDispatcher.dispatch({
      actionType: AuthorConstants.AUTHOR_LOAD_DATA
    });
  }
}

export const REQUEST_AUTHOR = 'REQUEST_AUTHOR';
function requestAuthor() {
  return {
    type: REQUEST_AUTHOR
  };
};

export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR';
function receiveAuthor(data) {
  return {
    type: RECEIVE_AUTHOR,
    authors: data
  };
};

function fetchTumblr() {
  return new Promise((resolve, reject) => {
    let {author: {tag}, blogName} = TumblrConfig;
    client.posts(blogName, {tag, filter: 'text'}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function fetchAuthor() {
  return (dispatch) => {
    dispatch(requestAuthor());

    return fetchTumblr().then(data => {
      dispatch(receiveAuthor(data));
    });
  };
}

export default new AuthorAction();
