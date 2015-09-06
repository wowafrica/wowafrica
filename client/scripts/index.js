require('babel/polyfill');
require('fullpage.js/jquery.fullPage');

import React        from 'react/addons';
import RouteActions from '../../src/actions/RouteAction';
import App          from '../../src/App';
import NationModal  from '../../src/components/NationModal';

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
