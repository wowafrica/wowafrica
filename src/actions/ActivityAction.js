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

export function fetchAvtivities() {
  return (dispatch) => {
    dispatch(requestActivities());
    client.posts(TumblrActivityConfig.blogName, {
    }, (err, data) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        dispatch(receiveActivities(data));
      }
    });
  };
}

let client = Tumblr.createClient({
  consumer_key: TumblrActivityConfig.consumerKey // eslint-disable-line
});
