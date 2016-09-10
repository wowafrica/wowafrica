import React        from 'react';
import ReactDOM     from 'react-dom';
import IndexMenu    from '../../components/IndexMenu';
import CategoryMenu from '../../components/CategoryMenu';
import Footer       from '../../components/Footer';
import AreaSection  from '../../components/AreaSection';
import AreaMap      from '../../components/AreaMap';
import NationsStore from '../../stores/NationsStore';
import NationAction from '../../actions/NationAction';
import {fetchMap}   from '../../actions/MapAction';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  getInitialState() {
    const {store} = this.context;
    const {map: {map}} = store.getState();
    return {
      nations: NationsStore.getAll(),
      type: 'origin',
      focuseNation: '',
      map
    };
  },

  componentDidMount() {
    const {store} = this.context;

    this.unsubscribe = store.subscribe(() => this._handleChange());

    store.dispatch(fetchMap());

    NationsStore.addAreaListener(this._onChange);
    $('#category-menu').hide();
  },

  componentWillUnmount() {
    NationsStore.removeAreaListener(this._onChange);
    this.unsubscribe();
  },

  _onMouseEnter(e) {
    let {currentTarget} = e;
    let {focuseNation} = this.state;
    let iso = $(currentTarget).attr('data-nation');
    if (focuseNation !== iso) {
      this.setState({
        focuseNation: iso
      });
    }
  },

  _onMouseLeave(e) {
    let {currentTarget} = e;
    let {focuseNation} = this.state;
    let iso = $(currentTarget).attr('data-nation');
    if (focuseNation === iso) {
      this.setState({
        focuseNation: ''
      });
    }
  },

  render() {
    let {nations, type, focuseNation} = this.state;
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
              <AreaMap nations={features}
                       type={type}
                       focuseNation={focuseNation}
                       onAreaMouseEnter={this._onMouseEnter}
                       onAreaMouseLeave={this._onMouseLeave}
                       onNationClick={this._onClick}/>
            </div>
            <div className="five wide column">
              <AreaSection area={area}
                           onAreaMouseEnter={this._onMouseEnter}
                           onAreaMouseLeave={this._onMouseLeave}
                           onAreaClick={this._onAreaClick}
                           onNationClick={this._onClick}/>
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
      nations: NationsStore.getAll()
    });
  },

  _handleChange() {
    const {store} = this.context;
    const {map: {map}} = store.getState();

    const preMap = this.state.map;

    if (preMap === map) {
      return;
    }

    this.setState({map});
  },

  _onClick(e) {
    let {currentTarget} = e;
    console.log($(currentTarget).attr('data-nation'));
    NationAction.updateNation($(currentTarget).attr('data-nation'));
  },

  _onAreaClick(areaType) {
    let {type} = this.state;
    this.setState({
      type: type === areaType ? 'origin' : areaType
    });
  }
});
