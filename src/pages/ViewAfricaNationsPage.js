import React        from 'react/addons';
import IndexMenu    from '../components/IndexMenu';
import CategoryMenu from '../components/CategoryMenu';
import Footer       from '../components/Footer';
import MapStore     from '../stores/MapStore';
import NationsStore from '../stores/NationsStore';
import NationAction from '../actions/NationAction';
import d3           from 'd3';
import Semantify    from 'react-semantify';

let {Modal, Content, Icon, Accordion, List, Image} = Semantify;

export default React.createClass({

  getInitialState() {
    return ({
      map: MapStore.getAll(),
      nations: NationsStore.getAll()
    });
  },

  componentDidMount() {
    NationsStore.addAreaListener(this._onChange);
    MapStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    NationsStore.removeAreaListener(this._onChange);
    MapStore.removeChangeListener(this._onChange);
  },

  _onMouseEnter(e) {
    let {currentTarget} = e;
    let iso = $(currentTarget).attr('data-nation');
    if (iso in this.refs) {
      this.refs[iso].getDOMNode().style.fill = '#F88D2F';
    }
  },

  _onMouseLeave(e) {
    let {currentTarget} = e;
    let iso = $(currentTarget).attr('data-nation');
    if (iso in this.refs) {
      this.refs[iso].getDOMNode().style.fill = '#2E8398';
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
    let {nations} = this.state;
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
              {this._drawMap(features)}
            </div>
            <div className="five wide column">
              <Accordion className="content-area" init={true}>
                <div className="title"><Icon className="dropdown"/>中非</div>
              {this.renderArea(area.CentralAfrica)}
                <div className="title"><Icon className="dropdown"/>東非</div>
                {this.renderArea(area.EastAfrica)}
                <div className="title"><Icon className="dropdown"/>北非</div>
                {this.renderArea(area.NorthAfrica)}
                <div className="title"><Icon className="dropdown"/>南非</div>
                {this.renderArea(area.SouthernAfrica)}
                <div className="title"><Icon className="dropdown"/>西非</div>
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

  _drawMap(data) {
    let width = 600;
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
