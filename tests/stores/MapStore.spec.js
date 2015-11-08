let fakeMap = {
  'features':[
    {'properties': {'ISO_A3': 'SOM', 'NAME':'Somalia'}},
    {'properties': {'ISO_A3': 'CAF', 'NAME':'Central African Rep.'}}
  ],
  area: {
    CentralAfrica: {},
    EastAfrica: {},
    NorthAfrica: {},
    SouthernAfrica: {},
    WestAfrica: {}
  }
};

describe('MapStore', () => {
  it('should have initialize format', () => {
    let mapStore = require('../../src/stores/MapStore');

    expect(mapStore.geoJson).toEqual({
      features: [],
      area: {
        CentralAfrica: {},
        EastAfrica: {},
        NorthAfrica: {},
        SouthernAfrica: {},
        WestAfrica: {}
      }
    });
  });

  it('should get Nation map infor by ISO', () => {
    let mapStore = require('../../src/stores/MapStore');

    mapStore.geoJson = fakeMap;
    let testNation = mapStore.getNationMapByISO('SOM');

    expect(testNation).toEqual({'properties': {'ISO_A3': 'SOM', 'NAME':'Somalia'}});
  });
});
