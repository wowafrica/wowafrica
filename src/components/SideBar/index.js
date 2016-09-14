import React       from 'react';
import RouteAction from '../../actions/RouteAction';
import {updateMenu} from '../../actions/MenuAction';
import Component   from './Component';

export default React.createClass({

  contextTypes: {
    store: React.PropTypes.object
  },

  getInitialState() {
    const {store} = this.context;
    const {menu} = store.getState();
    return {
      currentMenu: menu
    };
  },

  componentDidMount() {
    const {store} = this.context;

    this.unsubscribe = store.subscribe(() => this._handleChange());
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  _handleChange() {
    const {store} = this.context;
    const {menu} = store.getState();

    const prevMenu = this.state.currentMenu;

    if (prevMenu === menu) {
      return;
    }

    this.setState({currentMenu: menu});
  },

  render() {
    let {currentMenu} = this.state;

    return (
      <Component currentMenu={currentMenu} onMenuClick={this._onClick}/>
    );
  },

  _onClick(e) {
    const {store} = this.context;
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    store.dispatch(updateMenu(pathname));
    e.preventDefault();
    $('.ui.sidebar').sidebar('hide');
  }
});
