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

let VisualComponent = React.createClass({
  render() {
    let {visualData} = this.props;
    if (typeof visualData === 'string') {
      return (<div>${visualData}</div>);
    } else {
      return (<PieChar width="500" height="500" piedata={visualData}/>);
    }
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
          <a className="active item" data-tab="first">經濟</a>
          <a className="item" data-tab="second">信仰</a>
        </div>
        <div className="ui active tab segment" data-tab="first">
          <VisualComponent visualData={nation.economy}/>
        </div>
        <div className="ui tab segment" data-tab="second">
          <VisualComponent visualData={nation.faith}/>
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
    let {flag='kenya_flag.png', emblem='kenya_svg.png'} = nation;
    // console.log('Modal Show: ' + JSON.stringify(nation));
    flag = flag === '' ? 'kenya_flag.png' : flag;
    emblem = emblem === '' ? 'kenya_svg.png' : emblem;
    return (
      <Modal className="long" ref="modal" init={true}>
        <Icon className="close"/>
        <Header className="medium">
          <img src={`/images/nations/${emblem}`} />
          <div className="content">
            {nation.country}
          </div>
        </Header>
        <div className="image content">
          <div className="ui medium image">
            <img src={`/images/nations/${flag}`} />
            <NormalSection name="特殊象徵品">{nation.symbol}</NormalSection>
          </div>
          <div className="description">
            <NormalSection name="簡介">{nation.introduction}</NormalSection>
            <NormalSection name="首都">{nation.capital}</NormalSection>
            <NormalSection name="國家元首">{nation.headOfState}</NormalSection>
            <NormalSection name="幣制">{nation.currency}</NormalSection>
            <NormalSection name="語言">{nation.language}</NormalSection>
            <NormalSection name="政治">{nation.politics}</NormalSection>
            <NormalSection name="氣候">{nation.atmosphere}</NormalSection>
            <NormalSection name="自然地理">{nation.geography}</NormalSection>
            <NormalSection name="人口">{nation.population}</NormalSection>
            <Divider/>
            <VisualSection nation={nation}/>
          </div>
        </div>
      </Modal>
    );
  }
});
