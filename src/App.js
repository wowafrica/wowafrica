"use strict";

import React      from 'react/addons';
import RouteStore from './stores/RouteStore';
import IndexPage  from './pages/IndexPage';

export default React.createClass({

  componentDidMount() {
    RouteStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    RouteStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <IndexPage/>
    );
  }

  _onChange() {

  }
});
