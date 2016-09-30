import React       from 'react';
import MenuStore   from '../../stores/MenuStore';
import RouteStore  from '../../stores/RouteStore';
import RouteAction from '../../actions/RouteAction';
import Component   from './Component';

export default React.createClass({

  getInitialState() {
    return {
      currentMenu: MenuStore.getAll()
    };
  },

  componentDidMount() {
    function toggleCatMenu() {
      $('#category-menu').slideToggle();
    }

    if (RouteStore.getCurrentRoute().name == 'index') {
      $('#btn-article').off('click', toggleCatMenu);
    }
    else {
      $('#btn-article').on('click', toggleCatMenu);
    }
  },

  render() {
    let {currentMenu} = this.state;

    return (
      <Component currentMenu={currentMenu} onMenuClick={this._onClick} />    );
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
