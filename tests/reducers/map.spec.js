
import * as MapAction from '../../src/actions/MapAction';
import reducer        from '../../src/reducers/map';

let fakeMap = {
  features:[
    {properties: {'ISO_A3': 'SOM', 'NAME':'Somalia'}},
    {properties: {'ISO_A3': 'CAF', 'NAME':'Central African Rep.'}}
  ],
  area: {
    CentralAfrica: {},
    EastAfrica: {},
    NorthAfrica: {},
    SouthernAfrica: {},
    WestAfrica: {}
  }
};

describe('MapReducer', () => {
  it('should get map data from json file', () => {

    let action = {
      type: MapAction.RECEIVE_MAP,
      map: fakeMap
    };

    let state = reducer(undefined, action);

    let testState = {
      map: fakeMap,
      isFetching: false
    };

    expect(state).toEqual(testState);
  });

  it('should be isFetching when action type is REQUEST_MAP', () => {

    let action = {
      type: MapAction.REQUEST_MAP
    };

    let state = reducer(undefined, action);

    let testState = {
      map: {
        features: [],
        area: {
          CentralAfrica: {},
          EastAfrica: {},
          NorthAfrica: {},
          SouthernAfrica: {},
          WestAfrica: {}
        }
      },
      isFetching: true
    };

    expect(state).toEqual(testState);
  });
});
