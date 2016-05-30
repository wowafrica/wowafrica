import React        from 'react';
import ReactDOM     from 'react-dom';
import RouteActions from '../../src/actions/RouteAction';
import App          from '../../src/App';
import NationModal  from '../../src/components/NationModal';
import SideBar      from '../../src/components/SideBar';

let pathName = location.pathname;
console.log(pathName);

ReactDOM.render(<SideBar />, document.getElementById('side_bar'));
ReactDOM.render(<App />, document.getElementById('content'));
ReactDOM.render(<NationModal />, document.getElementById('nation_modal'));

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
