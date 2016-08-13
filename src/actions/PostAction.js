
import Tumblr       from 'tumblr.js';
import TumblrConfig from '../configures/TumblrConfig';

let client = Tumblr.createClient({
  consumer_key: TumblrConfig.consumerKey // eslint-disable-line
});

export const REQUEST_POST = 'REQUEST_POST';
function requestPost() {
  return {
    type: REQUEST_POST
  };
};

export const RECEIVE_POST = 'RECEIVE_POST';
function receivePost(data) {
  return {
    type: RECEIVE_POST,
    post: data
  };
};

function fetchTumblr(id) {
  return new Promise((resolve, reject) => {
    client.posts(TumblrConfig.blogName, {id}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost());

    return fetchTumblr(id).then(data => {
      dispatch(receivePost(data));
    });
  };
}
