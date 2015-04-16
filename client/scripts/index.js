'use strict';

import $ from 'jquery';
global.$ = global.jQuery = $;
require('semantic-ui/dist/semantic.js');

import React        from 'react/addons';
import RouteActions from '../../lib/actions/RouteAction.js';
import App          from '../../lib/App';

let pathName = location.pathname;
console.log(pathName);

React.render(<App />, document.body);

RouteActions.updatePath(pathName);

window.onpopstate = (e) => {
  let {pathname} = e.state || {pathName: '/'};
  console.log(pathname);
  RouteActions.updatePath(pathname);
};
