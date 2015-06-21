'use strict';

import $            from 'jquery';
import React        from 'react/addons';
import Semantify    from 'react-semantify';
import NationsStore from '../stores/NationsStore';
import MapStore     from '../stores/MapStore';
import d3           from 'd3';

let {Divider, Modal, Icon, Header, Tab, Segment} = Semantify;

let NormalSection = React.createClass({
  render() {
    return (
      <Header className="medium">
        {this.props.name}
        <Header className="sub">{this.props.children}</Header>
      </Header>
    );
  }
});

let GeoMap = React.createClass({
  render() {

    let {nation, width, height} = this.props;

    if (nation === null) {
      return (<svg></svg>);
    }

    console.log(nation);
    console.log(width);
    console.log(height);

    let projection = d3.geo.equirectangular()
      .scale(500)
      .translate([width / 2, height / 2])
      .rotate([-35, 0]);

    let path = d3.geo.path()
      .projection(projection);

    return (
      <svg ref="svg" width={width} height={height}>
        <path className="land"
              d={path(nation)}
              data-nation={nation.properties.ISO_A3}>
        </path>
      </svg>
    );
  }
});

let PieChar = React.createClass({
  render() {

    let {width, height, piedata} = this.props;
    let halfWidth = width / 2;
    let halfHeight = height / 2;
    let radius = Math.min(width, height) / 2;
    let text = piedata.map(d => d.name);

    let colorScale = d3.scale.linear()
      .domain([0, piedata.length])
      .range(['#CEC5C5', '#593030']);

    let arc = d3.svg.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    let pie = d3.layout.pie()
      .sort(null)
      .value(d => d.percentage);

    let data = pie(piedata);

    return (
      <svg width={width} height={height}>
      {
        data.map((d, i) => {
          let translateID = arc.centroid(d);
          return (
            <g className="arc" transform={`translate(${halfWidth},${halfHeight})`}>
              <path d={arc(d)} style={{fill: colorScale(i), stroke: '#FFF'}}/>
              <text transform={`translate(${translateID})`}
                    style={{textAnchor: 'middle'}}>
                {text[i]}
              </text>
            </g>
          );
        })
      }
      </svg>
    );
  }
});

let VisualSection = React.createClass({

  componentDidMount() {
    $('.visualSection .menu .item').tab();
  },

  render() {

    let {nation} = this.props;

    return (
      <div className="visualSection">
        <div className="ui pointing secondary menu">
          <a className="active item" data-tab="first">人口</a>
          <a className="item" data-tab="second">經濟</a>
          <a className="item" data-tab="third">信仰</a>
        </div>
        <div className="ui active tab segment" data-tab="first">
          First
        </div>
        <div className="ui tab segment" data-tab="second">
          <PieChar width="500" height="500" piedata={nation.economy}/>
        </div>
        <div className="ui tab segment" data-tab="third">
          <PieChar width="500" height="500" piedata={nation.faith}/>
        </div>
      </div>
    );
  }
});

export default React.createClass({

  getInitialState() {
    return {
      nation: NationsStore.getCurrentNation(),
      map: null
    };
  },

  componentDidMount() {
    NationsStore.addShowListener(this._onShow);
  },

  componentWillUnmount() {
    NationsStore.removeShowListener(this._onShow);
  },

  _onShow() {
    let nation = NationsStore.getCurrentNation();
    let map = MapStore.getNationMapByISO(nation.iso);
    this.setState({
      nation: nation,
      map: map
    });
    $(React.findDOMNode(this.refs.modal)).modal('show');
  },

  render() {
    let {nation, map} = this.state;
    console.log('Modal Show: ' + JSON.stringify(nation));
    console.log('Modal Show Map: ' + JSON.stringify(map));
    return (
      <Modal className="long" ref="modal" init={true}>
        <Icon className="close"/>
        <Header className="medium">
          <img src="/images/kenya_svg.png" />
          <div className="content">
            {nation.country}
            <Header className="sub">{nation.introduction}</Header>
          </div>
        </Header>
        <div className="content">
          <div className="ui image">
            <img src="/images/kenya_flag.png" />
            <NormalSection name="特殊象徵品">{nation.symbol}</NormalSection>
          </div>
          <div className="description">
            <NormalSection name="首都">{nation.capital}</NormalSection>
            <NormalSection name="國家元首">{nation.headOfState}</NormalSection>
            <NormalSection name="幣制">{nation.currency}</NormalSection>
            <NormalSection name="語言">{nation.language}</NormalSection>
            <NormalSection name="政治">{nation.politics}</NormalSection>
            <NormalSection name="氣候">{nation.atmosphere}</NormalSection>
            <NormalSection name="自然地理">{nation.geography}</NormalSection>
            <Divider/>
            <VisualSection nation={nation}/>
          </div>
        </div>
      </Modal>
    );
  }
});
