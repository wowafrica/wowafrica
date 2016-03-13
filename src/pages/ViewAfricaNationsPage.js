import React        from 'react';
import ReactDOM     from 'react-dom';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import Footer       from '../components/Footer';
import MapStore     from '../stores/MapStore';
import NationsStore from '../stores/NationsStore';
import NationAction from '../actions/NationAction';
import d3           from 'd3';

import {
  Modal, Content, Icon, Accordion, List, Image
} from 'react-semantify';

const CONFIG_SCALE = {
  'origin': {
    'scale': 380,
    'rotate': [-20, 0]
  },
  'CentralAfrica': {
    'scale': 1000,
    'rotate': [-20, -5]
  },
  'EastAfrica': {
    'scale': 800,
    'rotate': [-40, 0]
  },
  'NorthAfrica': {
    'scale': 600,
    'rotate': [-13, -20]
  },
  'SouthernAfrica': {
    'scale': 1000,
    'rotate': [-28, 20]
  },
  'WestAfrica': {
    'scale': 780,
    'rotate': [4, -5]
  }
};

export default React.createClass({

  getInitialState() {
    return ({
      map: MapStore.getAll(),
      nations: NationsStore.getAll(),
      type: 'origin'
    });
  },

  componentDidMount() {
    NationsStore.addAreaListener(this._onChange);
    MapStore.addChangeListener(this._onChange);
    $('#category-menu').hide();
  },

  componentWillUnmount() {
    NationsStore.removeAreaListener(this._onChange);
    MapStore.removeChangeListener(this._onChange);
  },

  _onMouseEnter(e) {
    let {currentTarget} = e;
    let iso = $(currentTarget).attr('data-nation');
    if (iso in this.refs) {
      ReactDOM.findDOMNode(this.refs[iso]).style.fill = '#F88D2F';
    }
  },

  _onMouseLeave(e) {
    let {currentTarget} = e;
    let iso = $(currentTarget).attr('data-nation');
    if (iso in this.refs) {
      ReactDOM.findDOMNode(this.refs[iso]).style.fill = '#2E8398';
    }
  },

  renderArea(areaEntry) {
    return (
      <div className="content">
        <List className="animated small link">
        {
          Object.keys(areaEntry).map((key) => {
            let {country, flag} = areaEntry[key];
            if (country) {
              flag = flag === '' ? 'Kenya_flag.png': flag;
              return (
                <div className="item" data-nation={key}
                  onMouseEnter={this._onMouseEnter}
                  onMouseLeave={this._onMouseLeave}>
                  <Image className="avatar" src={`/images/nations/${flag}`} />
                  <div className="content">
                    <a className="header" data-nation={key} onClick={this._onClick}>
                      {country}
                    </a>
                  </div>
                </div>
              );
            }
          })
        }
        </List>
      </div>
    );
  },

  render() {
    let {nations, type} = this.state;
    let {features, area} = this.state.map;
    nations.forEach((nation) => {
      for (let key in area) {
        if (nation.iso in area[key]) {
          area[key][nation.iso] = nation;
        }
      }
    });
    return (
      <div>
        <div className="fixed-top-menu">
          <IndexMenu />
          <CategoryMenu />
        </div>
        <div className="container-content">
          <div className="ui stackable four column grid">
            <div className="three wide column"></div>
            <div className="six wide column">
              {this._drawMap(features, type)}
            </div>
            <div className="five wide column">
              <Accordion className="content-area" init={true}>
                <div className="title" onClick={this._onCentralAfricaClick}>
                  <Icon className="dropdown"/>中非
                </div>
                {this.renderArea(area.CentralAfrica)}
                <div className="title" onClick={this._onEastAfricaClick}>
                  <Icon className="dropdown"/>東非
                </div>
                {this.renderArea(area.EastAfrica)}
                <div className="title" onClick={this._onNorthAfricaClick}>
                  <Icon className="dropdown"/>北非
                </div>
                {this.renderArea(area.NorthAfrica)}
                <div className="title" onClick={this._onSouthernAfricaClick}>
                  <Icon className="dropdown"/>南非
                </div>
                {this.renderArea(area.SouthernAfrica)}
                <div className="title" onClick={this._onWestAfricaClick}>
                  <Icon className="dropdown"/>西非
                </div>
                {this.renderArea(area.WestAfrica)}
              </Accordion>
            </div>
            <div className="two wide column"></div>
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
      map: MapStore.getAll(),
      nations: NationsStore.getAll()
    });
  },

  _onClick(e) {
    let {currentTarget} = e;
    console.log($(currentTarget).attr('data-nation'));
    NationAction.updateNation($(currentTarget).attr('data-nation'));
  },

  _onCentralAfricaClick() {
    let {type} = this.state;
    this.setState({
      type: type === 'CentralAfrica' ? 'origin' : 'CentralAfrica'
    });
  },

  _onEastAfricaClick() {
    let {type} = this.state;
    this.setState({
      type: type === 'EastAfrica' ? 'origin' : 'EastAfrica'
    });
  },

  _onNorthAfricaClick() {
    let {type} = this.state;
    this.setState({
      type: type === 'NorthAfrica' ? 'origin' : 'NorthAfrica'
    });
  },

  _onSouthernAfricaClick() {
    let {type} = this.state;
    this.setState({
      type: type === 'SouthernAfrica' ? 'origin' : 'SouthernAfrica'
    });
  },

  _onWestAfricaClick() {
    let {type} = this.state;
    this.setState({
      type: type === 'WestAfrica' ? 'origin' : 'WestAfrica'
    });
  },

  _drawMap(data, type) {
    let width = 600;
    let height = 600;

    let config = CONFIG_SCALE[type];

    let projection = d3.geo.equirectangular()
      .scale(config['scale'])
      .translate([width / 2, height / 2])
      .rotate(config['rotate']);

    let path = d3.geo.path()
      .projection(projection);

    return (
      <svg className="map-africa" viewBox="0 0 550 600">
      {
        data.map((d) => {
          return (
            <path className="land"
                  d={path(d)}
                  data-nation={d.properties.ISO_A3}
                  onMouseEnter={this._onMouseEnter}
                  onMouseLeave={this._onMouseLeave}
                  ref={d.properties.ISO_A3}
                  style={{fill: '#2E8398'}}
                  onClick={this._onClick}>
            </path>
          );
        })
      }
      </svg>
    );
  }
});
