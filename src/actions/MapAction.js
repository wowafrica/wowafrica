
import request   from 'superagent';
import MapConfig from '../configures/MapConfig';

export const REQUEST_MAP = 'REQUEST_MAP';
function requestMap() {
  return {
    type: REQUEST_MAP
  };
}

export const RECEIVE_MAP = 'RECEIVE_MAP';
function receiveMap(data) {
  return {
    type: RECEIVE_MAP,
    map: data
  };
}

function fetchContry() {
  return new Promise((resolve, reject) => {
    request.get(MapConfig.contryUrl).end((err, res) => {
      if (err) {
        console.log('Cannot get Africa geoJson');
        reject(err);
      } else {
        // this.geoJson.features = res.body.features;
        resolve(res.body.features);
      }
    });
  });
}

function fetchArea() {
  return new Promise((resolve, reject) => {
    request.get(MapConfig.areaUrl).end((err, res) => {
      if (err) {
        console.log('Cannot Get Africa area');
        reject(err);
      } else {
        // this.geoJson.area = res.body;
        resolve(res.body);
      }
    });
  });
}

export function fetchMap() {
  return (dispatch) => {
    dispatch(requestMap());

    return Promise.all([
      fetchContry(),
      fetchArea()
    ]).then(
      result => dispatch(receiveMap({
        features: result[0],
        area: result[1]
      }))
    );
  };
}
