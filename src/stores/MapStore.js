import {EventEmitter} from 'events';
import request        from 'superagent';
import MapConstants   from '../constants/MapConstants';
import MapConfig      from '../configures/MapConfig';
import RouteConstants from '../constants/RouteConstants';
import AppDispatcher  from '../dispatcher/AppDispatcher';

class MapStore extends EventEmitter {

  constructor() {
    super();
    this.geoJson = {
      features: [],
      area: {
        CentralAfrica: {},
        EastAfrica: {},
        NorthAfrica: {},
        SouthernAfrica: {},
        WestAfrica: {}
      }
    };
  }

  getAll() {
    return this.geoJson;
  }

  getNationMapByISO(nationISO) {
    let nationMap = {};
    this.geoJson.features.forEach((nation) => {
      if (nation.properties.ISO_A3 === nationISO) {
        nationMap = nation;
      }
    });
    return nationMap;
  }

  onReceiveUpdateMaps() {
    this.loadMapData();
  }

  loadMapData() {
    request.get(MapConfig.contryUrl).end((err, res) => {
      if (err) {
        console.log('Cannot get Africa geoJson');
      } else {
        console.log('Get!!!');
        this.geoJson.features = res.body.features;
      }
      request.get(MapConfig.areaUrl).end((err, res) => {
        if (err) {
          console.log('Cannot Get Africa area');
        } else {
          console.log('Get Area!!');
          this.geoJson.area = res.body;
        }
        this.emitChange();
      });
    });
  }

  emitChange() {
    this.emit(MapConstants.MAP_EVENT);
  }

  addChangeListener(listener) {
    this.on(MapConstants.MAP_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(MapConstants.MAP_EVENT, listener);
  }
}

let mapStore = new MapStore();

AppDispatcher.register((action) => {

  switch (action.actionType) {
    case RouteConstants.ROUTE_MAP_PAGE:
      mapStore.onReceiveUpdateMaps();
      break;
    default:
      break;
  }
});


export default mapStore;
