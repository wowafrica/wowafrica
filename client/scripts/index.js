'use strict';

import $ from 'jquery';
global.$ = global.jQuery = $;
import 'semantic-ui/dist/semantic.js';

import React        from 'react/addons';
import RouteActions from '../../lib/actions/RouteAction.js';
import App          from '../../lib/App';

let pathName = location.pathname;
console.log(pathName);

React.render(<App />, document.body);

RouteActions.updatePath(pathName);

window.onpopstate = (e) => {
  let {pathName} = e.state || {pathName: '/'};
  console.log(pathName);
  RouteActions.updatePath(pathName);
};
