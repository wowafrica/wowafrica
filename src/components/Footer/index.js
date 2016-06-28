import React       from 'react';
import RouteAction from '../../actions/RouteAction';
import Component   from './Component';

export default React.createClass({

  render() {
    return (
      <Component onFooterClick={this._onClick}/>
    );
  },

  _onClick(e) {
    let {pathname, hash} = e.currentTarget;
    history.pushState({pathname: pathname, hash: hash}, '', pathname);
    RouteAction.updatePath(pathname, hash);
    e.preventDefault();
  }
});
