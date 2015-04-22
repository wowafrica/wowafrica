'use strict';

import React      from 'react/addons';
import IndexMenu  from '../components/IndexMenu';
import MapStore   from '../stores/MapStore';
import d3         from 'd3';

export default React.createClass({

  getInitialState() {
    return ({map: MapStore.getAll()});
  },

  componentDidMount() {
    MapStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    MapStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        <div className="container-header">
          <IndexMenu/>
        </div>
        <div className="container-content">
          <div className="container-map" id="africa-map">
          </div>
        </div>
      </div>
    );
  },

  _onChange() {
    this.setState({
      map: MapStore.getAll()
    });
    this._drawMap(MapStore.getAll());
  },

  _drawMap(mapGeoJson) {
    console.log('DrwaMap');
    console.log(mapGeoJson);
    let width = 700;
    let height = 600;

    let projection = d3.geo.equirectangular()
      .scale(380)
      .translate([width / 2, height / 2])
      .rotate([-20, 0]);

    let path = d3.geo.path()
      .projection(projection);

    let graticule = d3.geo.graticule();

    let svg = d3.select('#africa-map').append('svg')
      .attr('width', width)
      .attr('height', height);

    svg.append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path);

    svg.selectAll('path')
      .data(mapGeoJson.features)
      .enter()
      .append('path')
      .attr('class', 'land')
      .attr('d', path);
  }
});
