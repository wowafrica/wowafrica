"use strict";

import React      from 'react/addons';
import RouteStore from './stores/RouteStore';
import IndexPage  from './pages/IndexPage';

export default React.createClass({

  getInitialState() {
    return {
      currentRoute: RouteStore.getCurrentRoute()
    };
  },

  componentDidMount() {
    RouteStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    RouteStore.removeChangeListener(this._onChange);
  },

  render() {
    var {currentRoute} = this.state;
    var CurrentPage = currentRoute.config['page'];
    return (
      <CurrentPage/>
    );
  },

  _onChange() {
    this.setState({
      currentRoute: RouteStore.getCurrentRoute()
    });
  }
});
