'use strict';

import $ from 'jquery';
global.$ = global.jQuery = $;
require('semantic-ui/dist/semantic.js');
require('babel/polyfill');

import React        from 'react/addons';
import RouteActions from '../../lib/actions/RouteAction.js';
import App          from '../../lib/App';
import NationModal  from '../../lib/components/NationModal';

let pathName = location.pathname;
console.log(pathName);

React.render(<App />, document.getElementById('content'));
React.render(<NationModal />, document.getElementById('nation_modal'));

RouteActions.updatePath(pathName);

window.onpopstate = (e) => {
  let pathname = location.pathname;

  if (e.state !== null && typeof e.state.pathname !== 'undefined') {
    pathname = e.state.pathname;
  }
  // let {pathname} = e.state || {pathname: '/'};
  console.log(pathname);
  RouteActions.updatePath(pathname);
};
