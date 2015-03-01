"use strict";

import React        from 'react/addons';
import RouteActions from '../../src/actions/RouteAction.js';
import App          from '../../src/App';

// var pathName = location.pathname;
// console.log(pathName);

var pathName = location.hash.substring(1);
console.log(pathName);

React.render(<App />, document.body);

RouteActions.updatePath(pathName);
