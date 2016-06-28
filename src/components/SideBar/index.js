import React       from 'react';
import MenuStore   from '../../stores/MenuStore';
import RouteAction from '../../actions/RouteAction';
import Component   from './Component';

export default React.createClass({

  render() {
    let currentMenu = MenuStore.getAll();

    return (
      <Component currentMenu={currentMenu} onMenuClick={this._onClick}/>
    );
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
