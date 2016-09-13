import React        from 'react';
import ReactDOM     from 'react-dom';
import IndexMenu    from '../../components/IndexMenu';
import CategoryMenu from '../../components/CategoryMenu';
import Footer       from '../../components/Footer';
import AreaSection  from '../../components/AreaSection';
import AreaMap      from '../../components/AreaMap';

import {
  updateNation, fetchNation, showNation
} from '../../actions/NationAction';
import {fetchMap}   from '../../actions/MapAction';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  getInitialState() {
    const {store} = this.context;
    const {map: {map}, nations: {nations}} = store.getState();
    return {
      type: 'origin',
      focuseNation: '',
      nations,
      map
    };
  },

  componentDidMount() {
    const {store} = this.context;

    this.unsubscribe = store.subscribe(() => this._handleChange());

    store.dispatch(fetchMap());
    store.dispatch(fetchNation());

    $('#category-menu').hide();
  },

  componentWillUnmount() {
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
    let {
      nations,
      type,
      focuseNation,
      map: {
        features,
        area
      }
    } = this.state;

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

  _handleChange() {
    const {store} = this.context;
    const {map: {map}, nations: {nations}} = store.getState();

    const preMap = this.state.map;
    const preNations = this.state.nations;

    if (preMap === map && preNations === nations) {
      return;
    }

    this.setState({map, nations});
  },

  _onClick(e) {
    let {currentTarget} = e;
    let {store} = this.context;
    // console.log($(currentTarget).attr('data-nation'));
    store.dispatch(updateNation($(currentTarget).attr('data-nation')));
    store.dispatch(showNation());
  },

  _onAreaClick(areaType) {
    let {type} = this.state;
    this.setState({
      type: type === areaType ? 'origin' : areaType
    });
  }
});
