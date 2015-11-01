import React        from 'react/addons';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import Footer       from '../components/Footer';
import MapStore     from '../stores/MapStore';
import NationAction from '../actions/NationAction';
import d3           from 'd3';
import Semantify    from 'react-semantify';

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
    let {Modal, Content, Icon} = Semantify;
    let {features} = this.state.map;
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <div className="container-map" id="africa-map">
            {this._drawMap(features)}
          </div>
        </div>
        <div id="footer-divider" style={{height: '50px'}} />
        <Footer/>
        <div id="page-bottom"/>
      </div>
    );
  },

  _onChange() {
    this.setState({
      map: MapStore.getAll()
    });
  },

  _onClick(e) {
    let {currentTarget} = e;
    console.log($(currentTarget).attr('data-nation'));
    NationAction.updateNation($(currentTarget).attr('data-nation'));
  },

  _drawMap(data) {
    let width = 700;
    let height = 600;

    let projection = d3.geo.equirectangular()
      .scale(380)
      .translate([width / 2, height / 2])
      .rotate([-20, 0]);

    let path = d3.geo.path()
      .projection(projection);

    return (
      <svg ref="svg" width={width} height={height}>
      {
        data.map((d) => {
          return (
            <path className="land"
                  d={path(d)}
                  data-nation={d.properties.ISO_A3}
                  onClick={this._onClick}>
            </path>
          );
        })
      }
      </svg>
    );
  }
});
