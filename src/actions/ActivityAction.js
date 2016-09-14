
import Tumblr                 from 'tumblr.js';
import {TumblrActivityConfig} from '../configures/TumblrConfig';

let client = Tumblr.createClient({
  consumer_key: TumblrActivityConfig.consumerKey // eslint-disable-line
});

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
    rawApi: data
  };
};

export const SHOW_OLD_ACTIVITIES = 'SHOW_OLD_ACTIVITIES';
export function showOldActivities(data) {
  return {
    type: SHOW_OLD_ACTIVITIES
  };
};

export const SHOW_NEW_ACTIVITIES = 'SHOW_NEW_ACTIVITIES';
export function showNewActivities(data) {
  return {
    type: SHOW_NEW_ACTIVITIES
  };
};

export const SHOW_OTHER_HOST = 'SHOW_OTHER_HOST';
export function showOtherHost(data) {
  return {
    type: SHOW_OTHER_HOST
  };
};

export const SHOW_WA_HOST = 'SHOW_WA_HOST';
export function showWaHost(data) {
  return {
    type: SHOW_WA_HOST
  };
};

function fetchTumblr() {
  return new Promise((resolve, reject) => {
    client.posts(TumblrActivityConfig.blogName, {}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export function fetchActivities() {
  return (dispatch) => {
    dispatch(requestActivities());

    return fetchTumblr().then(data => {
      dispatch(receiveActivities(data));
    });
  };
}

export const SHOW_ACTIVITY = 'SHOW_ACTIVITY';
export function showActivity(activity) {
  return {
    type: SHOW_ACTIVITY,
    activity
  };
};
