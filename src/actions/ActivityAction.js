import Tumblr                 from 'tumblr.js';
import {TumblrActivityConfig} from '../configures/TumblrConfig';

export const REQUEST_ACTIVITIES = 'REQUEST_ACTIVITIES';
function requestActivities() {
  return {
    type: REQUEST_ACTIVITIES
  };
};

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
function receiveActivities(data) {
  return {
    type: RECEIVE_ACTIVITIES,
    rawData: data
  };
};

function fetchTumblr() {
  return new Promise((resolve, error) => {
    client.posts(TumblrActivityConfig.blogName, {}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function fetchAvtivities() {
  return (dispatch) => {
    dispatch(requestActivities());

    fetchTumblr().then(data => {
      dispatch(receiveActivities(data));
    });
  };
}

let client = Tumblr.createClient({
  consumer_key: TumblrActivityConfig.consumerKey // eslint-disable-line
});
